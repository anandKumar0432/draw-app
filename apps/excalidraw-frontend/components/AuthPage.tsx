
interface AuthPageProps {
    isSignin: boolean;
    onClick: ()=>void;
}

export function AuthPage({isSignin,onClick}:AuthPageProps){
    return <div className="w-screen h-screen flex justify-center items-center text-black">
        <div className="bg-white rounded p-2 m-2">
            <div className="p-2">
                <input type="text" placeholder="Email" />
            </div>
            <div className="p-2">
                <input type="password" placeholder="Password" />
            </div>
            <div className="flex justify-center items-center">
                <button onClick={onClick} className="bg-blue-400 p-2 rounded-md">{isSignin?"Sign in" : "Sign up"}</button>
            </div>
        </div>
    </div>
}