import { HorasOcupadasViewModel } from "./horas-ocupadas.view-model";

export type ListarMedicosWiewModel = {
    id?:number;
    crm:string;
    nome:string;
    emAtividade:boolean;
    horasOcupadas:HorasOcupadasViewModel[];
};