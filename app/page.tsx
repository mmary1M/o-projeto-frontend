import Link from "next/link";

export default function Home(){
  return(
    <div className="w-screen h-screen flex flex-col items-centerh-">
      <div className="w-screen h-10 flex justify-evenly bg-blue-300 items-center text-black">
        <Link href="/">Home</Link>
        <Link href={"/alunos"}>Alunos</Link>
         <Link href={"/cursos"}>cursos</Link>

        
         <span>Sair</span>

      </div>
    </div>
  )
}