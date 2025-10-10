"use client"

import { WS_URL } from "@/config";
import { useEffect, useState } from "react";
import { Canvas } from "./Canvas";

export const RoomCanvas = ({roomId}: {roomId :string})=>{
    
    const [socket, setSocket]  = useState<WebSocket | null>(null);

    useEffect(()=>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzYWQwODU2Yy03NjQxLTQyNzAtYWFkZC1hMDI3YjcyMDgzMmIiLCJpYXQiOjE3NjAwMzU3NzF9.gR6OH-vXFcvDTPfv3YR-MXkIVyKZYSkS_ljKBEhBsc0";
        const ws = new WebSocket(`${WS_URL}?token=${token}`);
        ws.onopen = ()=>{
            setSocket(ws);
            const data = {
                type: "join_room",
                roomId,
            }
            console.log(data);
            ws.send(JSON.stringify(data))
        }
    },[])
    
    
    if(!socket){
        return <div className="text-black">
            Connecting to the ws server....
        </div>
    }

    return <div>
        <Canvas roomId={roomId} socket={socket}/>
    </div>
}