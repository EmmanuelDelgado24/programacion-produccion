import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../../../interfaces/empleado.interface';

@Component({
  selector: 'app-tabla-empleados-corte',
  imports: [CommonModule],
  templateUrl: './tabla-empleados-corte.html',
  styleUrl: './tabla-empleados-corte.css',
})
export class TablaEmpleadosCorte {

  @Input() listadoCorte: Empleado[] = [];
}
