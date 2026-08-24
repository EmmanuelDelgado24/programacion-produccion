import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plantillas } from '../../../../interfaces/modelosPlantilla.interface';

@Component({
  selector: 'app-modelos-plantilla',
  imports: [CommonModule],
  templateUrl: './modelos-plantilla.html',
  styleUrl: './modelos-plantilla.css',
})
export class ModelosPlantilla {

  @Input() listaPlantilla: Plantillas[] = [];
}
