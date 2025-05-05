import { useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginRequest } from "@/services/authService";
import { useUser } from "./UserContext";

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
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { refreshMetrics } = useUser();

    useEffect(() => {
        _checkSession();
    }, []);

    const login = async (email: string, password: string) => {
        setError(null);
        setLoading(true);
        try {
            const data = await loginRequest(email, password);
            const { user } = data;
            await AsyncStorage.setItem('user', JSON.stringify(user));
            await AsyncStorage.setItem('username', user.username);
            setUser(user.username);

            const metrics = JSON.stringify({
                height: user.height,
                weight: user.weight,
                age: user.age,
                gender: user.gender
            })
            await AsyncStorage.setItem("metrics", metrics);
            await refreshMetrics();

            router.push("/(tabs)/home");
        } catch (err: any) {
            setError(err.message || 'Error al iniciar sesión');
        } finally {
            setLoading(false);
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
            const storedUser = await AsyncStorage.getItem('username');
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
