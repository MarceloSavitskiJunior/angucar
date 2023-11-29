import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { MarcaSelecionadaComponent } from './marca-selecionada/marca-selecionada.component';
import { HttpClientModule } from '@angular/common/http';
import { MarcaSelecionadaService } from './marca-selecionada/marca-selecionada.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DecimalFormatPipe } from 'src/app/decimal-format.pipe';

@NgModule({
  declarations: [
    MarcaSelecionadaComponent,
    DecimalFormatPipe
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule
  ],
  providers: [
    MarcaSelecionadaService
  ]
})
export class CarsModule { }