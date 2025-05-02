export const validateMetrics = (data: any): string | null => {
    const required = { weight: 'Peso', height: 'Altura', age: 'Edad', gender: 'Género' };
    const missing = Object.entries(required)
        .filter(([key]) => !data[key])
        .map(([_, label]) => label);

    if (missing.length > 0) return `Campos faltantes: ${missing.join(', ')}`;
    if (Number(data.weight) <= 0) return 'El peso debe ser mayor a 0';
    if (Number(data.height) <= 0) return 'La altura debe ser mayor a 0';
    if (Number(data.age) <= 0) return 'La edad debe ser mayor a 0';
    if (!['Masculino', 'Femenino'].includes(data.gender)) return 'El género debe ser válido';
    return null;
};