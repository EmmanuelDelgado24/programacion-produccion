import { Component, Input } from '@angular/core';
import { Empleado } from '../../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-empleados-montado',
  imports: [CommonModule],
  templateUrl: './tabla-empleados-montado.html',
  styleUrl: './tabla-empleados-montado.css',
})
export class TablaEmpleadosMontado {

  @Input() listadoMontado: Empleado[] = [];
}
