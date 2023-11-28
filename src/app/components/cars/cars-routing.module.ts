import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { MarcaSelecionadaComponent } from './marca-selecionada/marca-selecionada.component';

const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: ':marca', component: MarcaSelecionadaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }