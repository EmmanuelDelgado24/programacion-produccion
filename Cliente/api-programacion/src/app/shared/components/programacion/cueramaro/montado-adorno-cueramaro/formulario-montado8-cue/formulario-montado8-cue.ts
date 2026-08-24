import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fila } from '../../../../../../interfaces/fila.interface';
import { StorageService } from '../../../../../../services/storage.service';
import { ModelosMontadoService } from '../../../../../../services/modelosMontado.service';
import { Montados } from '../../../../../../interfaces/modelosMontado.interface';
import { ProgramacionService } from '../../../../../../services/programacion.service';
import { Programaciones } from '../../../../../../interfaces/programacion.interface';

@Component({
  selector: 'app-formulario-montado8-cue',
  imports: [CommonModule],
  templateUrl: './formulario-montado8-cue.html',
  styleUrl: './formulario-montado8-cue.css',
})
export class FormularioMontado8Cue {

  private modelosMontadoService = inject(ModelosMontadoService);

  private programacionService = inject(ProgramacionService);

  private storage = inject(StorageService);

  public minutosDisponibles = 576;

    // Variable para controlar si mostramos el éxito
  mostrarAlertaExito = false;

  filas = signal<Fila[]>([this.crearFilaVacia()]);

  crearFilaVacia(): Fila {
    const uuid = crypto.randomUUID(); // ← ID ÚNICO de fila
    return {
      uuid,
      idPedido: 0,
      cliente: '',
      semana: 0,
      departamento: 'MONTADO/ADORNO 8 CUERÁMARO',
      linea: '',
      dia: '',
      modelo: this.storage.persistenteSignal(`modelo-${uuid}`, ''),
      talla5Pares: this.storage.persistenteSignal(`talla5-${uuid}`, 0),
      talla55Pares: this.storage.persistenteSignal(`talla55-${uuid}`, 0),
      talla6Pares: this.storage.persistenteSignal(`talla6-${uuid}`, 0),
      talla65Pares: this.storage.persistenteSignal(`talla65-${uuid}`, 0),
      talla7Pares: this.storage.persistenteSignal(`talla7-${uuid}`, 0),
      talla75Pares: this.storage.persistenteSignal(`talla75-${uuid}`, 0),
      talla8Pares: this.storage.persistenteSignal(`talla8-${uuid}`, 0),
      talla85Pares: this.storage.persistenteSignal(`talla85-${uuid}`, 0),
      talla9Pares: this.storage.persistenteSignal(`talla9-${uuid}`, 0),
      talla95Pares: this.storage.persistenteSignal(`talla95-${uuid}`, 0),
      talla10Pares: this.storage.persistenteSignal(`talla10-${uuid}`, 0),
      talla105Pares: this.storage.persistenteSignal(`talla105-${uuid}`, 0),
      talla11Pares: this.storage.persistenteSignal(`talla11-${uuid}`, 0),
      demandaDia: this.storage.persistenteSignal(`demandaDia-${uuid}`, 0),
      personal: this.storage.persistenteSignal(`personal-${uuid}`, 22),
      minutosDisponibles: this.storage.persistenteSignal(`minutosDis-${uuid}`, 0),
      tiempoEstandar: this.storage.persistenteSignal(`tiempoStd-${uuid}`, null),
      capacidadDia: this.storage.persistenteSignal(`capacidadDia-${uuid}`, 0),
      cargaDia: this.storage.persistenteSignal(`cargaDia-${uuid}`, 0),
      saturacion: this.storage.persistenteSignal(`saturacion-${uuid}`, 0),
      capacidadDepartamento: this.storage.persistenteSignal(`capacidadDept-${uuid}`, 0),
      programacionIdeal: this.storage.persistenteSignal(`progIdeal-${uuid}`, 0),
      deficit: this.storage.persistenteSignal(`deficit-${uuid}`, 0),
      buscando: this.storage.persistenteSignal(`buscando-${uuid}`, false),
      errorBusqueda: this.storage.persistenteSignal(`errorBusqueda-${uuid}`, false),
    }
  }

  recalcularFila(fila: Fila) {
    const personal = fila.personal();
    const minutos = this.minutosDisponibles; // ← variable global
    const tiempo = fila.tiempoEstandar() ?? 0;
    const demanda = fila.demandaDia();

    const minutosDepto = Math.round(personal * minutos);
    const capacidadDia = tiempo > 0 ? Math.round((personal * minutos) / tiempo) : 0;
    const cargaDia = Math.round(demanda * tiempo);
    const saturacion = minutosDepto > 0 ? Math.round((cargaDia / minutosDepto) * 100) : 0;
    const capacidadDepto = capacidadDia;
    const progIdeal = Math.min(capacidadDepto, demanda);
    const deficit = Math.max(0, demanda - capacidadDepto);


    fila.minutosDisponibles.set(minutosDepto);
    fila.capacidadDia.set(capacidadDia);
    fila.cargaDia.set(cargaDia);
    fila.saturacion.set(saturacion);
    fila.capacidadDepartamento.set(capacidadDepto);
    fila.programacionIdeal.set(progIdeal);
    fila.deficit.set(deficit);
  }

