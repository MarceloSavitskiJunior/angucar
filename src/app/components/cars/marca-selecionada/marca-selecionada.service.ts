import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Carro } from '../carro';

@Injectable({
  providedIn: 'root',
})
export class MarcaSelecionadaService {
  private apiUrl = 'https://my-json-server.typicode.com/MarceloSavitskiJunior/mockdatajson';

  constructor(private http: HttpClient) {}

  getCarrosByMarca(marcaNome: string): Observable<Carro[]> {
    return this.http.get<any[]>(`${this.apiUrl}/marcas`).pipe(
      map((marcas: any[]) => {
        const marcaEncontrada = marcas.find((marca) => marca.nome.toLowerCase() === marcaNome.toLowerCase());
        return marcaEncontrada ? marcaEncontrada.carros : [];
      })
    );
  }
}