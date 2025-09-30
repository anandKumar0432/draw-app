"use client"
import { AuthPage } from "@/components/AuthPage";
import {useRouter} from "next/navigation";

export default function SignUp(){
    const router = useRouter();
    return <div>
        <AuthPage isSignin={true} onClick={()=>{
            router.push("/signup")
        }} ></AuthPage>
    </div>
}