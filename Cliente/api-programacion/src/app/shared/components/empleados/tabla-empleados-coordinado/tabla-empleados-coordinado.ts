import { Component, Input } from '@angular/core';
import { Empleado } from '../../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-empleados-coordinado',
  imports: [CommonModule],
  templateUrl: './tabla-empleados-coordinado.html',
  styleUrl: './tabla-empleados-coordinado.css',
})
export class TablaEmpleadosCoordinado {

  @Input() listadoCoordinado: Empleado[] = [];
}
