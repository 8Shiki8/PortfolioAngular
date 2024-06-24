import { Routes } from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'juegos', pathMatch: 'full' },
  { path: 'juegos', component: JuegosComponent },
];
