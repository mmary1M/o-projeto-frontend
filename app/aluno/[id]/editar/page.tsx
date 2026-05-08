"use client";

import { useParams, useRouter } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";
import { getAluno, updateAluno } from "../actions";
import { Aluno } from "@/interfaces/alunos";
export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);
    const router = useRouter();

    useEffect(() => {
        getAluno(Number(id)).then(response => setAluno(response));
    }, [id]);

    function handleChange(value: string | number, key: keyof Aluno) {
        setAluno(oldState => ({ ...oldState, [key]: value }))

    }

    async function handleUpdate(e: SubmitEvent) {
        const response = await updateAluno(Number(id), aluno);

        if (response) {
            alert(response);
            return;
        }

        router.push(`/alunos/${id}`);
    }


    return (
        <div className="h-screen w-screens font-bold flex flex-col items-center">
            <form className=" items-center text-red-900 w-70 h-40 bg-white rounded-md shadow-md shadow-white p-2 overflow-auto"
                onSubmit={handleUpdate}
            >

                <div>
                    nome:
                    <input value={aluno.nome} className="bg-red-200 flex border" onChange={(e) => handleChange(e.target.value, "nome")} />
                </div>

                <div>
                    cpf:
                    <input value={aluno.cpf}
                        className="bg-red-200 flex border"
                        type="number"
                        onChange={(e) => handleChange(Number(e.target.value), "cpf")} />

                </div>

                <div>
                    idade:
                    <input value={aluno.idade}
                        className="bg-red-200 flex border"
                        type="number"
                        onChange={(e) => handleChange(Number(e.target.value), "idade")} />

                </div>

                <div>
                    email:
                    <input value={aluno.email} className="bg-red-200 flex border" onChange={(e) => handleChange(e.target.value, "email")} />
                </div>

                <button className="bg-black text-white rounded-x1 px-10 py-2  cursor-pointer hover:opacity-80">
                    Editar
                </button>
            </form>
        </div>


    )
}