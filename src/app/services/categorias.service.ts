import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError, map } from 'rxjs';
import { backendProd, backendDev } from '../enviroments/enviroments';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  findAll(): Observable<any[]> {
    return this.http.get<any[]>(backendProd + '/api/Categoria').pipe(
      map(
        (json) =>
          json.map((value) => new Categoria(value.categoriaId, value.tipo)),
        catchError((error) => {
          console.log('ocurrio un error');
          return throwError(() => 'paso algo');
        })
      )
    );
  }

  constructor(private http: HttpClient) {}
}
