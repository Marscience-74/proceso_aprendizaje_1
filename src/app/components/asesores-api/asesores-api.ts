import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { AsesorApiService } from '../../services/asesor-api.service';
import { AsesorAcademico } from '../../models/asesor-academico';

@Component({
  imports: [CommonModule],
  selector: 'app-asesores-api',
  styleUrl: './asesores-api.css',
  templateUrl: './asesores-api.html',
})
export class AsesoresApi implements OnInit {
  private readonly asesorApiService = inject(AsesorApiService);

  readonly asesores = signal<AsesorAcademico[]>([]);
  readonly cargando = signal<boolean>(true);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.cargarAsesores();
  }

  cargarAsesores(): void {
    this.cargando.set(true);
    this.error.set(null);

    this.asesorApiService.obtenerAsesores().subscribe({
      next: (datos) => {
        this.asesores.set(datos);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudo obtener el listado de asesores.');
        this.cargando.set(false);
      },
    });
  }
}
