import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormMedicosWiewModel } from '../models/form-medico.view-model';
import { MedicoService } from '../services/medicos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inserir-medico',
  templateUrl: './inserir-medico.component.html',
  styleUrls: ['./inserir-medico.component.scss']
})
export class InserirMedicoComponent {

    constructor(private toastrService:ToastrService,private medicoService: MedicoService,private router:Router) {
    }

    gravar(compromissoVM: FormMedicosWiewModel){
        this.medicoService.inserir(compromissoVM).subscribe({
          next:(res: FormMedicosWiewModel) => this.processarSucesso(res),
          error: (error: Error) => this.processarErro(error)
        })
      }

      processarErro(error: Error): void {
        this.toastrService.error(
          
        `Falha ao adicionar medico: ${error.message}`,
        'Erro'
      ); 
      }

      processarSucesso(res: FormMedicosWiewModel){
      this.toastrService.success(
        `Medico ${res.nome} adicionado com sucesso`,
        'Sucess'
      ); 

        this.router.navigate(['/medicos/listar'])
      }
}
