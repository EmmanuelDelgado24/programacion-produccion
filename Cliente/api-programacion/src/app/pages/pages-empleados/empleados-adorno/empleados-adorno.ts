import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { EmpleadosAdornoService } from '../../../services/empleadosAdorno.service';
import { Empleado } from '../../../interfaces/empleado.interface';
import { CommonModule } from '@angular/common';
import { TablaEmpleadosAdorno } from '../../../shared/components/empleados/tabla-empleados-adorno/tabla-empleados-adorno';

@Component({
  selector: 'app-empleados-adorno',
  imports: [CommonModule, TablaEmpleadosAdorno],
  templateUrl: './empleados-adorno.html',
  styleUrl: './empleados-adorno.css',
})
export class EmpleadosAdorno implements OnInit {
  private empleadosAdornoService = inject(EmpleadosAdornoService);

  private cdr = inject(ChangeDetectorRef);

  empleados: Empleado[] = [];
  emplea = signal(0);
  cargando = true;
  error = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.empleadosAdornoService.getEmpleadosAdorno().subscribe({
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
