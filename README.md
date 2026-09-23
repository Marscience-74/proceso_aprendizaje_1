# README — Evaluación

> **Curso:** PROGRAMACION WEB - II  
> **Código:** 30690  
> **Evaluación:** PA1 — Proceso de Aprendizaje 1  
> **Equipo:** Grupo 7  

## 1. Integrantes

| Integrante | Rol | Aporte principal |
|---|---|---|
| Leonardo Alonso Guillén Zúñiga | Actividad 1 | Modelo de datos tipado (`SolicitudAcademica`, `EstadoSolicitud`) |
| Edwin Montoya Romero | Actividad 2 | Componentes Angular, listado de solicitudes (`app-data`), `SolicitudService` |
| Mariano Guerrero Barrueto | Actividad 3 | Formulario reactivo de inscripción a curso (validaciones, navegación, integración con `SolicitudAcademica`) |
| Deiner Maluquis Quispe | Actividad 4 | Consumo de API REST con HttpClient |

## 2. Descripción y objetivo

**Problema:**  
La institución necesita una forma estructurada de registrar y visualizar solicitudes académicas de los estudiantes, evitando datos inválidos o incompletos.

**Objetivo:**  
Desarrollar el frontend Angular tipado de la Plataforma de Gestión de Solicitudes Académicas: registro (formulario reactivo con validaciones), navegación entre vistas, y visualización de solicitudes.

**Solución desarrollada:**  
Se desarrolló un frontend Angular con TypeScript que permite registrar, listar y visualizar solicitudes académicas. El sistema define un modelo de datos tipado (`SolicitudAcademica`) compartido entre los componentes, un formulario reactivo con validaciones específicas por campo (DNI, nombre, correo institucional) para el registro de nuevas solicitudes, un listado dinámico que refleja en tiempo real las solicitudes ingresadas mediante un servicio centralizado (`SolicitudService`), navegación entre vistas con Angular Router, y consumo de una API REST mediante `HttpClient` para obtener u operar sobre datos externos al proyecto.

## 3. Cómo ejecutar o revisar

```bash
git clone https://github.com/Marscience-74/proceso_aprendizaje_1.git
cd proceso_aprendizaje_1
npm install
npx ng serve
```

**Pasos de revisión:**
1. Abrir `http://localhost:4200/` — se muestra el listado de solicitudes.
2. Verificar en `src/app/models/solicitudes.ts` el modelo tipado `SolicitudAcademica` (Actividad 1).
3. Click en "Ir a nueva solicitud" para navegar al formulario (Actividad 3).
4. Probar un DNI inválido (ej: menos de 8 dígitos) y confirmar que aparece el mensaje de error.
5. Completar el formulario con datos válidos y enviar — la nueva solicitud debe aparecer en el listado.
6. Verificar el consumo de la API REST (Actividad 4) revisando el servicio con `HttpClient` y su resultado en pantalla.

> No publicar contraseñas, tokens, credenciales ni datos sensibles.

## 4. Evidencias

- Modelo de datos tipado (`SolicitudAcademica`, `EstadoSolicitud`) con estructura modular del proyecto.
- Formulario reactivo con validaciones (DNI 8 dígitos, nombre con Ñ/tildes, email) — capturas de casos válido e inválido.
- Consola del navegador mostrando el objeto `SolicitudAcademica` generado tras el envío.
- Listado de solicitudes actualizado en vivo tras el envío (vía `SolicitudService`).
- Servicio Angular con `HttpClient` consumiendo una API REST, con resultados visibles en pantalla.

## 5. Matriz de participación

| Integrante | Desarrollo | Pruebas | Documentación | Exposición | Evidencia de participación |
|---|---|---|---|---|---|
| Leonardo Alonso Guillén Zúñiga | Alta | Alta | Alta | Sí | Estructura inicial del proyecto Angular, commits en `models/solicitudes.ts` |
| Edwin Montoya Romero | Alta | Alta | Alta | Sí | Rama `actividad-2-edwin`, `SolicitudService`, `app-data` |
| Mariano Guerrero Barrueto | Alta | Alta | Alta | Sí | Commits en `formulario-solicitud/`, `app.routes.ts`, `app.html`; merge de la rama `actividad-2-edwin` a `main` |
| Deiner Maluquis Quispe | Alta | Alta | Alta | No | Servicio Angular con `HttpClient` para consumo de API REST |

## 6. Video de exposición

**Video público de YouTube:** https://www.youtube.com/watch?v=FSeIUrorSxs

Todos los integrantes deben participar en la exposición con sus cámaras prendidas y explicar el procedimiento, la solución desarrollada y las decisiones tomadas.

## 7. Conclusiones

- El uso de TypeScript y formularios reactivos permitió validar datos de forma estricta antes de que lleguen a cualquier backend futuro.
- La integración entre actividades independientes (formulario, modelo, listado, consumo de API) requirió coordinación de equipo para unificar el modelo de datos (`SolicitudAcademica`) y resolver conflictos de integración entre ramas de trabajo.
- El trabajo modular por actividad permitió avanzar en paralelo, aunque evidenció la necesidad de definir el alcance del dominio (qué es una "solicitud académica") desde el inicio del proyecto para evitar reajustes posteriores.
- En la Actividad 2 se logró separar la gestión de los datos pasando de trabajar con información estática a utilizar datos dinámicos mediante data binding y directivas de Angular. Con ello se obtiene una estructura más modular, reutilizable y mantenible.

---

**Última actualización:** 22/09/2026
