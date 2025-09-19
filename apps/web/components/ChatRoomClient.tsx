"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export function ChatRoomClient({
    messages,
    id
}:{
    messages: {message:string}[],
    id: string
}){
    const [chats,setChats] = useState(messages);
    const {socket, loading} = useSocket();

    useEffect(()=>{
        if(socket && !loading){
            socket.onmessage = (event: MessageEvent) => {
                const parsedData = JSON.parse(event.data);
                if(parsedData.type === "chat"){
                    setChats(c => [...c , parsedData.message]);
                }
            }
        }
    },[loading,socket])
}