  // Saturación (suma) acumulada de todas las filas
  saturacionTotal(): number {
    return this.filas().reduce((acc, fila) => acc + fila.saturacion(), 0)
  }

  // Minutos disponibles restantes considerando todas las filas
minutosRestantes(): number {
  //sumo todo lo que hay en carga día
  const totalCarga = this.filas().reduce((acc, fila) => acc + fila.cargaDia(), 0);
  //mando llamar al personal
  const personal   = this.filas()[0]?.personal() ?? 22;
  return Math.max(0, (personal * this.minutosDisponibles) - totalCarga);
}

// ¿Cuántos pares más caben con los minutos restantes?
capacidadRestante(tiempoEstandar: number): number {
  const restantes = this.minutosRestantes();
  //minutos restantes dividido entre el tiempo estandar
  return tiempoEstandar > 0 ? Math.floor(restantes / tiempoEstandar) : 0;
}

tiempoEstandarTotal(): number{
   return this.filas().reduce((acc, fila) => acc + (fila.tiempoEstandar() ?? 0), 0);
}

  actualizarPersonal(fila: Fila, valor: number) {
    fila.personal.set(valor);
    this.recalcularFila(fila);
  }

  actualizarDemanda(fila: Fila, valor: number) {
    fila.demandaDia.set(valor);
    this.recalcularFila(fila);
  }

  agregarFila() {
    this.filas.update(filas => [...filas, this.crearFilaVacia()]);
  }

  eliminarFila() {
    this.filas.update(filas => filas.slice(0, -1));
  }


  buscarTiempoEstandar(fila: Fila) {
    const modelMon = fila.modelo().trim();

    if (!modelMon) {
      fila.tiempoEstandar.set(null);
      return;
    }

    fila.buscando.set(true);
    fila.errorBusqueda.set(false);

    this.modelosMontadoService.getModelosMontadoEstilo(modelMon).subscribe({
      next: (res) => {
        //Si res es un array, tomas el primer elemento (res[0]), si no, asumes que res es un objeto Pespuntes
        const resultado = Array.isArray(res) ? res[0] : res as Montados;
        //Si resultado existe, obtiene tiempoStdMin de resultado, si no, asigna null
        fila.tiempoEstandar.set(resultado?.tiempoStdMin ?? null);
        this.recalcularFila(fila); // ← recalcula al obtener tiempo estándar
        fila.buscando.set(false);
        console.log('Tiempo estándar encontrado:', resultado?.tiempoStdMin);
      },
      error: (err) => {
        fila.tiempoEstandar.set(null);
        fila.errorBusqueda.set(true);
        fila.errorBusqueda.set(true);
        console.error('Error al buscar modelo:', err);
      }
    });
  }

  programacionMontado() {
    const nuevaProgramacion: Programaciones[] = this.filas().map(fila => ({
      idPedido: fila.idPedido,
      cliente: fila.cliente,
      semana: fila.semana,
      departamento: fila.departamento || 'MONTADO/ADORNO 8 CUERÁMARO',
      linea: fila.linea,
      dia: fila.dia,
      modelo: +fila.modelo(),
      demandaDia: fila.demandaDia(),
      personal: fila.personal(),
      minutosDispo: fila.minutosDisponibles() ?? 0,
      tiempoEst: fila.tiempoEstandar() ?? 0,
      capacidadDia: fila.capacidadDia(),
      cargaDia: fila.cargaDia(),
      saturacion: fila.saturacion(),
      capacidadReal: fila.capacidadDepartamento(),
      programacionIdeal: fila.programacionIdeal(),
      deficit: fila.deficit(),
    }));

    // 2. Filtramos para enviar ÚNICAMENTE las filas que el usuario sí llenó
  // Esto evita que las filas vacías que se queden en "Seleccionar" o con IdPedido 0 truenen la API.
  const todasLasFilas = nuevaProgramacion.filter(p =>
    p.idPedido > 0 &&
    p.cliente &&
    p.cliente.trim() !== '' &&
    p.semana > 0
  );

    // Validar que no vaya vacío antes de enviar
    if(nuevaProgramacion.length == 0){
      console.warn('No hay datos para programar.');
      return;
    }

    // 2. Consumir el servicio mediante el POST
    this.programacionService.postProgramacion(todasLasFilas).subscribe({
      next: (response) => {
        console.log('Programación de Montado/Adorno 8 Cuerámaro guardada con éxito', response);

        // 1. Activamos la alerta de éxito
        this.mostrarAlertaExito = true;
        setTimeout(() => {
          this.mostrarAlertaExito = false;
        }, 5000);
        // 2. LIMPIEZA: Dejamos la tabla con una única fila nueva y limpia
       this.filas.set([]);

      },
      error: (err) => {
        console.error('Error al guardar la programación', err);
        // Manejo del error visual para el usuario
      }
    });
  }
}
