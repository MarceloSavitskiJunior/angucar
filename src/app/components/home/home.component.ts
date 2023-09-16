import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  visible = false;

  constructor(private el: ElementRef) {}
  

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

  scrollToSection(sectionId: string): void {
    const section = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

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
