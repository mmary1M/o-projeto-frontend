"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurso } from "./actions";
import { Divide, PenBox } from "lucide-react";
import Link from "next/link";
import { Curso } from "@/interfaces/cursos";


export default function CursoPage() {
    const { id } = useParams();
    const [curso, setCurso] = useState({} as Curso);

    useEffect(() => {
        getCurso(Number(id)).then(response => setCurso(response));
    }, [id]);

    return (
        <>
         <div className="h-screen w-screens font-bold flex flex-col items-center">
            <div className=" items-center text-red-900 w-70 h-40 bg-white rounded-md shadow-md shadow-white p-2 overflow-auto">
                <div className="flex gap-1">
                    <p> nome: {curso.nome} </p>
                    <Link href={`/curso/${id}/editar`}>

                    </Link>
                </div>

                <p >nome: {curso.nome}</p>
                <p>professor: {curso.professor}</p>
                <p>cargaHoraria: {curso.cargaHoraria}</p>
                <p>descricao: {curso.descricao}</p>
                <p className="mt-10 mb-2">Alunos:</p>
                <ul className="flex flex-col gap-1 list-disc list-inside"
                    {...curso.alunos?.map((aluno) => (
                        <li key={aluno.id}>{aluno.nome}</li>
                    ))}></ul>
            </div>
        </div>

        </>
    )
}