import { Metrics } from "@/types/Metrics";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const updateRoutines = async (userId: string, metrics: Metrics)  => {
    try {
        const response = await fetch(`${API_URL}/routines/${userId}`, {
            method: 'UPDATE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ metrics }),
        });

        if (!response.ok) {
            throw new Error('Error fetching routines');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating routines:', error);
        throw error;
    }
}