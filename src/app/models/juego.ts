export class Juego {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  categoria: string[] | null;

  constructor(
    id: number,
    nombre: string,
    precio: number,
    imagen: string,
    descripcion: string,
    categoria: string[] | null
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.categoria = categoria;
  }
}
