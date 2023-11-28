import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  visible = false;

  car = [
    { descricao: 'Procure por carros de alto padrão...', image: 'sedan-azul' },
    { descricao: 'Carros que você gostaria de ter!', image: 'new-fiesta' },
    { descricao: 'Ou... o carro dos seus sonhos.', image: 'carinha-no-carro' },
  ];

  components = [
    { descricao: 'Turbina que levará seu carro ao máximo!', image: 'turbina' },
    { descricao: 'Um kit de freio ideal para sua segurança.', image: 'kit-freio' },
    { descricao: 'E até uma "sonzeira" para descontrair', image: 'sonzera' },
  ];

  onPageChange(event: any): void { 
    if (event.page === 2) {
      setTimeout(() => {
        this.showModal();
      }, 500)
    }
  }

  showModal(): void {
    this.visible = !this.visible;
  }
}
