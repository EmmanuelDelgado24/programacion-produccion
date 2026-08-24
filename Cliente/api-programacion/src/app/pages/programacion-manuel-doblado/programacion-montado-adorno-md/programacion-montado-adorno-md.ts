import { Component } from '@angular/core';
import { FormularioMontado1Md } from '../../../shared/components/programacion/manuel-doblado/montado-adorno-md/formulario-montado1-md/formulario-montado1-md';
import { FormularioMontado2Md } from '../../../shared/components/programacion/manuel-doblado/montado-adorno-md/formulario-montado2-md/formulario-montado2-md';
import { FormularioMontado4Md } from '../../../shared/components/programacion/manuel-doblado/montado-adorno-md/formulario-montado4-md/formulario-montado4-md';

@Component({
  selector: 'app-programacion-montado-adorno-md',
  imports: [FormularioMontado1Md, FormularioMontado2Md, FormularioMontado4Md],
  templateUrl: './programacion-montado-adorno-md.html',
  styleUrl: './programacion-montado-adorno-md.css',
})
export class ProgramacionMontadoAdornoMd {

}
