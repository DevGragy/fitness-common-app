import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface InputProps extends TextInputProps { }

export default function GenericInput({ ...props }: InputProps) {
    const theme = useTheme();

    return (
        <TextInput
            style={[styles.input, { backgroundColor: theme.background, color: theme.text, borderColor: theme.primary }]}
            placeholderTextColor={theme.secondaryText}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 12,
    },
});