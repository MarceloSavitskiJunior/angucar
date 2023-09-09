import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()">Toggle Theme</button>
  `,
})
export class ThemeToggleComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    const currentTheme = this.themeService.getTheme();
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
    this.themeService.setTheme(newTheme);
  }
}
