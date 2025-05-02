import { Text, StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { useTheme } from "@/hooks/useTheme";

interface ErrorMessageProps {
    message: string | null;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
}

export default function ErrorMessage({ message, containerStyle, textStyle }: ErrorMessageProps) {
    const theme = useTheme();

    if (!message) return null;

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.text, textStyle, { color: theme.error }]}>
                {message}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
    },
});
