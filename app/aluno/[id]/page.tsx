"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "./actions";
import { Aluno } from "@/interfaces/alunos";
import { PenBox } from "lucide-react";
import Link from "next/link";


export default function AlunoPage() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({} as Aluno);

    useEffect(() => {
        getAluno(Number(id)).then(response => setAluno(response));
    }, [id]);

    return (
        <div className="h-screen w-screens font-bold flex flex-col items-center">
            <div className=" items-center text-red-900 w-70 h-40 bg-white rounded-md shadow-md shadow-white p-2 overflow-auto">
                <div className="flex gap-1">
                    <p > nome: {aluno.nome} </p>
                    <Link href={`/aluno/${id}/editar`}>
                        <PenBox/>

                    </Link>
                </div>

                <p >email: {aluno.email}</p>
                <p>idade: {aluno.idade}</p>
                <p>cpf: {aluno.cpf}</p>
                <p className="mt-10 mb-2">Cursos:</p>
                <ul className="flex flex-col gap-1 list-disc list-inside"
                    {...aluno.cursos?.map((curso) => (
                        <li key={curso.id}>{curso.nome}</li>
                    ))}></ul>
            </div>
        </div>


    )
}