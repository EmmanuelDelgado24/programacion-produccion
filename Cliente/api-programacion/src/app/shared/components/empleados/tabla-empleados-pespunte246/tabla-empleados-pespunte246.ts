import { Component, Input } from '@angular/core';
import { Empleado } from '../../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-empleados-pespunte246',
  imports: [CommonModule],
  templateUrl: './tabla-empleados-pespunte246.html',
  styleUrl: './tabla-empleados-pespunte246.css',
})
export class TablaEmpleadosPespunte246 {
  @Input() listadoPespunte246: Empleado[] = [];
}
