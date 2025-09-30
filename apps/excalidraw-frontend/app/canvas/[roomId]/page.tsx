"use client"
import { drawInit } from "@/draw";
import { useEffect, useRef } from "react"

export default function canvas(){
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        if(canvasRef.current){
            const canvas = canvasRef.current;
            drawInit(canvas);
        }
    }, [canvasRef])
    
    return <div>
        <canvas ref={canvasRef} height={2000} width={1000}></canvas>
    </div>
}