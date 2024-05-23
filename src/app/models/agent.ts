import { Direction } from "./direction";
import { SousStructure } from "./sous-structure";
import { Structure } from "./structure";

export class Agent{
    id!: number;
    Matricule!:number;
    nom!: string;
    prenom!:string;
    tel!:number;
    direction!:Direction;
    
}