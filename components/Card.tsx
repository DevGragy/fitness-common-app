import { View, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "@/hooks/useTheme";

interface CardProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

export default function Card({ children, style }: CardProps) {
    const theme = useTheme();
    return (
        <View style={[styles.card, { backgroundColor: theme.card }, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
        marginVertical: 12,
    },
});
