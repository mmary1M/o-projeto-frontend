"use client"

import {  SubmitEvent, useState } from "react"
import { createAluno } from "./actions";
import { useRouter } from "next/navigation";

export default function AlunosCadastroPage() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [idade, SetIdade] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    

     async function handleSubimit(e: SubmitEvent){
     e.preventDefault();
     const response = await createAluno({
        nome,
        idade: Number(idade),
        cpf: Number(cpf),
        email,
     });
     if (!response){
        setNome("");
        SetIdade("");
        setCpf("");
        setEmail("");
        router.push("/alunos");
        return;
     }

     alert(response);
       
    }

    return (
        
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="mt-10 mb-10 text-5xl font-bold">cadastro dos alunos</h1>
            <form className="px-10 py-5 flex flex-col gap-2 bg-pink-200 rounded-1 borde border-black "
            onSubmit={handleSubimit}> 
                <input
                    className="border border-black text-black p1-1 "
                    type="text"
                    placeholder="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    className="border border-black text-black p1-1"
                    type="number"
                    placeholder="idade"
                    value={idade}
                    onChange={(e) => SetIdade(e.target.value)}
                />

                <input
                    className="border border-black text-black p1-1"
                    type="number"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />

                <input
                    className="border border-black text-black p1-1"
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <button className="bg-black text-white py-2 rounded-1g" 
                type="submit">Cadastrar</button>
            </form>
        </div>
       
    )
}