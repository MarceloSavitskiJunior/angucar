import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { MarcaSelecionadaComponent } from './marca-selecionada/marca-selecionada.component';
import { HttpClientModule } from '@angular/common/http';
import { MarcaSelecionadaService } from './marca-selecionada/marca-selecionada.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DecimalFormatPipe } from 'src/app/decimal-format.pipe';
import { ImageModule } from 'primeng/image';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';

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
    ButtonModule,
    ImageModule,
    ToastModule,
    CarouselModule
  ],
  providers: [
    MarcaSelecionadaService,
    MessageService
  ]
})
export class CarsModule { }