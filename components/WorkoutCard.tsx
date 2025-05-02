import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface WorkoutCardProps {
    title: string;
    description: string;
    icon: string;
    isSelected?: boolean;
    onPress?: () => void;
    testID?: string; // Para testing
}

export default function WorkoutCard({ title, description, icon, onPress, isSelected, testID }: WorkoutCardProps) {
    const theme = useTheme();

    return (
        <TouchableOpacity
            testID={testID}
            style={[
                styles.card,
                {
                    backgroundColor: theme.background === '#1F1F23' ? '#2A2A30' : theme.background,
                    borderWidth: 1,
                    borderColor: theme.background === '#1F1F23' ? '#374151' : '#E5E7EB'
                },
                isSelected && { borderWidth: 2, borderColor: theme.primary }
            ]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.iconContainer}>
                <FontAwesome name={icon as keyof typeof FontAwesome.glyphMap} size={24} color={theme.primary} />
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
                <Text style={[styles.description, { color: theme.secondaryText }]}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderColor: '#2563EB',
    },
    iconContainer: {
        marginRight: 16,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
    },
    selectedCard: {
        borderWidth: 2,
        borderColor: '#2563EB',
    },
});