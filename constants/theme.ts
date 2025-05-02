export type ThemeType = {
    background: string;
    text: string;
    primary: string;
    secondaryText: string;
    error: string;
    disabled: string;
    disabledText: string;
    card: string;
};

export const LightTheme: ThemeType = {
    background: '#FFFFFF', // blanco puro
    text: '#1C1C1E', // gris casi negro
    primary: '#2563EB', // azul moderno (azul 600)
    secondaryText: '#6B7280', // gris medio (gris 500)
    error: '#EF4444', // rojo vibrante (error)
    disabled: '#E5E7EB',
    disabledText: '#9CA3AF',
    card: '#F3F4F6'
};

export const DarkTheme: ThemeType = {
    background: '#1F1F23',
    text: '#E5E7EB',
    primary: '#60A5FA',
    secondaryText: '#9CA3AF',
    error: '#F87171',
    disabled: '#374151',
    disabledText: '#6B7280',
    card: '#27272A',
};