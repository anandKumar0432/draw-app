import express, { text } from "express";
import cors from "cors"
import jwt, { JwtHeader } from "jsonwebtoken"
import {JWT_SECRET } from "@repo/backend-common/config"
import { middleware } from "./middleware";
import { CreateUserSchema, SinginSchema, CreateRoomSchema } from "@repo/common/types"
import { prismaClient } from "@repo/db/client"
import bcrypt from "bcrypt"


const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup",async (req,res)=>{
    const body  = req.body;
    const parseData = CreateUserSchema.safeParse(body);
    if(!parseData.success){
        return res.json({
            message: "Incorrect Inputs"
        })
    }
    try{
        const hashPassword  = await bcrypt.hash(parseData.data.password, 10);
        console.log("before user created")
        const user = await prismaClient.user.create({
            data: {
                username: parseData.data.username,
                password: hashPassword,
                name: parseData.data.name,
                photo: parseData.data.photo ?? ""
            },
        })
        console.log(user);

        return res.json({
            id:user.id,
            message : "User successfully created"
        })
    }catch(e){
        return res.status(500).json({
            message: "email already used !"
        })
    }
})

app.post("/signin", async (req, res)=>{
    const body  = req.body;
    const parseData = SinginSchema.safeParse(body);

    try{
        if(!parseData.success){
            return res.json({
                message: "Incorrect Inputs"
            })
        }
        const user = await prismaClient.user.findUnique({
            where:{
                username: parseData.data.username
            }
        })

        if(!user){
            return res.json({
                message: "email or password doesn't match",
            })
        }

        const decodedPassword = bcrypt.compare(body.password , user.password);
        if(!decodedPassword){
            return res.status(401).json({
                message: "email or password doesn't matched !"
            })
        }else{
            const token = jwt.sign({
                userId:user.id,
            }, JWT_SECRET)

            return res.status(200).json({
                jwt_token: token,
                message: "user signed in successfully !"
            })
        }
    }catch(e){
        res.json({
            message: "something went wrong !"
        })
    }
})

app.post("/room",middleware, async (req, res)=>{

    const body = req.body;
    const parseData = CreateRoomSchema.safeParse(body);
    if(!parseData.success){
        return res.json({
            message: "Incorrect Inputs"
        })
    }
    try{
        // @ts-ignore
        const userId = req.userId;
        const room = await prismaClient.room.create({
            data:{
                slug:body.slug,
                adminId: userId,
            }
        })

        return res.status(200).json({
            roomId: room.id
        })
    }catch(e){
        return res.json({
            message: "Chat room exists with this name !"
        })
    }
})

app.get("/chats/:roomId", async (req , res)=>{
    const roomId = Number(req.params.roomId);

    try{
        const messages = await prismaClient.chat.findMany({
        where:{
            roomId,
        },
        orderBy : {
            id: "desc"
        },
        take: 50
    })
    return res.json({
        messages
    })
    } catch(e){
        return res.json({
            message: "something went wrong !"
        })
    }
})

app.listen(3001)