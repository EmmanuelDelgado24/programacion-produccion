import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Preacabados } from '../../../../interfaces/modelosPreacabado.interface';


@Component({
  selector: 'app-modelos-preacabado',
  imports: [CommonModule],
  templateUrl: './modelos-preacabado.html',
  styleUrl: './modelos-preacabado.css',
})
export class ModelosPreacabado {

  @Input() listaPreacabado: Preacabados[] = [];
}
