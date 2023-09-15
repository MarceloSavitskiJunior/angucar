import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private router: Router) {}

  sidebarVisible: boolean = false;

  redirecionarPara(rota: string): void {
    this.sidebarVisible = !this.sidebarVisible;
    this.router.navigate([rota])
  }
}
