

import { AlunoData } from "./alunos";
export interface CursoData{
    id: number;
    nome: string;
    professor?: string;
    cargaHoraria:number;
    descricao: string;
    createdAt: Date;
    updateAt: Date;
}

export interface Curso extends CursoData{
    alunos: AlunoData[];
}
