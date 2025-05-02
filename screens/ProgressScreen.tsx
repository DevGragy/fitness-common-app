import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import ScreenContainer from '@/components/ScreenContainer';
import Title from '@/components/Title';

export default function ProgressScreen() {
    const theme = useTheme();

    return (
        <ScreenContainer>
            <Title>Tu Progreso</Title>

            <Title isSubtitle>
                Aquí podrás ver tus estadísticas y progreso 📈
            </Title>
        </ScreenContainer>
    );
}