import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Juego } from '../../models/juego';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { Carrito } from 'src/app/models/carrito';
import {
  FormBuilder,
  FormControl,
  FormArray,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { CompraDTO } from 'src/app/models/compraDTO';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JuegosService } from 'src/app/services/juegos.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css'],
  standalone: true,
  imports: [
    NgFor,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [JuegosService], // Asegúrate de proveer JuegosService
})
export class JuegosComponent implements OnInit {
  @Output() dataCantidades = new EventEmitter<FormGroup>();
  juegosList: Juego[] | null = null;
  carritos: Carrito[] | null = [];
  juego: Juego | null = null;
  form: FormGroup;
  sharedSer: SharedService | null = null;
  error: boolean = false;

  ngOnInit() {
    this.JuegoService.findAll().subscribe(
      (res) => (
        (this.juegosList = res),
        console.log(res),
        this.initializeFormControls(),
        (this.error = false)
      ),

      (error) => {
        console.log('hubo un error');
        this.error = true;
        console.log(error);
      },
      () => console.log('termino la solicitud')
    );
  }

  openDialog(juego: Juego) {
    const dialogRef = this.dialog.open(DialogComponent, {
      backdropClass: 'dialogg',

      data: { game: juego },
    });
    console.log(juego.categoria);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addCarrito(juego: Juego, cantidad: number, index: number) {
    let confirmar = confirm('¿Deseas comprar ' + cantidad + ' unidades?');

    let carrito: Carrito = new Carrito(juego, cantidad);

    if (confirmar) {
      if (cantidad > 0) this.carritos?.push(carrito);
      console.log(carrito);
      console.log(this.carritos);
      this.sharedS?.addCompra(new CompraDTO(juego, cantidad));
      this.getControl(index).reset();

      this._snackBar.open('¡Agregado al carrito!', 'cerrar', {
        duration: 2000,
        panelClass: ['mat-accent'],
      });
    } else {
      console.log('compra cancelada');
    }
  }

  initializeFormControls() {
    const cantidades = this.form.get('cantidades') as FormArray;
    this.juegosList?.forEach(() => {
      cantidades.push(
        this.fb.control('', [Validators.required, Validators.min(1)])
      );
    });
  }
  getControl(index: number) {
    const cantidades = this.form.get('cantidades') as FormArray;
    return cantidades.at(index) as FormControl;
  }

  constructor(
    private sharedS: SharedService,
    private fb: FormBuilder,
    private JuegoService: JuegosService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      cantidades: this.fb.array([]),
    });
  }
}
