import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  habilitarHomeCompleta = false;

  constructor(private el: ElementRef) {
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.habilitarHomeCompleta = true;
    }, 1000);
  }

  scrollToSection(sectionId: string): void {
    const section = this.el.nativeElement.querySelector(`#${sectionId}`);
    this.habilitarHomeCompleta = true;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
