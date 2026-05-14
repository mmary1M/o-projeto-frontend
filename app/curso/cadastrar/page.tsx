"use client"
import { SubmitEvent, useState } from "react";
import { createCurso } from "./actions";
import { useRouter } from "next/navigation";

export default function AlunoCadastroPage() {
    const [nome, setNome] = useState("");
    const [cargaHoraria, setcargaHoraria] = useState("");
    const [professor, setprofessor] = useState("");
    const [descricao, setdescricao] = useState("");
    const router = useRouter();

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        const response = await createCurso({
            nome,
            professor,
            cargaHoraria: Number(cargaHoraria),
            descricao
        });

        if (!response) {
            setNome("");
            setcargaHoraria("");
            setprofessor("");
            setdescricao("");
            router.push("/cursos");
            return;
        }

        alert(response);
    }



    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <form className="px-10 py-5 flex flex-col gap-2 bg-pink-950   rounded-lg"
                onSubmit={handleSubmit}
            >
                <input
                    className="border border-white text-white pl-1"
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    className="border border-white text-white pl-1"
                    type="number"
                    placeholder="cargaHoraria"
                    value={cargaHoraria}
                    onChange={(e) => setcargaHoraria(e.target.value)}
                />
                <input
                    className="border border-white text-white pl-1"
                    type="text"
                    placeholder="professor"
                    value={professor}
                    onChange={(e) => setprofessor(e.target.value)}
                />
                <input
                    className="border border-white text-white pl-1"
                    type="text"
                    placeholder="descricao"
                    value={descricao}
                    onChange={(e) => setdescricao(e.target.value)}
                />
                <button className="bg-white text-red-950 py-2 rounded-lg " type="submit">Cadastrar</button>

            </form>
        </div>
    )

}