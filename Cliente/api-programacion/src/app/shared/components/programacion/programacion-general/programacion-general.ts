import { Component, Input } from '@angular/core';
import { Programaciones } from '../../../../interfaces/programacion.interface';
import { CommonModule } from '@angular/common';
import { Pedido } from '../../../../interfaces/pedidos.inteface';

@Component({
  selector: 'app-programacion-general',
  imports: [CommonModule],
  templateUrl: './programacion-general.html',
  styleUrl: './programacion-general.css',
})
export class ProgramacionGeneral {

  ngOnInit() {
    console.log(this.listaProgramacion);
  }

  @Input() listaProgramacion: Programaciones[] = [];

  eliminarFila() { }

  sumarPares(programacion: Programaciones): number {

    //si el pedido no tiene detalles de numeración o el arreglo está vacío, retornamos 0
    if (!programacion.detallesNumeracion || programacion.detallesNumeracion.length === 0) {
      return 0;
    }

    //usamos reduce para sumar la cantidad de pares en todos los detalles de numeración del pedido
    const total = programacion.detallesNumeracion.reduce((acc, detalle) => acc + detalle.cantidad, 0);
    return total;
  }


  //esta función recibe un pedido y una talla buscada, y retorna la cantidad de pares para esa talla específica
  getTallaCant(programacion: Programaciones, tallaBuscada: number): number | string {
    const detalle = programacion.detallesNumeracion?.find(
      d => d.talla === tallaBuscada);
    return detalle ? detalle.cantidad : '0';
  }

}
