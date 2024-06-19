import { Component, OnInit, Output } from '@angular/core';
import { SharedService } from './../../services/shared.service';
import { CompraDTO } from 'src/app/models/compraDTO';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    standalone: true,
    imports: [
        MatTableModule,
        NgFor,
        NgIf,
        MatButtonModule,
        MatIconModule,
    ],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'precio',
    'cantidad',
    'total',
    'acciones',
  ];
  subs: Subscription = new Subscription();

  dataSource: CompraDTO[] = [];

  ngOnInit(): void {
    this.subs.add(
      this.service.getCompra().subscribe((res) => {
        this.dataSource = res ?? [];
      })
    );
  }
  precioFinal() {
    let final = 0;
    this.dataSource.forEach((elem) => {
      final += elem.juego.precio * elem.cantidad;
    });
    return final;
  }
  parse(palabra: string) {
    return parseInt(palabra);
  }
  removeCompra(index: number) {
    this.service.deleteCompra(index);
    console.log(this.dataSource);
    console.log('datos actualizados');
  }
  constructor(public service: SharedService) {}
}
