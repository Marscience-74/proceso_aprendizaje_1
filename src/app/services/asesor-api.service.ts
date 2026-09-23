import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AsesorAcademico } from '../models/asesor-academico';

@Injectable({
  providedIn: 'root',
})
export class AsesorApiService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  obtenerAsesores(): Observable<AsesorAcademico[]> {
    return this.http.get<AsesorAcademico[]>(this.apiUrl);
  }
}
