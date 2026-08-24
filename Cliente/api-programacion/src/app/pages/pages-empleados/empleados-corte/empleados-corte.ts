import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { EmpleadosCorteService } from '../../../services/empleadosCorte.service';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../../interfaces/empleado.interface';
import { TablaEmpleadosCorte } from '../../../shared/components/empleados/tabla-empleados-corte/tabla-empleados-corte';

@Component({
  selector: 'app-empleados-corte',
  imports: [CommonModule, TablaEmpleadosCorte],
  templateUrl: './empleados-corte.html',
  styleUrl: './empleados-corte.css',
})
export class EmpleadosCorte implements OnInit {

  private empleadosCorteService = inject(EmpleadosCorteService);

  private cdr = inject(ChangeDetectorRef);

  empleados: Empleado[] = [];
  emplea = signal(0);
  cargando = true;
  error = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.empleadosCorteService.getEmpleadosCorte().subscribe({
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
