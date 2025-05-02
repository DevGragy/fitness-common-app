import HomeScreen from "@/screens/HomeScreen";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";

export default function HomePage() {
    useProtectedRoute();
    return <HomeScreen />;
}