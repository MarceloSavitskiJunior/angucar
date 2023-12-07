import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
      {
        path: 'carousel',
        loadChildren: () => import('./components/home/carousel/carousel.module').then((m) => m.CarouselModule),
      },
    ] 
  },
  { 
    path: 'cars', 
    loadChildren: () => import('./components/cars/cars.module').then(m => m.CarsModule) 
  },
  { 
    path: 'lista-de-compras', component: ListaDeComprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }