import { Routes } from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';
import { AdministracionComponent } from './administracion/administracion.component';

export const routes: Routes = [
  { path: '', redirectTo: 'juegos', pathMatch: 'full' },
  { path: 'juegos', component: JuegosComponent },
  { path: 'admin', component: AdministracionComponent },
];
