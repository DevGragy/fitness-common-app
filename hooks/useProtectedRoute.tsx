import { useEffect } from "react";
import { router, useSegments } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { useUser } from "@/context/UserContext";

export const useProtectedRoute = () => {
    const { user, loading } = useAuth();
    const { hasMetrics } = useUser();
    const segments = useSegments();

    useEffect(() => {
        if (loading) return;

        const inAuthGroup = segments[0] === '(auth)';
        const navigate = () => {
            if (!user && !inAuthGroup) {
                setTimeout(() => {
                    router.replace('/(auth)');
                }, 0);
            } else if (user && inAuthGroup && hasMetrics) {
                setTimeout(() => {
                    router.replace('/(tabs)/home');
                }, 0);
            } else if (!hasMetrics) {
                setTimeout(() => {
                    router.replace('/(tabs)/metrics');
                }, 0);
            }
        }

        requestAnimationFrame(navigate);

    }, [user, segments, loading]);
}