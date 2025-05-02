import { useState, useEffect } from 'react'
import { useUser } from '@/context/UserContext'

import GenericInput from '@/components/GenericInput'
import ScreenContainer from '@/components/ScreenContainer'
import Title from '@/components/Title'
import PrimaryButton from '@/components/PrimaryButton'
import ErrorMessage from '@/components/ErrorMessage'
import { router } from 'expo-router'

interface Metrics {
    weight: string;
    height: string;
    age: string;
    gender: string;
}

export default function MetricsScreen() {
    const { undefinedMetric, updateMetrics, clearUndefinedMetric, userMetrics } = useUser();
    const [metrics, setMetrics] = useState<Metrics>({
        weight: userMetrics?.weight || '',
        height: userMetrics?.height || '',
        age: userMetrics?.age || '',
        gender: userMetrics?.gender || ''
    });

    useEffect(() => {
        if (userMetrics) {
            setMetrics(userMetrics);
        }
    }, [userMetrics]);

    const handleMetricsChange = (text: string, field: string) => {
        clearUndefinedMetric();
        setMetrics({
            ...metrics,
            [field]: text
        })
    }

    const submitMetrics = async (metrics: Metrics) => {
        const areMetricsUpdated = await updateMetrics(JSON.stringify(metrics));
        if (!areMetricsUpdated) {
            return false;
        }
        router.push('/home')
        return true;
    }

    return (
        <ScreenContainer>
            <Title>Metricas</Title>

            <Title isSubtitle>Modifica tus estadísticas y datos para obtener rutinas con mayor precisión para ti 👤</Title>

            <GenericInput
                placeholder='Peso en kg'
                keyboardType='numeric'
                value={metrics.weight}
                onChangeText={(text) => handleMetricsChange(text, 'weight')}
            />
            <GenericInput
                placeholder='Altura'
                keyboardType='numeric'
                value={metrics.height}
                onChangeText={(text) => handleMetricsChange(text, 'height')}
            />
            <GenericInput
                placeholder='Edad'
                keyboardType='numeric'
                value={metrics.age}
                onChangeText={(text) => handleMetricsChange(text, 'age')}
            />
            <GenericInput
                placeholder='Genero'
                value={metrics.gender}
                onChangeText={(text) => handleMetricsChange(text, 'gender')}
            />

            <ErrorMessage message={undefinedMetric} />

            <PrimaryButton
                title='Guardar'
                onPress={() => submitMetrics(metrics)}
            />
        </ScreenContainer>
    )
}