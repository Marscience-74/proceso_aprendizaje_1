import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  imports: [CommonModule],
  selector: 'app-data',
  styleUrl: './data.css',
  templateUrl: './data.html',
})
export class Data {

  private readonly solicitudService = inject(SolicitudService);

  readonly solicitudes = this.solicitudService.solicitudes;
}