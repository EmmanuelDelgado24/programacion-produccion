import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramacionMontadoAdorno } from '../../../shared/components/programacion/leon/montado-adorno/programacion-montado-adorno/programacion-montado-adorno';

@Component({
  selector: 'app-programacion-montado-leon',
  imports: [CommonModule, ProgramacionMontadoAdorno],
  templateUrl: './programacion-montado-leon.html',
  styleUrl: './programacion-montado-leon.css',
})
export class ProgramacionMontadoLeon {

}
