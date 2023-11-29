import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcaSelecionadaService } from './marca-selecionada.service';
import { Carro } from '../carro';

@Component({
  selector: 'app-marca-selecionada',
  templateUrl: './marca-selecionada.component.html',
  styleUrls: ['./marca-selecionada.component.scss']
})
export class MarcaSelecionadaComponent implements OnInit {
  marcaSelecionada: string = '';

  carros: Carro[] = [
    { nome: "", preco: 0, image: "" }
  ]

  constructor(private route: ActivatedRoute,
              private marcaSelecionadaService: MarcaSelecionadaService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.marcaSelecionada = params['marca'];
      this.marcaSelecionadaService.getCarrosByMarca(this.marcaSelecionada).subscribe(carros => {
        this.carros = carros;
        this.carros.forEach(c => c.image = `../../../../assets/images/carros/${this.marcaSelecionada}/${c.nome}.png`);
      });
    });
  }

  abrirModalCompra(): void {
    alert("comprado!")
  }

}
