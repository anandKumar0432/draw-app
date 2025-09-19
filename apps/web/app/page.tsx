"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const[roomId, setRoomId] = useState("");
  const Router = useRouter();

  return (
    <div className="p-5 border bg-white text-black">
      <input value={roomId} onChange={(e)=>{
        setRoomId(e.target.value);
      }} placeholder="Enter roomId" type="text" className="outline-none border border-gray-400 rounded-lg p-1 mr-1 text-md"/>
      <button className=" bg-blue-500 hover:cursor-pointer rounded-md p-1 hover:bg-blue-700 text-white text-md " onClick={()=>{
        Router.push(`/room/${roomId}`);
      }}>Join Room</button>
    </div>
  );
}
