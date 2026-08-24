import { Component, Input } from '@angular/core';
import { Empleado } from '../../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-empleados-adorno',
  imports: [CommonModule],
  templateUrl: './tabla-empleados-adorno.html',
  styleUrl: './tabla-empleados-adorno.css',
})
export class TablaEmpleadosAdorno {
  @Input() listadoAdorno: Empleado[] = [];
}
