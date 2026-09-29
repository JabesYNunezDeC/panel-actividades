import { Component } from '@angular/core';
import {EstadoActividad} from '../../modelos/actividad';
import { Actividad } from '../../modelos/actividad';

@Component({
  imports: [],
  selector: 'app-tarjeta-actividad',
  styleUrl: './tarjeta-actividad.css',
  templateUrl: './tarjeta-actividad.html',
})
export class TarjetaActividad {
  protected readonly titulo = 'Practica Angular';
  protected readonly porcentaje: number = 45;
  protected readonly prioridad: 'baja' | 'media' | 'alta' = 'alta';
  protected readonly descripcion = 'Completar el móduki de componente.';
  protected detallesVisibles = false;
  protected estado: EstadoActividad = 'En_Progreso';

  protected readonly actividades: Actividad[] =[
    {id: 1, titulo: 'Preparar HTML', estado: 'Completada', creadaEn:''},
    {id: 2, titulo: 'Practica Angular', estado: 'Pendiente', creadaEn:''}
  ];

  protected alternarDetalles(): void{
    this.detallesVisibles = !this.detallesVisibles;
  }

  protected get completada (): boolean {
    return this.estado === 'Completada' ;
  }

  protected get esUrgente(): boolean {
    return this.prioridad === 'alta';
  }
  protected avanzarEstado(): void {
    if(this.estado === 'Pendiente') {
      this.estado = 'En_Progreso';
    } else if (this.estado ==='En_Progreso'){
      this.estado ='Completada';
    }
  }
}
