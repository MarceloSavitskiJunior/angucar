import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  carro = [
    { nome: 'Celta', marca: 'Chevrolet', valor: 20000, image: '../../../assets/images/celtinha.jpg'},
    { nome: 'TESTE', marca: 'teste', valor: 20423}
  ]
}
