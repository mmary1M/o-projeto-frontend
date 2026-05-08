"use client"

import Link from "next/link";
import { Trash } from "lucide-react";
import { deleteAluno } from "@/app/alunos/actions";
import { useRouter } from "next/navigation";

//tipagem 
interface Props {
    id: number;
    nome: string;
}


export default function AlunoItem({ nome, id }: Props) {
    const router = useRouter();

    function handleDelete(){
        deleteAluno(id);
        router.refresh();
    }

    return (
        <div className="flex gap-1">
            <Link href={`/aluno/${id}`}>
                <li className="underline decoration-pink-700 decoration-wavy">
                    {nome}</li>
            </Link>
            <button className="text-blue-300" onClick={handleDelete}
            >
                <Trash/></button>

        </div>

    );
    }