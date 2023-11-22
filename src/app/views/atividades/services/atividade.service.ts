import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map,tap, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { ListarAtividadesWiewModel } from "../models/listar-atividade.view-model";

@Injectable()

export class AtividadeService{

    private API_URL = `${environment.API_URL}atividades`;

     constructor(private http: HttpClient) {}

     selecionarTodos(): Observable<ListarAtividadesWiewModel[]> {
        return this.http.get<any>(this.API_URL).pipe(
          map((res) => res.dados),
          tap((res) => console.log(res)),
          catchError((err: HttpErrorResponse) => this.processarErroHttp(err))
        );
      }


      private processarErroHttp(erro: HttpErrorResponse) {
        let mensagemErro = '';
    
        if (erro.status == 0)
          mensagemErro = 'Ocorreu um erro ao processar a requisição.';
        if (erro.status == 401)
          mensagemErro =
            'O usuário não está autorizado. Efetue login e tente novamente.';
        else mensagemErro = erro.error?.erros[0];
        console.log(mensagemErro);
    
        return throwError(() => new Error(mensagemErro));
      }
}