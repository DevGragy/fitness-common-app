import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import MetricsScreen from "@/screens/MetricsScreen";

export default function MetricsPage() {
    useProtectedRoute();
    return <MetricsScreen />;
}