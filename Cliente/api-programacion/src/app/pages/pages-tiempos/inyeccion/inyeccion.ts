import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosInyeccion } from '../../../shared/components/tiempos-estandar/modelos-inyeccion/modelos-inyeccion';
import { ModelosInyeccionService } from '../../../services/modelosInyeccion.service';
import { Inyecciones } from '../../../interfaces/modelosInyeccion.interface';

@Component({
  selector: 'app-inyeccion',
  imports: [CommonModule, ModelosInyeccion],
  templateUrl: './inyeccion.html',
  styleUrl: './inyeccion.css',
})
export class Inyeccion {

    private cdr = inject(ChangeDetectorRef);

    private modelosInyeccionService = inject(ModelosInyeccionService);

    modelosInyeccion = signal<Inyecciones[]>([]);

    buscaModelo = signal('');

    cargando = true;
    error = false;

    // Método para cargar los modelos de  Inyección al iniciar el componente
    ngOnInit() {
      this.modelosInyeccionService.getModelosInyeccion().subscribe({
        next: (res) => {
          //this.modelosInyeccion = res;
          this.modelosInyeccion.set(res);
          this.cargando = false;
          console.log('cargando después:', this.modelosInyeccion);
          console.log('Modelos Inyección obtenidos correctamente:', this.modelosInyeccion.length);

          console.log('Modelos Inyección obtenidos correctamente');
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.error = true;
          this.cargando = false;
          this.cdr.detectChanges();
          console.error('Error al obtener modelos Inyección', err);
        }
      });
    }

      buscarModelo() {
        //le asigno el valor del input a la señal buscaModelo a termnino
      const termino = this.buscaModelo().trim();

      // se valida si el termino esta vacio, si es asi se cargan todos los modelos de Inyección
      if (!termino || termino === '') {
      this.cargando = true;
      this.modelosInyeccionService.getModelosInyeccion().subscribe({
        next: (res) => {
          this.modelosInyeccion.set(res);
          this.cargando = false;
          this.cdr.detectChanges();
        },
        error: () => { this.error = true; this.cargando = false; }
      });
      return;
    }

    // Si el término no está vacío, se busca por estilo
      this.cargando = true;
      this.modelosInyeccionService.getModelosInyeccionEstilo(termino).subscribe({
        next: (res) => {
          this.modelosInyeccion.set(res);
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
