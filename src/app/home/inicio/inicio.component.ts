import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { FooterComponent as FooterComponent_1 } from '../../shared/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css'],
    standalone: true,
    imports: [MatButtonModule, FooterComponent_1],
})
export class InicioComponent {}
