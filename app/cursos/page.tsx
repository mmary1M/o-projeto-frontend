import CursoItem from "@/components/CursoItem";
import {getCurso} from "./actions"
import Link from "next/link";


export default async function CursosPage(){
   const cursos = await getCurso();

    return(
        <div className=" h-screen w-screen flex flex-col items-center">
            <h1 className="mt-30mb-50 text-5xl font-bold ">lista de curso</h1>

            <div className="w-50 h-70 bg-white rounded-md shadow-md shadow-white text-black p-2 overflow-auto">
                <ul className="flex flex-col items-center gap-2 ">
               {cursos.map(cursos => (
                        <CursoItem key={cursos.id} nome={cursos.nome} id={cursos.id}></CursoItem>

                    ))
                    }
                    
                    
                </ul>
            </div>
            <Link href="/aluno/cadastro" 
             className="px-5 py-2 bg-white text-black mt-5 rounded-1g">
                cadastrar cursos
             </Link>
        </div>
    )


} 