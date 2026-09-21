import { Injectable, signal } from '@angular/core';
import { SolicitudAcademica } from '../models/solicitudes';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private readonly _solicitudes = signal<SolicitudAcademica[]>([
    {
      id: 1,
      codigoEstudiante: 'U20261001',
      nombreEstudiante: 'María Gómez',
      tipoTrámite: 'Convalidación de Curso',
      motivo: 'Revisión de sílabo de Arquitectura Web.',
      estado: 'Pendiente',
      fechaCreacion: new Date(2026, 8, 20)
    }
  ]);

  readonly solicitudes = this._solicitudes.asReadonly();

  agregarSolicitud(solicitud: SolicitudAcademica): void {
    this._solicitudes.update(lista => [...lista, solicitud]);
  }
}