import { ReactNode } from "react"


export function IconButton({icon, onClick, activated}:{
    icon: ReactNode,
    onClick: ()=>void,
    activated : boolean
}){
        return <div 
        className={`rounded-2 p-2 rounded-2xl border m-2 bg-black ${activated ? "text-red-700": "text-white"}`} 
        onClick={onClick}
        >
        {icon}
    </div>
}