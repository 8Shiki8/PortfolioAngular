import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { JuegosComponent } from './tienda/juegos/juegos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout/tienda/juegos', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'tienda',
        loadChildren: () =>
          import('./tienda/tienda.module').then((mod) => mod.TiendaModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
