import { Juego } from "./juego";


export class CompraDTO { 
    juego: Juego;
    cantidad: number;
    constructor(juego: Juego, cantidad: number)
    {
        this.juego = juego;
        this.cantidad = cantidad;
     }
}