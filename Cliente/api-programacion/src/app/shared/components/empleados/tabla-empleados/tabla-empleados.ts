import { Component, Input } from '@angular/core';
import { Empleado } from '../../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-empleados',
  imports: [CommonModule],
  templateUrl: './tabla-empleados.html',
  styleUrl: './tabla-empleados.css',
})
export class TablaEmpleados {

  @Input() listadoEmpleados: Empleado[] = [];

}
