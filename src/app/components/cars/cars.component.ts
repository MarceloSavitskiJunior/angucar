import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  marcasSelecionadas: boolean = true;


  marcas = [
    { marca: 'Chevrolet', image: '../../../assets/images/marcas/chevrolet.jpg' },
    { marca: 'BMW', image: '../../../assets/images/marcas/bmw-logo.jpg' },
    { marca: 'Volkswagen', image: '../../../assets/images/marcas/volkswagen-logo.jpg' },
    { marca: 'Subaru', image: '../../../assets/images/marcas/subaru-logo.png' },
    { marca: 'Toyota', image: '../../../assets/images/marcas/toyota-logo.jpg' },
    { marca: 'Fiat', image: '../../../assets/images/marcas/fiat-logo.jpg' }
  ];
  marcasSelected: any[] = [];

  filtrar(): void {
    this.marcasSelecionadas = !this.marcasSelecionadas;
  }
}
