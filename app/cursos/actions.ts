"use server"


import { Curso } from "@/interfaces/cursos";
import { cookies } from "next/headers";
import {revalidateTag} from "next/cache";
import { redirect } from "next/navigation";

export async function getCurso() {
    try {
        const cookiesStore = await cookies();
        const token = cookiesStore.get("access_token")?.value;


        const response = await fetch("http://localhost:8080/alunos", {
            headers: {
                Authorization: 
            `Bearer ${token}`,
            },
            next: { tags: ["listar"] },
        })

        if (response.status === 401) {
            redirect("/login");

        }

        if (response.status === 200) {
            const data = await response.json();
            return data as Curso[];
        }

        console.error(response);
        return [];

    } catch (e) {
        console.error(e);
        return []
    }
}

 export async function deleteCurso(id: number) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("acess_token")?.value;

    const respose = await fetch(`http://localhost:8080/Cursos/${id}`,{
        method:"DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    const data = await respose.json();

    if(respose.status === 200){
        revalidateTag("listar","max");
        return;
    }

    return data;


}

