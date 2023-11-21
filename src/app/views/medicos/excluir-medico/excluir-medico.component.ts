import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VisualizarMedicosWiewModel } from '../models/visualizacao-completa-medico.view-model';
import { MedicoService } from '../services/medicos.service';

@Component({
  selector: 'app-excluir-medico',
  templateUrl: './excluir-medico.component.html',
  styleUrls: ['./excluir-medico.component.scss']
})
export class ExcluirMedicoComponent implements OnInit{
  medicoVM!: VisualizarMedicosWiewModel;
  idSelecionado:string | null = null;


  constructor(private toastrService:ToastrService,private route:ActivatedRoute,private medicoService: MedicoService,private router:Router){

  }

  ngOnInit(): void {
  
  this.idSelecionado = this.route.snapshot.paramMap.get('id');

  this.medicoVM = this.route.snapshot.data['medico']; 

  }
}
