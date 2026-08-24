import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { EmpleadosPespunte242Service } from '../../../services/empleadosPespunte242.service';
import { Empleado } from '../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';
import { TablaEmpleadosPespunte242 } from '../../../shared/components/empleados/tabla-empleados-pespunte242/tabla-empleados-pespunte242';

@Component({
  selector: 'app-empleados-pespunte242',
  imports: [CommonModule, TablaEmpleadosPespunte242],
  templateUrl: './empleados-pespunte242.html',
  styleUrl: './empleados-pespunte242.css',
})
export class EmpleadosPespunte242 implements OnInit {
  private empleadosPespunte242Service = inject(EmpleadosPespunte242Service);

  private cdr = inject(ChangeDetectorRef);


  empleados: Empleado[] = [];
  emplea = signal(0);
  cargando = true;
  error = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.empleadosPespunte242Service.getEmpleadosPespunte242().subscribe({
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
