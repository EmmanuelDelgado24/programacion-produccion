import { Component, Input } from '@angular/core';
import { Empleado } from '../../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tabla-empleados-pespunte242',
  imports: [CommonModule],
  templateUrl: './tabla-empleados-pespunte242.html',
  styleUrl: './tabla-empleados-pespunte242.css',
})
export class TablaEmpleadosPespunte242 {

  @Input() listadoPespunte242: Empleado[] = [];
}
