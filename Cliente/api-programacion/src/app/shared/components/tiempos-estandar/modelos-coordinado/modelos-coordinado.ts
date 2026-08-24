import { Component, Input, model } from '@angular/core';
import { Coordinados } from '../../../../interfaces/modelosCoordinado.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modelos-coordinado',
  imports: [CommonModule],
  templateUrl: './modelos-coordinado.html',
  styleUrl: './modelos-coordinado.css',
})
export class ModelosCoordinado {

  @Input() listaCoordinado: Coordinados[] = [];

}
