import { useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
    user: string | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => void;
    logout: () => void;
    clearError: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // inicia cargando
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        _checkSession();
    }, []);

    const login = async (email: string, password: string) => {
        setError(null);
        if (email === "Elias" && password === "123") {
            setUser(email);
            await AsyncStorage.setItem('user', email);
        } else {
            setError("Correo o contraseña incorrectos.");
        }
    };

    const logout = async () => {
        await AsyncStorage.removeItem('user');
        setUser(null);
    };

    const clearError = () => {
        setError(null);
    };

    const _checkSession = async () => {
        try {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                setUser(storedUser);
            }
        } catch (error) {
            console.error('Error checking session:', error);
        }
        setLoading(false);
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, logout, clearError }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
