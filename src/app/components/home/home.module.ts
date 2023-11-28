import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    TagModule
  ]
})
export class HomeModule { }
