import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { EmpleadosPespunte246Service } from '../../../services/empleadosPespunte246.service';
import { Empleado } from '../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';
import { TablaEmpleadosPespunte246 } from '../../../shared/components/empleados/tabla-empleados-pespunte246/tabla-empleados-pespunte246';

@Component({
  selector: 'app-empleados-pespunte246',
  imports: [CommonModule, TablaEmpleadosPespunte246],
  templateUrl: './empleados-pespunte246.html',
  styleUrl: './empleados-pespunte246.css',
})
export class EmpleadosPespunte246 implements OnInit {
  private empleadosPespunte246Service = inject(EmpleadosPespunte246Service);

  private cdr = inject(ChangeDetectorRef);

  empleados: Empleado[] = [];
  emplea = signal(0);
  cargando = true;
  error = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.empleadosPespunte246Service.getEmpleadosPespunte246().subscribe({
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
