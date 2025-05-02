import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, useState, useContext, createContext, useEffect } from "react";
import { validateMetrics } from "@/utils/validateMetrics";

type UserContextType = {
    hasMetrics: boolean;
    undefinedMetric: string | null;
    userMetrics: object;
    updateMetrics: (newMetrics: string) => Promise<boolean>;
    clearUndefinedMetric: () => void;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userMetrics, setUserMetrics] = useState<object>({});
    const [hasMetrics, setHasMetrics] = useState<boolean>(false);
    const [undefinedMetric, setUndefinedMetric] = useState<string | null>(null);

    useEffect(() => {
        const verifyMetrics = async () => {
            try {
                const userMetrics = await AsyncStorage.getItem("metrics");
                setHasMetrics(!!userMetrics); // true si existe, false si no
                setUserMetrics(userMetrics ? JSON.parse(userMetrics) : {});
            } catch (error) {
                setUndefinedMetric("Error verificando metricas en el almacenamiento");
                setHasMetrics(false);
            }
        };

        verifyMetrics();
    }, []);

    const clearUndefinedMetric = () => {
        setUndefinedMetric(null);
    }

    const updateMetrics = async (newMetrics: string): Promise<boolean> => {
        try {
            const parsed = JSON.parse(newMetrics);
            const validationError = validateMetrics(parsed);
            if (validationError) {
                setUndefinedMetric(validationError);
                return false;
            }

            await AsyncStorage.setItem("metrics", newMetrics);
            setHasMetrics(true);
            clearUndefinedMetric();
            return true;
        } catch (error) {
            setUndefinedMetric("Error guardando metricas en el almacenamiento");
            return false;
        }
    }

    return (
        <UserContext.Provider value={{ hasMetrics, undefinedMetric, userMetrics, clearUndefinedMetric, updateMetrics }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);