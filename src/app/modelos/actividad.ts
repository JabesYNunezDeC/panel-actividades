export type EstadoActividad = 'Pendiente' | 'En_Progreso' | 'Completada';

export type Prioridad = 'Baja' | 'Media' | 'Alta';

export interface Actividad {
    readonly id: number; 
    titulo: string; 
    estado: EstadoActividad;
    prioridad?: Prioridad; // <-- The '?' makes it optional if not gives an error because It will make priority required
    creadaEn: string;
}

export interface ResumenActividades {
    total: number;
    pendientes: number;
    completadas: number;
    enProgreso: number;
    tituloPrioridadAlta: string [];
}
