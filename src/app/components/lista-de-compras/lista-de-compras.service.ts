import { Injectable } from '@angular/core';
import { Carro } from '../cars/carro';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDeComprasService {
  private listaDeCompras: Carro[] = [];
  private listaDeComprasSubject: BehaviorSubject<Carro[]> = new BehaviorSubject<Carro[]>([]);

  adicionarAoCarrinho(carro: Carro) {
    this.listaDeCompras.push(carro);
    this.listaDeComprasSubject.next(this.listaDeCompras);
  }

  obterCarros(): Carro[] {
    return this.listaDeCompras;
  }

  obterListaDeCompras(): Observable<Carro[]> {
    return this.listaDeComprasSubject.asObservable();
  }
}