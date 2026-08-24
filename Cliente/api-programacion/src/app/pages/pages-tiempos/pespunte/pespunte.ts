import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { ModelosPespunteService } from '../../../services/modelosPespunte.service';
import { ModelosPespunte } from '../../../shared/components/tiempos-estandar/modelos-pespunte/modelos-pespunte';
import { CommonModule } from '@angular/common';
import { Pespuntes } from '../../../interfaces/modelosPespunte.interface';

@Component({
  selector: 'app-pespunte',
  imports: [CommonModule, ModelosPespunte],
  templateUrl: './pespunte.html',
  styleUrl: './pespunte.css',
})
export class Pespunte {

  private cdr = inject(ChangeDetectorRef);

  private modelosPespunteService = inject(ModelosPespunteService);

  modelosPespunte = signal<Pespuntes[]>([]);

  buscaModelo = signal('');

  cargando = true;
  error = false;

  // Método para cargar los modelos de pespunte al iniciar el componente
  ngOnInit() {
    this.modelosPespunteService.getModelosPespunte().subscribe({
      next: (res) => {
        //this.modelosPespunte = res;
        this.modelosPespunte.set(res);
        this.cargando = false;
        console.log('cargando después:', this.modelosPespunte);
        console.log('Modelos Pespunte obtenidos correctamente:', this.modelosPespunte.length);

        console.log('Modelos Pespunte obtenidos correctamente');
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
        console.error('Error al obtener modelos Pespunte', err);
      }
    });
  }

    buscarModelo() {
      //le asigno el valor del input a la señal buscaModelo a termnino
    const termino = this.buscaModelo().trim();

    // se valida si el termino esta vacio, si es asi se cargan todos los modelos de pespunte
    if (!termino || termino === '') {
    this.cargando = true;
    this.modelosPespunteService.getModelosPespunte().subscribe({
      next: (res) => {
        this.modelosPespunte.set(res);
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => { this.error = true; this.cargando = false; }
    });
    return;
  }

  // Si el término no está vacío, se busca por estilo
    this.cargando = true;
    this.modelosPespunteService.getModelosPespunteEstilo(termino).subscribe({
      next: (res) => {
        this.modelosPespunte.set(res);
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
        console.error('Error al buscar modelo:', err);
      }
    });
  }
}
