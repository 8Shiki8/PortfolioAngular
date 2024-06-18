import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TiendaModule } from '../tienda/tienda.module';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { CarritoComponent } from './navbar/carrito/carrito.component';

@NgModule({
  declarations: [
    DialogComponent,
    FooterComponent,
    NavbarComponent,
    LayoutComponent,
    TableComponent,
    CarritoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    TiendaModule,
    MatDialogModule,
    MatTabsModule,
    MatChipsModule,
    MatBadgeModule,
    FormsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatInputModule,
  ],
  exports: [
    DialogComponent,
    FooterComponent,
    NavbarComponent,
    LayoutComponent,
    TableComponent,
  ],
})
export class SharedModule {}
