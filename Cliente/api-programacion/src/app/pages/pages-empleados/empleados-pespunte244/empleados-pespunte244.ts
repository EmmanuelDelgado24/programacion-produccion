import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { EmpleadosPespunte244Service } from '../../../services/empleadosPespunte244.service';
import { Empleado } from '../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';
import { TablaEmpleadosPespunte244 } from '../../../shared/components/empleados/tabla-empleados-pespunte244/tabla-empleados-pespunte244';

@Component({
  selector: 'app-empleados-pespunte244',
  imports: [CommonModule, TablaEmpleadosPespunte244],
  templateUrl: './empleados-pespunte244.html',
  styleUrl: './empleados-pespunte244.css',
})
export class EmpleadosPespunte244 implements OnInit {
  private empleadosPespunte244Service = inject(EmpleadosPespunte244Service);

  private cdr = inject(ChangeDetectorRef);

  empleados: Empleado[] = [];
  emplea = signal(0);
  cargando = true;
  error = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.empleadosPespunte244Service.getEmpleadosPespunte244().subscribe({
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
