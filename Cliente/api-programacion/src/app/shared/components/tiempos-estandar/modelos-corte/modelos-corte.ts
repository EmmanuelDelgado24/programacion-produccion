import { Component, Input } from '@angular/core';
import { Cortes } from '../../../../interfaces/modelosCorte.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modelos-corte',
  imports: [CommonModule],
  templateUrl: './modelos-corte.html',
  styleUrl: './modelos-corte.css',
})
export class ModelosCorte {

  @Input() listaCorte: Cortes[] = [];
}
