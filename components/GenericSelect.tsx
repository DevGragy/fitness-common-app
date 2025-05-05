import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet, Text, useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from '@/constants/theme';
import { useTheme } from '@/hooks/useTheme';

interface GenericSelectProps {
    label?: string;
    selectedValue: string;
    onValueChange: (value: string) => void;
    options: { label: string; value: string }[];
}

export default function GenericSelect({
    label,
    selectedValue,
    onValueChange,
    options
}: GenericSelectProps) {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            {label && <Text style={[styles.label, { color: theme.text }]}>{label}</Text>}
            <View style={[styles.pickerWrapper, { backgroundColor: theme.card }]}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                    dropdownIconColor={theme.text}
                    style={[styles.picker, { color: theme.text, backgroundColor: theme.card, borderColor: theme.primary }]}
                >
                    {options.map((option) => (
                        <Picker.Item
                            key={option.value}
                            label={option.label}
                            value={option.value}
                            color={theme.text}
                        />
                    ))}
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    },
    pickerWrapper: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        width: '100%',
    },
});
