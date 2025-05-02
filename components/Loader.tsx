import { View, ActivityIndicator, StyleSheet, ViewStyle, ColorValue } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface LoaderProps {
    size?: 'small' | 'large';
    color?: ColorValue;
    style?: ViewStyle;
}

export default function Loader({ size = 'large', color, style }: LoaderProps) {
    const theme = useTheme();

    return (
        <View style={[styles.container, style]}>
            <ActivityIndicator
                size={size}
                color={color || theme.primary}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
