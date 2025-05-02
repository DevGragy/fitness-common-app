import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { router } from "expo-router";

export const useGuestRoute = () => {
    const { user, loading } = useAuth();

    useEffect(() => {
        if (loading) return;

        if (user) {
            setTimeout(() => {
                router.replace('/(tabs)/home');
            }, 1000);
        }
    }, [user, loading]);
}