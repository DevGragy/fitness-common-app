import { useState, useEffect } from 'react'
import { useUser } from '@/context/UserContext'
import { router } from 'expo-router'
import { Metrics } from '@/types/Metrics'

import GenericInput from '@/components/GenericInput'
import ScreenContainer from '@/components/ScreenContainer'
import Title from '@/components/Title'
import PrimaryButton from '@/components/PrimaryButton'
import ErrorMessage from '@/components/ErrorMessage'
import GenericSelect from '@/components/GenericSelect';

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

            <Title isSubtitle textStyle={{ textAlign: 'left', marginBottom: 5, fontSize: 14 }}>Peso (kg)</Title>
            <GenericInput
                placeholder='Peso en kg'
                keyboardType='numeric'
                value={metrics.weight}
                onChangeText={(text) => handleMetricsChange(text, 'weight')}
            />

            <Title isSubtitle textStyle={{ textAlign: 'left', marginBottom: 5, fontSize: 14 }}>Altura (cm)</Title>
            <GenericInput
                placeholder='Altura'
                keyboardType='numeric'
                value={metrics.height}
                onChangeText={(text) => handleMetricsChange(text, 'height')}
            />

            <Title isSubtitle textStyle={{ textAlign: 'left', marginBottom: 5, fontSize: 14 }}>Edad</Title>
            <GenericInput
                placeholder='Edad'
                keyboardType='numeric'
                value={metrics.age}
                onChangeText={(text) => handleMetricsChange(text, 'age')}
            />

            <Title isSubtitle textStyle={{ textAlign: 'left', marginBottom: 5, fontSize: 14 }}>Genero</Title>
            <GenericSelect
                selectedValue={metrics.gender}
                onValueChange={(value) => handleMetricsChange(value, 'gender')}
                options={[
                    { label: 'Selecciona un género', value: '' },
                    { label: 'Masculino', value: 'Masculino' },
                    { label: 'Femenino', value: 'Femenino' },
                    { label: 'No binario', value: 'No binario' },
                    { label: 'Indefinido', value: 'Indefinido' }
                ]}
            />

            <ErrorMessage message={undefinedMetric} />

            <PrimaryButton
                title='Guardar'
                onPress={() => submitMetrics(metrics)}
            />
        </ScreenContainer>
    )
}