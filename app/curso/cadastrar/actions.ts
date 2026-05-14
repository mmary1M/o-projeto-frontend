"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

interface createCurso {
    nome: string,
    professor: string,
    cargaHoraria: number,
    descricao: string,
}
export async function createCurso(curso: createCurso) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;


    const response = await fetch("http://localhost:8080/curso", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":"application/json",
        },
        body: JSON.stringify(curso),
    });
    const data = await response.json();

    if (response.status === 201) {
        revalidateTag("listar", "max");
        return;
    }

    return data;

}