import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosPreacabado } from '../../../shared/components/tiempos-estandar/modelos-preacabado/modelos-preacabado';
import { ModelosPreacabadoService } from '../../../services/modelosPreacabado.service';
import { Preacabados } from '../../../interfaces/modelosPreacabado.interface';

@Component({
  selector: 'app-preacabado',
  imports: [CommonModule, ModelosPreacabado],
  templateUrl: './preacabado.html',
  styleUrl: './preacabado.css',
})
export class Preacabado {

  private cdr = inject(ChangeDetectorRef);

    private modelosPreacabadoService = inject(ModelosPreacabadoService);

    modelosPreacabado = signal<Preacabados[]>([]);

    buscaModelo = signal('');

    cargando = true;
    error = false;

    // Método para cargar los modelos de Preacabado al iniciar el componente
    ngOnInit() {
      this.modelosPreacabadoService.getModelosPreacabado().subscribe({
        next: (res) => {
          //this.modelosPreacabado = res;
          this.modelosPreacabado.set(res);
          this.cargando = false;
          console.log('cargando después:', this.modelosPreacabado);
          console.log('Modelos Preacabado obtenidos correctamente:', this.modelosPreacabado.length);

          console.log('Modelos Preacabado obtenidos correctamente');
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.error = true;
          this.cargando = false;
          this.cdr.detectChanges();
          console.error('Error al obtener modelos Preacabado', err);
        }
      });
    }

      buscarModelo() {
        //le asigno el valor del input a la señal buscaModelo a termnino
      const termino = this.buscaModelo().trim();

      // se valida si el termino esta vacio, si es asi se cargan todos los modelos de Preacabado
      if (!termino || termino === '') {
      this.cargando = true;
      this.modelosPreacabadoService.getModelosPreacabado().subscribe({
        next: (res) => {
          this.modelosPreacabado.set(res);
          this.cargando = false;
          this.cdr.detectChanges();
        },
        error: () => { this.error = true; this.cargando = false; }
      });
      return;
    }

    // Si el término no está vacío, se busca por estilo
      this.cargando = true;
      this.modelosPreacabadoService.getModelosPreacabadoEstilo(termino).subscribe({
        next: (res) => {
          this.modelosPreacabado.set(res);
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
