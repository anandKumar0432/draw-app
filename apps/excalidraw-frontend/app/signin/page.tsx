"use client"
import { AuthPage } from "@/components/AuthPage";
import { useRouter } from "next/navigation";

export default function SingIn(){
    const router = useRouter();
    return <div className="min-h-screen bg-white">
        <AuthPage isSignin={true} onClick={()=>{
            router.push("/signin")
        }} ></AuthPage>
    </div>
}