import { Component, signal } from '@angular/core';
import {Actividad} from '../modelos/actividad';
@Component({
  imports: [],
  selector: 'app-tablero-prioridades',
  styleUrl: './tablero-prioridades.css',
  templateUrl: './tablero-prioridades.html',
})
export class TableroPrioridades {
  protected readonly actividades = signal<Actividad[]>([
    { id: 1, titulo: 'Preparar estructura HTML', estado: 'completada', prioridad: 'alta', creadaEn: '2026-08-10', destacada: false },
    { id: 2, titulo: 'Revisar contraste', estado: 'en_progreso', prioridad: 'media', creadaEn: '2026-08-12', destacada: false },
    { id: 3, titulo: 'Practicar TypeScript', estado: 'pendiente', prioridad: 'alta', creadaEn: '2026-08-14', destacada: false },
    { id: 4, titulo: 'Copia Practicar TypeScript', estado: 'pendiente', prioridad: 'alta', creadaEn: '2026-09-14', destacada: false },
    { id: 5, titulo: 'Crear TypeScript', estado: 'pendiente', prioridad: 'baja', creadaEn: '2026-09-15', destacada: false },
  ]);
}
