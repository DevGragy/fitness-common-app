import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from '@/hooks/useTheme';

export default function TabsLayout() {
    const theme = useTheme();
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.background,
                    borderTopColor: theme.background,
                    borderTopWidth: 1,
                },
                tabBarActiveTintColor: theme.primary,
                tabBarInactiveTintColor: theme.text,
                headerShown: false
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="child" color={color} />,
                }} />
            <Tabs.Screen
                name="progress"
                options={{
                    title: 'Progreso',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="line-chart" color={color} />,
                }} />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Ajustes',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="gear" color={color} />,
                }} />
        </Tabs>
    );
}
