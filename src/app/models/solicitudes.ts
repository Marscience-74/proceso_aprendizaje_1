export type EstadoSolicitud = 'Pendiente' | 'En Proceso' | 'Aprobada' | 'Rechazada';

export interface SolicitudAcademica {
  id: number,
  codigoEstudiante: string,
  nombreEstudiante: string,
  tipoTrámite: string,
  motivo: string,
  estado: EstadoSolicitud,
  fechaCreacion: Date,
}