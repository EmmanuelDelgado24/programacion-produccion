import { Component, Input } from '@angular/core';
import { Empleado } from '../../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-empleados-pespunte243',
  imports: [CommonModule],
  templateUrl: './tabla-empleados-pespunte243.html',
  styleUrl: './tabla-empleados-pespunte243.css',
})
export class TablaEmpleadosPespunte243 {

  @Input() listadoPespunte243: Empleado[] = [];
}
