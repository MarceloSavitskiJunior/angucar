import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcaSelecionadaService } from './marca-selecionada.service';
import { Carro } from '../carro';
import { MessageService } from 'primeng/api';
import { ListaDeComprasService } from '../../lista-de-compras/lista-de-compras.service';

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
              private marcaSelecionadaService: MarcaSelecionadaService,
              private messageService: MessageService,
              private listaDeComprasService: ListaDeComprasService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.marcaSelecionada = params['marca'];
      this.marcaSelecionadaService.getCarrosByMarca(this.marcaSelecionada).subscribe(carros => {
        this.carros = carros;
        this.carros.forEach(c => c.image = `../../../../assets/images/carros/${this.marcaSelecionada}/${c.nome}.png`);
      });
    });
  }

  comprar(carro: Carro): void {
    const listaDeCarros: Carro[] = this.listaDeComprasService.obterCarros();
  
    if (listaDeCarros.some(c => c.nome === carro.nome)) {
      this.messageService.clear();
      this.messageService.add({
        severity: 'warn',
        summary: 'Atenção!',
        detail: `${carro.nome} já está no seu carrinho.`
      });
    } else {
      this.listaDeComprasService.adicionarAoCarrinho(carro);
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso!',
        detail: `${carro.nome} adicionado ao carrinho.`
      });
    }
  }
  
}
