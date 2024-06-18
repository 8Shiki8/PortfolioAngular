import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, SharedModule,MatButtonModule],

  exports: [InicioComponent],
})
export class HomeModule {}
