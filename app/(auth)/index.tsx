import LoginScreen from "@/screens/LoginScreen";
import { useGuestRoute } from "@/hooks/useGuestRoute";

export default function LoginPage() {
  useGuestRoute();
  return <LoginScreen />;
}