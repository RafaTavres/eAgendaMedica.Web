import { Time } from "@angular/common";
import { ListarMedicosWiewModel } from "../../medicos/models/listar-medico.view-model";

export type VisualizarAtividadeViewModel = {
    id?:number;
    assunto:string;
    dataRealizacao:Date;
    horaInicio:Time;
    horaTermino:Time;
    tempoDeDescanso:Time;
    tipoAtividade:number;
    medicos:ListarMedicosWiewModel[];
};