import LoginForm from "@/components/LoginForm";

import { loginAction } from "./actions";

export default function loginPage() {
   
    return (
        <div className=" h-screen w-screen flex flex-col items-center">
            <h1 className="mt-10 mb-10 text-5xl font-bold">Login</h1>

            <LoginForm onSend={loginAction} />
        </div>
    )
}