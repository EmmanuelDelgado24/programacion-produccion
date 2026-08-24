import { Component } from '@angular/core';
import { FormularioBanda141Cue } from '../../../shared/components/programacion/cueramaro/pespunte-cueramaro/formulario-banda141-cue/formulario-banda141-cue';
import { FormularioBanda142Cue } from '../../../shared/components/programacion/cueramaro/pespunte-cueramaro/formulario-banda142-cue/formulario-banda142-cue';
import { FormularioBanda143Cue } from '../../../shared/components/programacion/cueramaro/pespunte-cueramaro/formulario-banda143-cue/formulario-banda143-cue';

@Component({
  selector: 'app-programacion-pespunte-c',
  imports: [FormularioBanda141Cue, FormularioBanda142Cue, FormularioBanda143Cue],
  templateUrl: './programacion-pespunte-c.html',
  styleUrl: './programacion-pespunte-c.css',
})
export class ProgramacionPespunteC {

}
