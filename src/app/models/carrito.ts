import { Juego } from 'src/app/models/juego';

export class Carrito {
  juego: Juego;
  cantidad: number;

  constructor(juego: Juego, cantidad: number) {
    this.juego = juego;
    this.cantidad = cantidad;
  }
}
