import { Component, signal, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramacionGeneral } from '../../shared/components/programacion/programacion-general/programacion-general';
import { ProgramacionService } from '../../services/programacion.service';
import { Programaciones } from '../../interfaces/programacion.interface';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ProgramacionGeneral],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private cdr = inject(ChangeDetectorRef);

  private programacionService = inject(ProgramacionService);

  programacionGeneral = signal<Programaciones[]>([]);

  cargando = true;
  error = false;


  ngOnInit() {
    this.programacionService.getProgramacion().subscribe({
      next: (res) => {
        this.programacionGeneral.set(res);
        this.cargando = false;
        console.log('cargando después:', this.programacionGeneral);
        console.log('Programación General obtenida correctamente:', this.programacionGeneral.length);

        console.log('Programación General obtenida correctamente');
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
        console.error('Error al obtener Programación General', err);
      }
    });
  }
}
