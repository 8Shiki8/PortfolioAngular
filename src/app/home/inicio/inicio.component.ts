import { Component } from '@angular/core';
import { FooterComponent as FooterComponent_1 } from '../../shared/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  standalone: true,
  imports: [MatButtonModule, FooterComponent_1, NgbCarouselModule],
})
export class InicioComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  navigateTienda() {
    this.router.navigate(['layout', 'tienda']);
  }
  constructor(private router: Router) {}
}
