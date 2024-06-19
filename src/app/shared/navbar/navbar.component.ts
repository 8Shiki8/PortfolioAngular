import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';
import { CompraDTO } from 'src/app/models/compraDTO';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: true,
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
        MatSlideToggleModule,
    ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  cantidad: number = 0;
  hidden: boolean = true;
  dataCompra: CompraDTO[] | null = null;
  subs: Subscription = new Subscription();
  temaClaro: Boolean = true;
  checked: boolean = true;

  ngOnInit(): void {
    if (this.dataCompra) {
      this.subs.unsubscribe(); // Unsubscribe from previous subscriptions
    }

    this.subs.add(
      this.sharedSer.getCompra().subscribe((res) => {
        (this.dataCompra = res),
          (this.cantidad = this.cantidadSuma()),
          (this.hidden = this.ocultar(this.cantidad));
      })
    );
    this.cantidad = this.cantidadSuma();
    if (this.cantidad > 0) {
      this.hidden = !this.hidden;
    }
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe(); // Limpia las suscripciones al destruir el componente
  }
  cantidadSuma() {
    let compras = this.dataCompra;
    let contador = 0;

    if (!compras) {
      return 0;
    } else {
      for (let i = 0; i < compras.length; i++) {
        contador += compras[i].cantidad;
      }
      console.log(contador);

      return contador;
    }
  }
  ocultar(cantidad: number): boolean {
    if (cantidad > 0) {
      return false;
    } else {
      return true;
    }
  }
  openDialog() {
    this.dialog.open(CarritoComponent);
  }
  setTheme() {
    let moonIcon;
    let sunIcon;
    let toggleContainer =
      this.document.getElementsByClassName('toggle-container');
    if (this.temaClaro) {
      this.temaClaro = !this.temaClaro;
      this.document.body.classList.remove('light-theme');
      this.document.body.classList.add('dark-theme');
      sunIcon = this.document.getElementsByClassName('bi-sun-fill');
      sunIcon[0].remove();
      toggleContainer[0].insertAdjacentHTML(
        'afterbegin',
        `   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-moon-fill"
                viewBox="0 0 16 16">
                <path
                    d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
            </svg>`
      );
    } else {
      this.temaClaro = !this.temaClaro;
      this.document.body.classList.remove('dark-theme');
      this.document.body.classList.add('light-theme');
      moonIcon = this.document.getElementsByClassName('bi-moon-fill');
      moonIcon[0].remove();
      toggleContainer[0].insertAdjacentHTML(
        'afterbegin',
        ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sun-fill"
                viewBox="0 0 16 16">
                <path
                    d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
            </svg>`
      );
    }
  }
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private sharedSer: SharedService,
    public dialog: MatDialog
  ) {}
}
