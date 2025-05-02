import ProgressScreen from "@/screens/ProgressScreen";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";

export default function ProgressPage() {
    useProtectedRoute();
    return <ProgressScreen />;
}