import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

import PrimaryButton from '@/components/PrimaryButton';
import GenericInput from '@/components/GenericInput';
import ErrorMessage from '@/components/ErrorMessage';
import ScreenContainer from '@/components/ScreenContainer';
import Title from '@/components/Title';
import SecondaryButton from '@/components/SecondaryButton';

export default function LoginScreen() {
    const { error, login, clearError } = useAuth();

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (text: string, field: string) => {
        clearError();
        setUserData({
            ...userData,
            [field]: text
        })
    }

    return (
        <ScreenContainer centeredContent={true}>
            <Title>Iniciar Sesión</Title>
            <Title isSubtitle>
                Ingresa tus datos para iniciar sesión
            </Title>

            <GenericInput
                placeholder="Ingresa tu email"
                value={userData.email}
                onChangeText={(text) => handleChange(text, 'email')}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <GenericInput
                placeholder="Ingresa tu contraseña"
                value={userData.password}
                onChangeText={(text) => handleChange(text, 'password')}
                secureTextEntry
            />

            <ErrorMessage message={error} />

            <PrimaryButton
                title="Entrar"
                onPress={() => login(userData.email, userData.password)}
            />
            <SecondaryButton
                title="Registrarse"
            />
        </ScreenContainer>
    );
}
