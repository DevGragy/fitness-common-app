export type WorkoutType = 'full-body' | 'upper-body' | 'lower-body' | 'core';

export interface WorkoutData {
    id: WorkoutType;
    title: string;
    description: string;
    icon: string;
}

export const WORKOUT_DATA: WorkoutData[] = [
    {
        id: 'full-body',
        title: 'Full Body',
        description: 'Una rutina completa para todos los musculos',
        icon: 'child'
    },
    {
        id: 'upper-body',
        title: 'Upper Body',
        description: 'Prioriza con los musculos superiores',
        icon: 'arrow-up'
    },
    {
        id: 'lower-body',
        title: 'Lower Body',
        description: 'Ejercicios para los musculos inferiores',
        icon: 'arrow-down'
    },
    {
        id: 'core',
        title: 'Core',
        description: 'Fuerza en el core y estabilidad',
        icon: 'dot-circle-o'
    }
];