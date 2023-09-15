import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ToggleButton } from 'primeng/togglebutton';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  isDarkTheme = false;

  changeTheme(value: boolean): void {
    console.log(this.isDarkTheme);
    if (value) {
      this.document.body.classList.add('dark-mode')
    } else {
      this.document.body.classList.remove('dark-mode')
    }
  }

}
