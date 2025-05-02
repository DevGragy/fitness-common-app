import ProfileScreen from "@/screens/ProfileScreen";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";

export default function ProfilePage() {
	useProtectedRoute();
	return <ProfileScreen />;
}