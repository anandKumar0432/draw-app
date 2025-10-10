import { WebSocket, WebSocketServer } from 'ws';
import jwt from "jsonwebtoken"
import { JWT_SECRET} from "@repo/backend-common/config"
import { prismaClient} from "@repo/db/client"

const wss = new WebSocketServer({ port: 8080 });

interface User{
    ws: WebSocket,
    rooms: string[],
    userId: string
}

const users: User[] = [];

function checkUser(token:string):string | null{
    try{
        const decoded = jwt.verify(token, JWT_SECRET );

        if(typeof decoded == "string"){
            return null;
        }

        if(!decoded || !decoded.userId){
            return null;
        }
        return decoded.userId;
    } catch (e){
        return null;
    }
    return null;
}

wss.on('connection', function connection(ws, request) {

    const url = request.url;
    if(!url){
        return;
    }
    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token") || "";

    const userId = checkUser(token);

    if(userId == null){
        ws.close();
        return null;
    }

    users.push({
        ws,
        rooms : [],
        userId,
    })

    ws.on('message', async function message(data) {
        let parsedData; //{type: join_room, roomId: 1}
        console.log("data : ", data);
        if(typeof data !== "string"){
            parsedData = JSON.parse(data.toString());
        }else{
            parsedData = JSON.parse(data);
        }
        console.log("parsedata : ", parsedData);
        if(parsedData.type === "join_room"){
            const user = users.find(x => x.ws === ws);
            user?.rooms.push(String(parsedData.roomId));
        }

        if(parsedData.type === "leave_room"){
            const user = users.find(x => x.ws === ws);
            if(!user){
                return ;
            }
            user.rooms = user?.rooms.filter(x => x !== parsedData.roomId);
        }

        if(parsedData.type === "chat"){
            const roomId = String(parsedData.roomId);
            const message = parsedData.message;

            await prismaClient.chat.create({
                data:{
                    userId,
                    roomId : Number(roomId),
                    message
                }
            })

            users.forEach(u => {
                if (u.rooms.includes(roomId) && u.ws !== ws) {
                    u.ws.send(JSON.stringify({
                    type: "chat",
                    message,
                    roomId
                    }));
                }
            });
        }
    });
});