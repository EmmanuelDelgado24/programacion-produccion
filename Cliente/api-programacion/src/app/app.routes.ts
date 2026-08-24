import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  // EMPLEADOS
  {
    path: 'empleados',
    loadComponent: () => import('./pages/pages-empleados/empleados/empleados').then(m => m.Empleados)
  },
  {
    path: 'empleadosGeneral',
    loadComponent: () => import('./pages/pages-empleados/empleados-general/empleados-general').then(m => m.EmpleadosGeneral)
  },
  {
    path: 'empleadosCorte',
    loadComponent: () => import('./pages/pages-empleados/empleados-corte/empleados-corte').then(m => m.EmpleadosCorte)
  },
  {
    path: 'empleadosCoordinado',
    loadComponent: () => import('./pages/pages-empleados/empleados-coordinado/empleados-coordinado').then(m => m.EmpleadosCoordinado)
  },
  {
    path: 'empleadosPespunte242',
    loadComponent: () => import('./pages/pages-empleados/empleados-pespunte242/empleados-pespunte242').then(m => m.EmpleadosPespunte242)
  },
  {
    path: 'empleadosPespunte243',
    loadComponent: () => import('./pages/pages-empleados/empleados-pespunte243/empleados-pespunte243').then(m => m.EmpleadosPespunte243)
  },
  {
    path: 'empleadosPespunte244',
    loadComponent: () => import('./pages/pages-empleados/empleados-pespunte244/empleados-pespunte244').then(m => m.EmpleadosPespunte244)
  },
  {
    path: 'empleadosPespunte245',
    loadComponent: () => import('./pages/pages-empleados/empleados-pespunte245/empleados-pespunte245').then(m => m.EmpleadosPespunte245)
  },
  {
    path: 'empleadosPespunte246',
    loadComponent: () => import('./pages/pages-empleados/empleados-pespunte246/empleados-pespunte246').then(m => m.EmpleadosPespunte246)
  },
  {
    path: 'empleadosMontado',
    loadComponent: () => import('./pages/pages-empleados/empleados-montado/empleados-montado').then(m => m.EmpleadosMontado)
  },
  {
    path: 'empleadosAdorno',
    loadComponent: () => import('./pages/pages-empleados/empleados-adorno/empleados-adorno').then(m => m.EmpleadosAdorno)
  },
  // TIEMPOS
  {
    path: 'corte',
    loadComponent: () => import('./pages/pages-tiempos/corte/corte').then(m => m.Corte)
  },
  {
    path: 'coordinado',
    loadComponent: () => import('./pages/pages-tiempos/coordinado/coordinado').then(m => m.Coordinado)
  },
  {
    path: 'pespunte',
    loadComponent: () => import('./pages/pages-tiempos/pespunte/pespunte').then(m => m.Pespunte)
  },
  {
    path: 'montado',
    loadComponent: () => import('./pages/pages-tiempos/montado/montado').then(m => m.Montado)
  },
  {
    path: 'inyeccion',
    loadComponent: () => import('./pages/pages-tiempos/inyeccion/inyeccion').then(m => m.Inyeccion)
  },
  {
    path: 'preacabado',
    loadComponent: () => import('./pages/pages-tiempos/preacabado/preacabado').then(m => m.Preacabado)
  },
  {
    path: 'plantilla',
    loadComponent: () => import('./pages/pages-tiempos/plantilla/plantilla').then(m => m.Plantilla)
  },
  // GENERAL
  {
    path: 'clientes',
    loadComponent: () => import('./pages/clientes/clientes').then(m => m.Clientes)
  },
  {
    path: 'pedidos',
    loadComponent: () => import('./pages/pedidos/pedidos').then(m => m.Pedidos)
  },
  // LEÓN
  {
    path: 'programacion-corte-leon',
    loadComponent: () => import('./pages/programacion-leon/programacion-corte-leon/programacion-corte-leon').then(m => m.ProgramacionCorteLeon)
  },
  {
    path: 'programacion-coordinado-leon',
    loadComponent: () => import('./pages/programacion-leon/programacion-coordinado-leon/programacion-coordinado-leon').then(m => m.ProgramacionCoordinadoLeon)
  },
  {
    path: 'programacion',
    loadComponent: () => import('./pages/programacion-leon/programacion/programacion').then(m => m.Programacion)
  },
  {
    path: 'programacion-montado-leon',
    loadComponent: () => import('./pages/programacion-leon/programacion-montado-leon/programacion-montado-leon').then(m => m.ProgramacionMontadoLeon)
  },
  // MANUEL DOBLADO
  {
    path: 'programacion-corte-md',
    loadComponent: () => import('./pages/programacion-manuel-doblado/programacion-corte-md/programacion-corte-md').then(m => m.ProgramacionCorteMd)
  },
  {
    path: 'programacion-coordinado-md',
    loadComponent: () => import('./pages/programacion-manuel-doblado/programacion-coordinado-md/programacion-coordinado-md').then(m => m.ProgramacionCoordinadoMd)
  },
  {
    path: 'programacion-pespunte-md',
    loadComponent: () => import('./pages/programacion-manuel-doblado/programacion-pespunte-md/programacion-pespunte-md').then(m => m.ProgramacionPespunteMd)
  },
  {
    path: 'programacion-montado-adorno-md',
    loadComponent: () => import('./pages/programacion-manuel-doblado/programacion-montado-adorno-md/programacion-montado-adorno-md').then(m => m.ProgramacionMontadoAdornoMd)
  },
  {
    path: 'programacion-plantilla-md',
    loadComponent: () => import('./pages/programacion-manuel-doblado/programacion-plantilla-md/programacion-plantilla-md').then(m => m.ProgramacionPlantillaMd)
  },
    {
    path: 'programacion-inyeccion-md',
    loadComponent: () => import('./pages/programacion-manuel-doblado/programacion-inyeccion-md/programacion-inyeccion-md').then(m => m.ProgramacionInyeccionMd)
  },
  {
    path: 'programacion-preacabado-md',
    loadComponent: () => import('./pages/programacion-manuel-doblado/programacion-preacabado-md/programacion-preacabado-md').then(m => m.ProgramacionPreacabadoMd)
  },
  // CUERAMARO
  {
    path: 'programacion-corte-c',
    loadComponent: () => import('./pages/programacion-cueramaro/programacion-corte-c/programacion-corte-c').then(m => m.ProgramacionCorteC)
  },
  {
    path: 'programacion-coordinado-c',
    loadComponent: () => import('./pages/programacion-cueramaro/programacion-coordinado-c/programacion-coordinado-c').then(m => m.ProgramacionCoordinadoC)
  },
  {
    path: 'programacion-pespunte-c',
    loadComponent: () => import('./pages/programacion-cueramaro/programacion-pespunte-c/programacion-pespunte-c').then(m => m.ProgramacionPespunteC)
  },
  {
    path: 'programacion-montado-adorno-c',
    loadComponent: () => import('./pages/programacion-cueramaro/programacion-montado-adorno-c/programacion-montado-adorno-c').then(m => m.ProgramacionMontadoAdornoC)
  },
];
