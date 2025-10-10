
import { NavBar } from "./NavBar";
import { useRouter } from "next/navigation";
import {Input} from "@repo/ui/Input"

interface AuthPageProps {
    isSignin: boolean;
    onClick: ()=>void;
}

export function AuthPage({ isSignin, onClick }: AuthPageProps) {
    const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className=" py-4">
        <NavBar />
      </div>

      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 mx-4 transition-transform hover:scale-[1.01]">
        
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            {isSignin ? "Welcome Back" : "Create an Account"}
          </h2>
          <p className="text-gray-500 text-center mb-8">
            {isSignin
              ? "Sign in to continue to your dashboard"
              : "Join us and start your journey today"}
          </p>

          <div className="space-y-5">
            <Input 
            type="text"
            placeholder="Email"
            />
            <Input 
            type="Password"
            placeholder="Password"
            />
          </div>

          <div className="mt-8">
            <button
              onClick={onClick}
              className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg shadow-md transition-all active:scale-95"
            >
              {isSignin ? "Sign In" : "Sign Up"}
            </button>
          </div>
          
            {isSignin ? (
              <div className="text-center text-gray-600 text-sm mt-6">
                Don’t have an account?{" "}
                <button onClick={()=>{
                    router.push("/signup")
                }} className="text-indigo-600 font-medium cursor-pointer hover:underline">
                  Sign up
                </button>
              </div>
            ) : (
              <div className="text-center text-gray-600 text-sm mt-6">
                Already have an account?{" "}
                <button onClick={()=>{
                    router.push("/signin")
                }} className="text-indigo-600 font-medium cursor-pointer hover:underline">
                  Sign in
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
