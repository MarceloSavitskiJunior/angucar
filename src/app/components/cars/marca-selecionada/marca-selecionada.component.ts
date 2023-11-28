import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Marcas } from './marcas.enum';

@Component({
  selector: 'app-marca-selecionada',
  templateUrl: './marca-selecionada.component.html',
  styleUrls: ['./marca-selecionada.component.scss']
})
export class MarcaSelecionadaComponent implements OnInit {
  marcaSelecionada: string = '';

  carros = [
    { nome: "", preco: 0, image: "" }
  ]

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.marcaSelecionada = params['marca'];
      this.carregarMarcaSelecionada();
    });
  }

  carregarMarcaSelecionada(): void {
    switch (this.marcaSelecionada) {
      case Marcas.BMW:
        this.carregarAtributosBMW();
        break;
      case Marcas.CHEVROLET:
        this.carregarAtributosChevrolet();
        break;
      case Marcas.SUBARU:
        this.carregarAtributosSubaru();
        break;
      case Marcas.VOLKSWAGEN:
        this.carregarAtributosVolkswagen();
        break;
      case Marcas.TOYOTA:
        this.carregarAtributosToyota();
        break;
      case Marcas.FIAT:
        this.carregarAtributosFiat();
        break;
      default:
        break;
    }
  }
  
  carregarAtributosSubaru(): void {
    this.carros = [
      { nome: "Wrx STI", preco: 200000, image: '../../../../assets/images/carros/camaro.png' },
      { nome: "Impreza STI", preco: 120000, image: "" },
      { nome: "Wrx", preco: 100000, image: "" },
    ]
  }

  carregarAtributosBMW(): void {
    this.carros = [
      { nome: "Série 3", preco: 90000, image: "" },
      { nome: "Série 5", preco: 110000, image: "" },
      { nome: "X5", preco: 120000, image: "" },
    ];
  }
  
  carregarAtributosChevrolet(): void {
    this.carros = [
      { nome: "Camaro", preco: 150000, image: "" },
      { nome: "Corvette", preco: 80000, image: "" },
      { nome: "Silverado", preco: 40000, image: "" },
    ];
  }
  
  carregarAtributosVolkswagen(): void {
    this.carros = [
      { nome: "Golf GTI", preco: 60000, image: "" },
      { nome: "Passat", preco: 70000, image: "" },
      { nome: "Tiguan", preco: 50000, image: "" },
    ];
  }
  
  carregarAtributosToyota(): void {
    this.carros = [
      { nome: "Corolla", preco: 45000, image: "" },
      { nome: "RAV4", preco: 50000, image: "" },
      { nome: "Supra", preco: 60000, image: "" },
    ];
  }
  
  carregarAtributosFiat(): void {
    this.carros = [
      { nome: "500", preco: 30000, image: "" },
      { nome: "Punto", preco: 25000, image: "" },
      { nome: "Toro", preco: 40000, image: "" },
    ];
  }

}
