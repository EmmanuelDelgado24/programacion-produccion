import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { EmpleadosPespunte243Service } from '../../../services/empleadosPespunte243.service';
import { Empleado } from '../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';
import { TablaEmpleadosPespunte243 } from '../../../shared/components/empleados/tabla-empleados-pespunte243/tabla-empleados-pespunte243';


@Component({
  selector: 'app-empleados-pespunte243',
  imports: [CommonModule, TablaEmpleadosPespunte243],
  templateUrl: './empleados-pespunte243.html',
  styleUrl: './empleados-pespunte243.css',
})
export class EmpleadosPespunte243 implements OnInit {
 private empleadosPespunte243Service = inject(EmpleadosPespunte243Service);

  private cdr = inject(ChangeDetectorRef);

  empleados: Empleado[] = [];
  emplea = signal(0);
  cargando = true;
  error = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.empleadosPespunte243Service.getEmpleadosPespunte243().subscribe({
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
