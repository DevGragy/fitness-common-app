import { View, SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface ScreenContainerProps {
    children: React.ReactNode;
    centeredContent?: boolean;
    style?: ViewStyle;
}

export default function ScreenContainer({ children, style, centeredContent }: ScreenContainerProps) {
    const theme = useTheme();

    return (
        <SafeAreaView
            style={[
                styles.container,
                { backgroundColor: theme.background },
                centeredContent ? { justifyContent: 'center' } : undefined,
                style
            ]}
        >
            <View style={styles.view}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 12,
    },
    view: {
        paddingHorizontal: 24,
    }
});