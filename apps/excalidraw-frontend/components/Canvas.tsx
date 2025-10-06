"use client"

import { WS_URL } from "@/config";
import { drawInit } from "@/draw";
import { useEffect, useRef, useState } from "react";

export const Canvas = ({roomId}: {roomId :string})=>{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [socket, setSocket]  = useState<WebSocket | null>(null);

    useEffect(()=>{
        const ws = new WebSocket(WS_URL);
        ws.onopen = ()=>{
            setSocket(ws);
        }
    },[])
    useEffect(()=>{
        if(canvasRef.current){
            const canvas = canvasRef.current;
            drawInit(canvas, roomId);
        }
    }, [canvasRef])
    
    if(!socket){
        return <div className="text-black">
            Connecting to the ws server....
        </div>
    }

    return <div>
        <canvas ref={canvasRef} height={2000} width={1240}></canvas>
    </div>
}