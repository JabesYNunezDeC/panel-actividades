import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumenActividades } from './actividades/resumen-actividades/resumen-actividades';
import { TargetaActividades } from './actividades/targeta-actividades/targeta-actividades';
import { ListaActividades } from './actividades/lista-actividades/lista-actividades';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResumenActividades, TargetaActividades, ListaActividades],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('panel-actividades');
}
