import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import ScreenContainer from '@/components/ScreenContainer';
import Title from '@/components/Title';
import PrimaryButton from '@/components/PrimaryButton';
import { useAuth } from '@/context/AuthContext';
import SecondaryButton from '@/components/SecondaryButton';

export default function SettingsScreen() {
    const theme = useTheme();
    const { logout } = useAuth();

    return (
        <ScreenContainer>
            <Title>Configuración</Title>
            <Title isSubtitle>
                Personaliza tu experiencia ⚙️
            </Title>
            <SecondaryButton
                title="Cerrar Sesión"
                onPress={logout}
            />
        </ScreenContainer>
    );
}
