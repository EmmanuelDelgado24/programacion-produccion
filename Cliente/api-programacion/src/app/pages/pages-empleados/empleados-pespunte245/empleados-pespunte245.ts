import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { EmpleadosPespunte245Service } from '../../../services/empleadosPespunte245.service';
import { Empleado } from '../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';
import { TablaEmpleadosPespunte245 } from '../../../shared/components/empleados/tabla-empleados-pespunte245/tabla-empleados-pespunte245';

@Component({
  selector: 'app-empleados-pespunte245',
  imports: [CommonModule, TablaEmpleadosPespunte245],
  templateUrl: './empleados-pespunte245.html',
  styleUrl: './empleados-pespunte245.css',
})
export class EmpleadosPespunte245 implements OnInit {
  private empleadosPespunte245Service = inject(EmpleadosPespunte245Service);

  private cdr = inject(ChangeDetectorRef);

  empleados: Empleado[] = [];
  emplea = signal(0);
  cargando = true;
  error = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.empleadosPespunte245Service.getEmpleadosPespunte245().subscribe({
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
