import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { useTheme } from "@/hooks/useTheme";

interface ButtonProps {
    title: string | null;
    disabled?: boolean;
    onPress?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export default function PrimaryButton({ title, disabled, onPress, style, textStyle }: ButtonProps) {
    const theme = useTheme();
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                style,
                {
                    backgroundColor: disabled ? theme.disabled : theme.primary,
                    shadowColor: theme.primary,
                    shadowOpacity: 0.2,
                    shadowRadius: 8,
                    shadowOffset: { width: 0, height: 4 },
                    elevation: Platform.OS === 'android' ? 5 : 0,
                },
            ]}
            activeOpacity={0.8}
            disabled={disabled}
        >
            <Text
                style={[
                    styles.text,
                    textStyle,
                    { color: disabled ? theme.disabledText : '#FFFFFF' }
                ]}
            >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
});