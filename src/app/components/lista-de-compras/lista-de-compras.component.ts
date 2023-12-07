import { Component, OnInit } from '@angular/core';
import { Carro } from '../cars/carro';
import { ListaDeComprasService } from './lista-de-compras.service';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.scss']
})
export class ListaDeComprasComponent implements OnInit {
  listaDeCompras: Carro[] = [];

  constructor(private listaDeComprasService: ListaDeComprasService) {}

  ngOnInit(): void {
    this.listaDeComprasService.obterListaDeCompras().subscribe(lista => {
      this.listaDeCompras = lista;
      console.log(this.listaDeCompras);
    });
  }
}