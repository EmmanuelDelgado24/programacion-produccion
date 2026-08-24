import { Component } from '@angular/core';
import { FormularioProgramacion } from '../../../shared/components/programacion/leon/pespunte/formulario-programacion/formulario-programacion';
import { FormularioProgramacion243 } from '../../../shared/components/programacion/leon/pespunte/formulario-programacion-243/formulario-programacion-243';
import { FormularioProgramacion244 } from '../../../shared/components/programacion/leon/pespunte/formulario-programacion-244/formulario-programacion-244';
import { FormularioProgramacion245 } from '../../../shared/components/programacion/leon/pespunte/formulario-programacion-245/formulario-programacion-245';
import { FormularioProgramacion246 } from '../../../shared/components/programacion/leon/pespunte/formulario-programacion-246/formulario-programacion-246';

@Component({
  selector: 'app-programacion',
  imports: [FormularioProgramacion, FormularioProgramacion243, FormularioProgramacion244, FormularioProgramacion245, FormularioProgramacion246],
  templateUrl: './programacion.html',
  styleUrl: './programacion.css',
})
export class Programacion {

}
