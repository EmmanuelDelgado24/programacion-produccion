import { Component, signal } from '@angular/core';
import { ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosMontadoService } from '../../../services/empleadosMontado.service';
import { Empleado } from '../../../interfaces/empleado.interface';
import { TablaEmpleadosMontado } from '../../../shared//components/empleados/tabla-empleados-montado/tabla-empleados-montado';

@Component({
  selector: 'app-empleados-montado',
  imports: [CommonModule, TablaEmpleadosMontado],
  templateUrl: './empleados-montado.html',
  styleUrl: './empleados-montado.css',
})
export class EmpleadosMontado implements OnInit {

  private empleadosMontadoService = inject(EmpleadosMontadoService);

  private cdr = inject(ChangeDetectorRef);

  empleados: Empleado[] = [];
  emplea = signal(0);
  cargando = true;
  error = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.empleadosMontadoService.getEmpleadosMontados().subscribe({
      next: (res) => {
        this.empleados = res;
        this.emplea.set(this.empleados.length);
        this.cargando = false;
        console.log('cargando después:', this.cargando);
        console.log('empleados:', this.empleados.length);

        console.log('Empleados obtenidos correctamente');
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
        console.error('Error al obtener empleados', err);
      }
    });
  }
}
