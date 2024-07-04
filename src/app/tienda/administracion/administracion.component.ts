import { Component, OnInit, viewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { placements } from '@popperjs/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Categoria } from 'src/app/models/categoria';
import { HttpClientModule } from '@angular/common/http';
import { JuegoDTO2 } from 'src/app/models/juegoDTO';
import { JuegosService } from 'src/app/services/juegos.service';
import { FormArray } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    NgIf,
  ],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.css',
  providers: [CategoriasService, JuegosService],
})
export class AdministracionComponent implements OnInit {
  toppings = new FormControl('');

  gameForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    plataforma: ['', Validators.required],
    precio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    categorias: ['', Validators.required],
  });

  categoriasList: Categoria[] | null = null;

  ngOnInit(): void {
    this.categoriasServ.findAll().subscribe(
      (res) => (this.categoriasList = res),
      (error) => {
        console.log('error');
      }
    );
  }
  agregarJuego() {
    let game = new JuegoDTO2(
      this.gameForm.get('nombre')?.value,
      this.gameForm.get('precio')?.value,
      this.gameForm.get('plataforma')?.value,
      this.gameForm.get('categorias')?.value
    );
    console.log(game);

    this.juegoServ.addGame(game).subscribe(
      (res) => console.log('se agrego el juego'),
      (error) => console.log('error')
    );
    this.gameForm.reset();
    alert('Se agrego el juego al catalogo.');
  }
  constructor(
    private fb: FormBuilder,
    private categoriasServ: CategoriasService,
    private juegoServ: JuegosService
  ) {}
}
