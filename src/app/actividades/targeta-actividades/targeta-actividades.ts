import { Component } from '@angular/core';
import type { EstadoActividad, Prioridad} from '../../modelos/actividad';

@Component({
  imports: [],
  selector: 'app-targeta-actividades',
  styleUrl: './targeta-actividades.css',
  templateUrl: './targeta-actividades.html',
})
export class TargetaActividades {
  protected readonly titulo = 'Practicar TypeScript';
  protected readonly descripcion = 'Conectar contratos tipados con un template Angular.';
  protected readonly prioridad: Prioridad = 'alta';
  protected estado: EstadoActividad = 'pendiente';
  protected detallesVisibles = false;

  protected get porcentaje(): number {
    if (this.estado === 'completada') return 100;
    if (this.estado === 'en_progreso') return 60;
    return 20;
  }

  protected alternarDetalles(): void {
    this.detallesVisibles = !this.detallesVisibles;
  }

  protected avanzarEstado(): void {
    if (this.estado === 'pendiente') {
      this.estado = 'en_progreso';
    } else if (this.estado === 'en_progreso') {
      this.estado = 'completada';
    }
  }

}
