import { Slot, Stack } from 'expo-router';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { UserProvider } from '@/context/UserContext';

import { useTheme } from '@/hooks/useTheme';
import Loader from '@/components/Loader';

function RootNavigator() {
	const { user, loading } = useAuth();
	const theme = useTheme();

	if (loading) {
		return <Loader />;
	}

	return (
		<Stack
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: theme.background },
				statusBarBackgroundColor: theme.background,
				statusBarStyle: theme ? 'light' : 'dark',
			}}
		>
			<Stack.Screen
				name="(tabs)"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="(auth)"
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}

export default function RootLayout() {
	return (
		<AuthProvider>
			<UserProvider>
				<RootNavigator />
			</UserProvider>
		</AuthProvider>
	);
}
