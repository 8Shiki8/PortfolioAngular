import { NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Juego } from 'src/app/models/juego';
import { MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.data.game.categoria);
    console.log(this.data.game.categoria);
    console.log('array');
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: { game: Juego }) {}
}
