import { ChangeDetectorRef, Component, inject, signal} from '@angular/core';
import { ModelosCorteService } from '../../../services/modelosCorte.service';
import { CommonModule } from '@angular/common';
import { Cortes } from '../../../interfaces/modelosCorte.interface';
import { ModelosCorte } from '../../../shared/components/tiempos-estandar/modelos-corte/modelos-corte';


@Component({
  selector: 'app-corte',
  imports: [CommonModule, ModelosCorte],
  templateUrl: './corte.html',
  styleUrl: './corte.css',
})
export class Corte {

  private cdr = inject(ChangeDetectorRef);

  private modelosCorteService = inject(ModelosCorteService);

  modelosCorte = signal<Cortes[]>([]);

  buscaModelo = signal('');

  cargando = true;
  error = false;


  ngOnInit() {
    this.modelosCorteService.getModelosCorte().subscribe({
      next: (res) => {
        this.modelosCorte.set(res);
        this.cargando = false;
        console.log('cargando después:', this.modelosCorte);
        console.log('Modelos corte obtenidos correctamente:', this.modelosCorte.length);

        console.log('Modelos corte obtenidos correctamente');
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
        console.error('Error al obtener modelos corte', err);
      }
    });
  }

   buscarModelo() {
      //le asigno el valor del input a la señal buscaModelo a termnino
    const termino = this.buscaModelo().trim();

    // se valida si el termino esta vacio, si es asi se cargan todos los modelos de pespunte
    if (!termino || termino === '') {
    this.cargando = true;
    this.modelosCorteService.getModelosCorte().subscribe({
      next: (res) => {
        this.modelosCorte.set(res);
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => { this.error = true; this.cargando = false; }
    });
    return;
  }

  // Si el término no está vacío, se busca por estilo
    this.cargando = true;
    this.modelosCorteService.getModelosCorteEstilo(termino).subscribe({
      next: (res) => {
        this.modelosCorte.set(res);
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
