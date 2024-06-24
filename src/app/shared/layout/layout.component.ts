import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent, MatDialogModule],
})
export class LayoutComponent {
  dataCantidades: FormGroup | null = null;
}
