import SettingsScreen from "@/screens/SettingsScreen";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";

export default function SettingsPage() {
    useProtectedRoute();
    return <SettingsScreen />;
}