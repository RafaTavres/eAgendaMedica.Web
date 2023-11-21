import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormMedicosWiewModel } from '../models/form-medico.view-model';
import { MedicoService } from '../services/medicos.service';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.scss']
})
export class EditarMedicoComponent implements OnInit{
  form!: FormGroup;
  idSelecionado:string | null = null;
  medicoBuscado:any;

  constructor(private toastrService:ToastrService,private route:ActivatedRoute,private formBuilder: FormBuilder,private medicoService: MedicoService,private router:Router) {
  }

  ngOnInit(): void {
    
    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if(this.idSelecionado == null)
      return;

    this.medicoBuscado = this.route.snapshot.data['medico']
    console.clear();
    console.log(this.medicoBuscado)
    
   }


   gravar(medicooVM: FormMedicosWiewModel){

    this.medicoService.editar(this.idSelecionado! , medicooVM).subscribe({
      next:(res: FormMedicosWiewModel) => this.processarSucesso(res),
      error: (error: Error) => this.processarErro(error)
    }
    )
   }

   
    processarErro(error: Error): void {
        this.toastrService.error(
        `Falha ao editar medico: ${error.message}`,
        'Erro'
      ); 

    }

    processarSucesso(res: FormMedicosWiewModel){
      this.toastrService.success(
        `Medico ${res.nome} editado com sucesso`,
        'Sucesso'
      ); 

      this.router.navigate(['/medicos/listar'])
    }
}
