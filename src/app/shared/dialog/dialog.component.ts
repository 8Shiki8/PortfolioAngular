import { NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Juego } from 'src/app/models/juego';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatTabsModule,
    NgFor,
    MatChipsModule,
    MatButtonModule,
  ],
})
export class DialogComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.data.game.categoria);
    console.log(this.data.game.categoria);
    console.log('array');
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: { game: Juego }) {}
}
