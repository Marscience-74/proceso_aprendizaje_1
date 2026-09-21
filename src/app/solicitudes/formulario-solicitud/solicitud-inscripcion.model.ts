// Interface local para el formulario de inscripción a curso (Actividad 3).

export interface SolicitudInscripcion {
  dni: string;
  nombre: string;
  correo: string;
  curso: string;
  carrera: string;
  horario: string;
}