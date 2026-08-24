import { ChangeDetectorRef, Component, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelosMontadoService } from '../../../services/modelosMontado.service';
import { ModelosMontado } from '../../../shared/components/tiempos-estandar/modelos-montado/modelos-montado';
import { Montados } from '../../../interfaces/modelosMontado.interface';

@Component({
  selector: 'app-montado',
  imports: [CommonModule, ModelosMontado],
  templateUrl: './montado.html',
  styleUrl: './montado.css',
})
export class Montado {

  private cdr = inject(ChangeDetectorRef);

  private modelosMontadoService = inject(ModelosMontadoService);

  modelosMontado = signal<Montados[]>([]);

  buscaModelo = signal('');

  cargando = true;
  error = false;

  // Método para cargar los modelos de Montado al iniciar el componente
  ngOnInit() {
    this.modelosMontadoService.getModelosMontado().subscribe({
      next: (res) => {
        //this.modelosMontado = res;
        this.modelosMontado.set(res);
        this.cargando = false;
        console.log('cargando después:', this.modelosMontado);
        console.log('Modelos Montado obtenidos correctamente:', this.modelosMontado.length);

        console.log('Modelos Montado obtenidos correctamente');
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.error = true;
        this.cargando = false;
        this.cdr.detectChanges();
        console.error('Error al obtener modelos Montado', err);
      }
    });
  }

    buscarModelo() {
      //le asigno el valor del input a la señal buscaModelo a termnino
    const termino = this.buscaModelo().trim();

    // se valida si el termino esta vacio, si es asi se cargan todos los modelos de Montado
    if (!termino || termino === '') {
    this.cargando = true;
    this.modelosMontadoService.getModelosMontado().subscribe({
      next: (res) => {
        this.modelosMontado.set(res);
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => { this.error = true; this.cargando = false; }
    });
    return;
  }

  // Si el término no está vacío, se busca por estilo
    this.cargando = true;
    this.modelosMontadoService.getModelosMontadoEstilo(termino).subscribe({
      next: (res) => {
        this.modelosMontado.set(res);
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
