import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { useTheme } from "@/hooks/useTheme";

interface ButtonProps {
    title: string | null;
    onPress?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function SecondaryButton({ title, onPress, style, textStyle }: ButtonProps) {
    const theme = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, style]}
            activeOpacity={0.7}
        >
            <Text
                style={[
                    styles.text,
                    { color: theme.primary },
                    textStyle
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 6,
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
    },
});
