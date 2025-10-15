"use client"

import { drawInit } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { IconButton } from "./IconButton";
import { Circle, Pencil, RectangleHorizontalIcon } from "lucide-react";

type Shape = "circle" | "rect" | "pencil";


export function Canvas({roomId, socket}: {roomId: string; socket: WebSocket}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [selectedTool, setSelectedTool] = useState<Shape>("circle");

    useEffect(()=>{
      //@ts-ignore
      window.selectedTool = selectedTool;
    },[selectedTool])

    useEffect(()=>{
        if(canvasRef.current){
            const canvas = canvasRef.current;
            drawInit(canvas, roomId, socket);
        }
    }, [canvasRef])

  return (
    <div className="h-[100vh] overflow-hidden">
        <canvas ref={canvasRef} height={window.innerHeight} width={window.innerWidth}></canvas>
        <TopBar selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
    </div>
  )
}

function TopBar({selectedTool, setSelectedTool}:{
  selectedTool : Shape,
  setSelectedTool : (tool : Shape)=>void
}){
  return <div className="fixed top-2 flex  border-2 border-gray-500 rounded-xl">
    <IconButton 
    icon={<Pencil/>}
    onClick={()=> setSelectedTool("pencil") }
    activated={selectedTool === "pencil"}
    />
    <IconButton
    icon={<Circle/>} 
    onClick={()=> setSelectedTool("circle") }
    activated={selectedTool === "circle"} 
    />
    <IconButton 
    icon={<RectangleHorizontalIcon/>} 
    onClick={()=> setSelectedTool("rect") } 
    activated={selectedTool == "rect"} 
    />
  </div>
}

