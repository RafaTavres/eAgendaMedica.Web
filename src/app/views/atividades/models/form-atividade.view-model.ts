import { Time } from "@angular/common";

export type FormAtividadesWiewModel = {
    assunto:string;
    dataRealizacao:Date;
    horaInicio:Time;
    horaTermino:Time;
    tipoAtividade:number;
    idsMedicos:string[];
};