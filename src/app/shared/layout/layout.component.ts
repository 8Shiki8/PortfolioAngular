import { AfterViewInit, Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    standalone: true,
    imports: [
        NavbarComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class LayoutComponent {
  dataCantidades: FormGroup | null = null;




  
}
