import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtividadesRoutingModule } from './atividades-routing.module';
import 'src/app/extensions/form-group.extension';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarAtividadesComponent } from './listar-atividades/listar-atividades.component';

@NgModule({
  declarations: [
    ListarAtividadesComponent
  ],
  imports: [
    AtividadesRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class AtividadesModule { }
