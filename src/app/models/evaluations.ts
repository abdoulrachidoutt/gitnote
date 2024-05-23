import { Levaluations } from "./levalutions";

export class Evaluations {
    id !:number;
    annee !: number;
    code_agent !: number;
    nomagent! : String;
    date_eval! : any;
    avance!: number;
    totva!:number;
    moy! : number;
    leval :Array<Levaluations> =[];
}