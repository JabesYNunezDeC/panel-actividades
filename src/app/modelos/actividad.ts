export type EstadoActividad = 'Pendiente' | 'En_Progreso' | 'Completada';

export type Prioridad = 'Baja' | 'Media' | 'Alta';

export interface Actividad {
    readonly id: number; 
    titulo: string; 
    estado: EstadoActividad;
    prioridad: Prioridad;
}

export interface ResumenActividades {
    total: number;
    pendientes: number;
    completadas: number;
    enProgreso: number;
    tituloPrioridadAlta: string [];
}
