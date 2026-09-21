import { Routes } from '@angular/router';
import { FormularioSolicitud } from './solicitudes/formulario-solicitud/formulario-solicitud';

export const routes: Routes = [
  { path: 'nueva-solicitud', component: FormularioSolicitud },
  { path: '', redirectTo: 'nueva-solicitud', pathMatch: 'full' },
];