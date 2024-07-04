export class JuegoDTO2 {
  id: number | null = 0;
  nombre: string;
  precio: number;
  imagen: string = 'https://i.postimg.cc/rsZJZRXd/Screenshot-7.jpg';
  descripcion: string;
  categoria: string[];
  constructor(
    nombre: string | null,
    precio: number | null,
    descripcion: string | null,
    categoria: string[] | null
  ) {
    this.nombre = nombre!;
    this.precio = precio!;
    this.descripcion = descripcion!;
    this.categoria = categoria!;
  }
}
