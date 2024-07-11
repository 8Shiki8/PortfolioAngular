import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TableComponent } from '../../table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  standalone: true,
  imports: [MatDialogModule, TableComponent, MatButtonModule,MatIconModule],
})
export class CarritoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: TableComponent) {}
}
