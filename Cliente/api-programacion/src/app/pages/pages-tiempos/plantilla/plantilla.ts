import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosPlantilla } from '../../../shared/components/tiempos-estandar/modelos-plantilla/modelos-plantilla';
import { ModelosPlantillaService } from '../../../services/modelosPlantilla.service';
import { Plantillas } from '../../../interfaces/modelosPlantilla.interface';

@Component({
  selector: 'app-plantilla',
  imports: [CommonModule, ModelosPlantilla],
  templateUrl: './plantilla.html',
  styleUrl: './plantilla.css',
})
export class Plantilla {

    private cdr = inject(ChangeDetectorRef);

    private modelosPlantillaService = inject(ModelosPlantillaService);

    modelosPlantilla = signal<Plantillas[]>([]);

    buscaModelo = signal('');
    cargando = true;
    error = false;

    // Método para cargar los modelos de Plantilla al iniciar el componente
    ngOnInit() {
      this.modelosPlantillaService.getModelosPlantilla().subscribe({
        next: (res) => {
          //this.modelosPlantilla = res;
          this.modelosPlantilla.set(res);
          this.cargando = false;
          console.log('cargando después:', this.modelosPlantilla);
          console.log('Modelos Plantilla obtenidos correctamente:', this.modelosPlantilla.length);

          console.log('Modelos Plantilla obtenidos correctamente');
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.error = true;
          this.cargando = false;
          this.cdr.detectChanges();
          console.error('Error al obtener modelos Plantilla', err);
        }
      });
    }

      buscarModelo() {
        //le asigno el valor del input a la señal buscaModelo a termnino
      const termino = this.buscaModelo().trim();

      // se valida si el termino esta vacio, si es asi se cargan todos los modelos de Plantilla
      if (!termino || termino === '') {
      this.cargando = true;
      this.modelosPlantillaService.getModelosPlantilla().subscribe({
        next: (res) => {
          this.modelosPlantilla.set(res);
          this.cargando = false;
          this.cdr.detectChanges();
        },
        error: () => { this.error = true; this.cargando = false; }
      });
      return;
    }

    // Si el término no está vacío, se busca por estilo
      this.cargando = true;
      this.modelosPlantillaService.getModelosPlantillaEstilo(termino).subscribe({
        next: (res) => {
          this.modelosPlantilla.set(res);
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
