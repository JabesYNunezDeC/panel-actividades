import { Component, inject } from '@angular/core';
import { ServicioActividades } from '../../actividades/servicio-actividades/servicio-actividades';

@Component({
  imports: [],
  selector: 'app-pagina-estadisticas',
  styleUrl: './pagina-estadisticas.css',
  templateUrl: './pagina-estadisticas.html',
})
export class PaginaEstadisticas {
  private readonly servicio = inject(ServicioActividades);
  protected readonly total = this.servicio.total;
  protected readonly pendientes = this.servicio.pendientes;
  protected readonly completadas = this.servicio.completadas;
  protected readonly porcentaje = this.servicio.porcentaje;
}
