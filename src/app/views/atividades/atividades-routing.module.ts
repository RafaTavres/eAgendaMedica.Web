import { inject, NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { ListarAtividadesComponent } from './listar-atividades/listar-atividades.component';
import { ListarAtividadesWiewModel } from './models/listar-atividade.view-model';
import { AtividadeService } from './services/atividade.service';

const listarAtividadesResolver: ResolveFn<ListarAtividadesWiewModel[]> = () => {
  return inject(AtividadeService).selecionarTodos();
};

const routes: Routes = [  
  {
  path:'',
  redirectTo:'listar',
  pathMatch:'full'
  },
  {
    path:'listar',
    component:ListarAtividadesComponent,
    resolve: { atividades: listarAtividadesResolver}
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtividadesRoutingModule { }
