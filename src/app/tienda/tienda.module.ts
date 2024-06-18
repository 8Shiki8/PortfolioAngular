import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosComponent } from './juegos/juegos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TiendaRoutingModule } from './tienda-routing.module';

@NgModule({
  declarations: [JuegosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    TiendaRoutingModule,
  ],
  exports: [JuegosComponent],
})
export class TiendaModule {}
