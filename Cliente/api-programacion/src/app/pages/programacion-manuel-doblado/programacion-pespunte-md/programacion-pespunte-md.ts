import { Component } from '@angular/core';
import { FormularioBanda4Md } from '../../../shared/components/programacion/manuel-doblado/pespunte-md/formulario-banda4-md/formulario-banda4-md';
import { FormularioBanda5Md } from '../../../shared/components/programacion/manuel-doblado/pespunte-md/formulario-banda5-md/formulario-banda5-md';
import { FormularioBanda7Md } from '../../../shared/components/programacion/manuel-doblado/pespunte-md/formulario-banda7-md/formulario-banda7-md';

@Component({
  selector: 'app-programacion-pespunte-md',
  imports: [FormularioBanda4Md, FormularioBanda5Md, FormularioBanda7Md],
  templateUrl: './programacion-pespunte-md.html',
  styleUrl: './programacion-pespunte-md.css',
})
export class ProgramacionPespunteMd {

}
