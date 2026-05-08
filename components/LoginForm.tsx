"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props{
    onSend: (email: string,passowrd:string) => Promise<void |string>;
}

export default function LoginForm({onSend}: Props) {
    const router =useRouter()
    const [email, setEmail] = useState("");
    const [passowrd, setPassoword] = useState("");

     async function handleSubmit(){
        const response = await onSend(email,passowrd);

        if(response){
            alert(response);
            return;
        }
        router.push("/")
     }
    return (
        <div className="w-50 h-70 bg-white rounded-md shadow-md shadow-white text-black p-2  flex flex-col items-center">

            <input type="email" 
            placeholder="Email" 
            className="w-full border border-b-black text-center " 
            value={email}
            onChange={(e) => setEmail(e.target.value)} />


            <input type="password" 
            placeholder="senha" 
            className="w-full border border-b-black  text-center " 
            value={passowrd}
            onChange={(e) =>setPassoword(e.target.value)}
            
            />
            <button className="bg-black text-white flex flex-col items-center mt-30 mb-30 cursor-pointer hover:opacity-80"
            onClick={handleSubmit}
            >
            Entrar
            </button>




        </div>
    )
}