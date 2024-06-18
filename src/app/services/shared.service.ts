import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, of } from 'rxjs';
import { CompraDTO } from '../models/compraDTO';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private compras: CompraDTO[] = [];

  private compras$ = new BehaviorSubject<CompraDTO[] | null>(null);

  addCompra(compra: CompraDTO) {
    this.compras.push(compra);
    this.compras$.next(this.compras);
  }

  getCompra() {
    return this.compras$.asObservable();
  }
  deleteCompra(index: number) {
    this.compras[0];
    this.compras.splice(index, 1);
    this.compras$.next([...this.compras]);
    console.log(this.compras);
    console.log('asdadasdasdasdasdasdsa');
  }
}
