import { Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: 'layout/tienda/juegos', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'tienda',
        loadChildren: () =>
          import('./tienda/tienda.routes').then((mod) => mod.routes),
      },
    ],
  },
];
