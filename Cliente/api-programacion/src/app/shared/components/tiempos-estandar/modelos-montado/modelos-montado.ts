import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Montados } from '../../../../interfaces/modelosMontado.interface';

@Component({
  selector: 'app-modelos-montado',
  imports: [CommonModule],
  templateUrl: './modelos-montado.html',
  styleUrl: './modelos-montado.css',
})
export class ModelosMontado {
  @Input() listaMontado: Montados[] = [];
}
