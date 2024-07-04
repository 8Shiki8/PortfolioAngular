import { Injectable } from '@angular/core';
import { Juego } from '../models/juego';
import {
  Observable,
  catchError,
  first,
  map,
  mergeMap,
  of,
  throwError,
} from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { backendProd, backendDev } from './../enviroments/enviroments';
import { JuegoDTO2 } from '../models/juegoDTO';
export interface JuegoDTO {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  categoria: string[] | null;
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class JuegosService {
  resourceUrl2 = backendProd;

  findAll(): Observable<Juego[]> {
    return this.http.get<any[]>(this.resourceUrl2 + '/api/Juego/All').pipe(
      map(
        (json) =>
          json.map(
            (value) =>
              new Juego(
                value.id,
                value.nombre,
                value.precio,
                value.imagen,
                value.descripcion,
                value.categoria
              )
          ),
        catchError((err) => {
          console.log('ocurrio un error');
          return throwError(() => 'paso algo');
        })
      )
    );
  }
  addGame(juego: JuegoDTO2): Observable<any> {
    return this.http.post<any>(this.resourceUrl2 + '/api/Juego', juego).pipe(
      catchError((err) => {
        console.log('Ocurrio un error: ');
        console.log(err);
        return throwError(() => 'No se pudo crear la persona');
      })
    );
  }

  constructor(private http: HttpClient) {}
}
