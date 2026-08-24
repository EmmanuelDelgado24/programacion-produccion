import { Component, Input } from '@angular/core';
import { Empleado } from '../../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-empleados-pespunte244',
  imports: [CommonModule],
  templateUrl: './tabla-empleados-pespunte244.html',
  styleUrl: './tabla-empleados-pespunte244.css',
})
export class TablaEmpleadosPespunte244 {

  @Input() listadoPespunte244: Empleado[] = [];
}
