import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inyecciones } from '../../../../interfaces/modelosInyeccion.interface';

@Component({
  selector: 'app-modelos-inyeccion',
  imports: [CommonModule],
  templateUrl: './modelos-inyeccion.html',
  styleUrl: './modelos-inyeccion.css',
})
export class ModelosInyeccion {

  @Input() listaInyeccion: Inyecciones[] = [];
}
