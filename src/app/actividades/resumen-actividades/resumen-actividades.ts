import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-actividades',
  templateUrl: './resumen-actividades.html',
  styleUrl: './resumen-actividades.css',
})
export class ResumenActividades {
  protected readonly total: number = 4;
  protected readonly pendientes: number = 1;
  protected readonly completadas: number = 3;

   protected get porcentaje(): string {
    if (this.total === 0) {
      return 'Sin datos';
    }
    return `${Math.round((this.completadas / this.total) * 100)}%`;
  }

   protected get resumen(): string {
    return `${this.completadas} de ${this.total} completadas`;
  }
}
