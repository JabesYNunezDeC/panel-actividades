import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-resumen-actividades',
  styleUrl: './resumen-actividades.css',
  templateUrl: './resumen-actividades.html',
})
export class ResumenActividades {
  protected readonly total = 4;
  protected readonly pendientes = 2;
  protected readonly enProgreso = 1;
  protected readonly completadas = 1;
}
