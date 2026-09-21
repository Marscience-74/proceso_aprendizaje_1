import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SolicitudAcademica } from '../../models/solicitudes';

@Component({
  selector: 'app-formulario-solicitud',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './formulario-solicitud.css',
  templateUrl: './formulario-solicitud.html',
})
export class FormularioSolicitud implements OnInit {
  formSolicitud!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formSolicitud = this.fb.group({
      dni: ['', [Validators.required, Validators.pattern('^\\d{8}$')]],
      nombre: ['', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+')]],
      correo: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required],
      carrera: ['', Validators.required],
      horario: ['', Validators.required],
    });
  }

onSubmit(): void {
  if (this.formSolicitud.valid) {
    const { dni, nombre, correo, curso, carrera, horario } = this.formSolicitud.value;

    const solicitud: SolicitudAcademica = {
      id: Date.now(),
      codigoEstudiante: dni,
      nombreEstudiante: nombre,
      tipoTrámite: 'Inscripción a curso',
      motivo: `Curso: ${curso}, Carrera: ${carrera}, Horario: ${horario}`,
      estado: 'Pendiente',
      fechaCreacion: new Date(),
    };

    console.log('Solicitud enviada:', solicitud);
  }
}
}