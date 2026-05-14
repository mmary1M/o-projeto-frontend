"use client"

import Link from "next/link";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteCurso } from "@/app/cursos/actions";

//tipagem 
interface Props {
    id: number;
    nome: string;
}


export default function CursoItem({ nome, id }: Props) {
    const router = useRouter();

    function handleDelete() {
        deleteCurso(id);
        router.refresh();
    }

    return (
        <div className="flex gap-1">
            <Link href={`curso/${id}`}>
                <li className="underline decoration-pink-700">
                    {nome}</li>
            </Link>
            <button className="text-red-900" onClick={handleDelete}
            >
                <Trash /></button>

        </div>

    );

}