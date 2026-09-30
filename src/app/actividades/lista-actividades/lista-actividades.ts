import { Component } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import type { Actividad } from '../../modelos/actividad';

@Component({
  imports: [DatePipe, TitleCasePipe],
  selector: 'app-lista-actividades',
  styleUrl: './lista-actividades.css',
  templateUrl: './lista-actividades.html',
})
export class ListaActividades {
  protected readonly actividades: Actividad[] = [
    { id: 1, titulo: 'Preparar estructura HTML', estado: 'completada', prioridad: 'alta', creadaEn: '2026-08-10' },
    { id: 2, titulo: 'Revisar contraste', estado: 'en_progreso', prioridad: 'media', creadaEn: '2026-08-12' },
    { id: 3, titulo: 'Practicar TypeScript', estado: 'pendiente', prioridad: 'alta', creadaEn: '2026-08-14' },
  ];
}
