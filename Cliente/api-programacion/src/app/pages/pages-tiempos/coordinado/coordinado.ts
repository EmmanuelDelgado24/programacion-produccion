import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { ModelosCoordinadoService } from '../../../services/modelosCoordinado.service';
import { CommonModule } from '@angular/common';
import { Coordinados } from '../../../interfaces/modelosCoordinado.interface';
import { ModelosCoordinado } from '../../../shared/components/tiempos-estandar/modelos-coordinado/modelos-coordinado';

@Component({
  selector: 'app-modelos',
  imports: [CommonModule, ModelosCoordinado],
  templateUrl: './coordinado.html',
  styleUrl: './coordinado.css',
})

export class Coordinado {

  private cdr = inject(ChangeDetectorRef);

  private modelosCoordinadoService = inject(ModelosCoordinadoService);

  modelosCoordinado = signal<Coordinados[]>([]);

  buscaModelo = signal('');

  cargando = true;
  error = false;

  // Método para cargar los modelos de Coordinado al iniciar el componente
  ngOnInit() {
    this.modelosCoordinadoService.getModelosCoordinado().subscribe({
      next: (res) => {
        //this.modelosCoordinado = res;
        this.modelosCoordinado.set(res);
        this.cargando = false;
        console.log('cargando después:', this.modelosCoordinado);
        console.log('Modelos Coordinado obtenidos correctamente:', this.modelosCoordinado.length);

        console.log('Modelos Coordinado obtenidos correctamente');
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
        console.error('Error al obtener modelos Coordinado', err);
      }
    });
  }

    buscarModelo() {
      //le asigno el valor del input a la señal buscaModelo a termnino
    const termino = this.buscaModelo().trim();

    // se valida si el termino esta vacio, si es asi se cargan todos los modelos de Montado
    if (!termino || termino === '') {
    this.cargando = true;
    this.modelosCoordinadoService.getModelosCoordinado().subscribe({
      next: (res) => {
        this.modelosCoordinado.set(res);
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => { this.error = true; this.cargando = false; }
    });
    return;
  }

  // Si el término no está vacío, se busca por estilo
    this.cargando = true;
    this.modelosCoordinadoService.getModelosCoordinadoEstilo(termino).subscribe({
      next: (res) => {
        this.modelosCoordinado.set(res);
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
