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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ThemeComponent } from './components/theme/theme.component';
import {MatButtonModule} from '@angular/material/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MultiSelectModule } from 'primeng/multiselect';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { CamelCasePipe } from './camel-case.pipe';
import { ToastModule } from 'primeng/toast';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    CarsComponent,
    SidebarComponent,
    ThemeComponent,
    CarouselComponent,
    CamelCasePipe,
    ListaDeComprasComponent,
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
    SidebarModule,
    MatButtonModule,
    ProgressBarModule,
    CarouselModule,
    TagModule,
    DialogModule,
    CardModule,
    InputTextModule,
    AutoCompleteModule,
    MultiSelectModule,
    ToastModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
