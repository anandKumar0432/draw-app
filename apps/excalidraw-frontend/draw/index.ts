import axios from "axios";
import { BACKEND_URL } from "../config"

type Shape = {
    type : "rect";
    x : number;
    y : number;
    height : number;
    width : number;
} | {
    type : 'circle';
    centerX : number;
    centerY : number;
    radius  : number;
} | null;

export async function drawInit(canvas : HTMLCanvasElement, roomId : string, socket : WebSocket){

    const ctx = canvas.getContext("2d");
    const existingShapes : Shape[] = await getExistingShapes(roomId);

    if(!ctx){
        return;
    }

    socket.onmessage = (event)=>{
        const message = JSON.parse(event.data);
        if(message.type == "chat"){
            const parsedShape = JSON.parse(message.message);
            existingShapes.push(parsedShape.shape);
            console.log(parsedShape.shape);
            clearCanvas(existingShapes, canvas, ctx);
        }
    }
    clearCanvas(existingShapes, canvas, ctx);

    let clicked = false;
    let startX = 0;
    let startY = 0;

    canvas.addEventListener("mousedown", (e)=>{
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
    })

    canvas.addEventListener("mouseup", (e)=>{
        clicked = false;
        const width = e.clientX - startX;
        const height = e.clientY - startY;  
        const centerX = startX + height;
        const centerY = startY + width;
        const radius = Math.max(height, width) / 2;
        let shape : Shape = null;
        // @ts-expect-error
        const selectedTool = window.selectedTool;
        if (selectedTool === "rect"){
            shape  = {
                type : 'rect',
                x : startX,
                y : startY,
                height,
                width
            }
        } else if (selectedTool === "circle"){
            shape = {
                type : "circle",
                centerX,
                centerY,
                radius
            }
        }
            existingShapes.push(shape)
            socket.send(JSON.stringify({
                    type: "chat",
                    message: JSON.stringify({
                        shape
                    }),
                    roomId : parseInt(roomId),
                })
            );
    })

    canvas.addEventListener("mousemove", (e)=>{
        if(clicked){
            const width = e.clientX - startX;
            const height = e.clientY - startY;
            clearCanvas(existingShapes,canvas,ctx);
            ctx.strokeStyle = "rgba(255, 255, 255)";
            //@ts-ignore
            const selectedTool = window.selectedTool;
            if(selectedTool === "rect"){
            ctx.strokeRect(startX, startY, width, height);
            }else if(selectedTool === "circle"){
                const centerX = startX + width / 2;
                const centerY = startY + height / 2;
                const radius = Math.max(height, width) / 2;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
                ctx.stroke();
            }
        }
        
    })
}

function clearCanvas(existingShapes : Shape[], canvas : HTMLCanvasElement, ctx : CanvasRenderingContext2D){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0)";
    ctx.fillRect(0,0, canvas.width, canvas.height);

    existingShapes.map((shape)=>{
        if (shape && shape.type == "rect"){
            ctx.strokeStyle = "rgba(255, 255, 255)";
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
        } else if (shape && shape.type == "circle"){
            ctx.strokeStyle = "rgba(255, 255, 255)";
            ctx.beginPath();
            ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, 2 * Math.PI);
            ctx.stroke();
        }
    })
}

async function getExistingShapes(roomId : string){
    const res = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
    const messages = res.data.messages;

    const shapes = messages.map((x : {message: string}) =>{
        const messageData = JSON.parse(x.message);
        return messageData.shape;
    })
    return shapes;
}