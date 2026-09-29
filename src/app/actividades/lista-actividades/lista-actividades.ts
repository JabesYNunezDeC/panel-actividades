import { Component } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { Actividad } from '../../modelos/actividad';


@Component({
  imports: [DatePipe, TitleCasePipe],
  selector: 'app-lista-actividades',
  styleUrl: './lista-actividades.css',
  templateUrl: './lista-actividades.html',
})
export class ListaActividades {
 protected actividades: Actividad[] = [
  { 
    id: 1, 
    titulo: 'Preparar la estructura HTML', 
    estado: 'Completada',
    prioridad:'Alta', 
    creadaEn:'2026-02-20' 
  },
  {
    id: 2,
    titulo: 'Practiva Angular',
    estado: 'En_Progreso',
    prioridad:'Media',
    creadaEn:'2020-2-28'
    },
 ];

 protected vaciar(): void{
  this.actividades =[];
 }  
}

