import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReactNode, useState, useContext, createContext, useEffect } from "react";
import { validateMetrics } from "@/utils/validateMetrics";
import { Metrics } from "@/types/Metrics";

type UserContextType = {
    hasMetrics: boolean;
    undefinedMetric: string | null;
    userMetrics: Metrics;
    updateMetrics: (newMetrics: string) => Promise<boolean>;
    clearUndefinedMetric: () => void;
    refreshMetrics: () => Promise<void>;
}

const defaultMetrics: Metrics = {
    weight: '',
    height: '',
    age: '',
    gender: '',
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userMetrics, setUserMetrics] = useState<Metrics>(defaultMetrics);
    const [hasMetrics, setHasMetrics] = useState<boolean>(false);
    const [undefinedMetric, setUndefinedMetric] = useState<string | null>(null);

    useEffect(() => {
        const verifyMetrics = async () => {
            try {
                const metricsString = await AsyncStorage.getItem("metrics");
                const parsed: Metrics = metricsString ? JSON.parse(metricsString) : defaultMetrics;
                setUserMetrics(parsed);
                setHasMetrics(!!metricsString);
            } catch (error) {
                setUndefinedMetric("Error verificando métricas en el almacenamiento");
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
            await refreshMetrics();
            setHasMetrics(true);
            clearUndefinedMetric();
            return true;
        } catch (error) {
            setUndefinedMetric("Error guardando metricas en el almacenamiento");
            return false;
        }
    }

    const refreshMetrics = async () => {
        try {
            const storedMetrics = await AsyncStorage.getItem("metrics");
            const parsed: Metrics = storedMetrics ? JSON.parse(storedMetrics) : defaultMetrics;
            setUserMetrics(parsed);
            setHasMetrics(!!storedMetrics);
        } catch (error) {
            setUndefinedMetric("Error verificando métricas en el almacenamiento");
        }
    };

    return (
        <UserContext.Provider value={{ hasMetrics, undefinedMetric, userMetrics, clearUndefinedMetric, updateMetrics, refreshMetrics }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);