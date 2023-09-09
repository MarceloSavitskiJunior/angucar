import { ThemeService } from './components/theme.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ThemeToggleComponent } from './components/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    CarsComponent,
    ThemeToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToolbarModule,
    InputSwitchModule,
    FormsModule,
    ToggleButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
