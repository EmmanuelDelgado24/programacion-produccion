import { Component, Input } from '@angular/core';
import { Empleado } from '../../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-empleados-pespunte245',
  imports: [CommonModule],
  templateUrl: './tabla-empleados-pespunte245.html',
  styleUrl: './tabla-empleados-pespunte245.css',
})
export class TablaEmpleadosPespunte245 {

  @Input() listadoPespunte245: Empleado[] = [];
}
