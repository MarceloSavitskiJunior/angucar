import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { MarcaSelecionadaComponent } from './marca-selecionada/marca-selecionada.component';

@NgModule({
  declarations: [
    MarcaSelecionadaComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
  ],
  providers: [

  ]
})
export class CarsModule { }