import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { Empleado } from '../../../interfaces/empleado.interface';
import { EmpleadosCoordinadoService } from '../../../services/empleadosCoordinado.service';
import { CommonModule } from '@angular/common';
import { TablaEmpleadosCoordinado } from '../../../../app/shared/components/empleados/tabla-empleados-coordinado/tabla-empleados-coordinado';

@Component({
  selector: 'app-empleados-coordinado',
  imports: [CommonModule, TablaEmpleadosCoordinado],
  templateUrl: './empleados-coordinado.html',
  styleUrl: './empleados-coordinado.css',
})
export class EmpleadosCoordinado implements OnInit {
  private empleadosCoordinadoService = inject(EmpleadosCoordinadoService);

  private cdr = inject(ChangeDetectorRef);

  empleados: Empleado[] = [];
  emplea = signal(0);
  cargando = true;
  error = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.empleadosCoordinadoService.getEmpleadosCoordinados().subscribe({
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
