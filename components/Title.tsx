import { Text, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@/hooks/useTheme";

interface TitleProps {
    children: React.ReactNode;
    isSubtitle?: boolean;
    textStyle?: TextStyle;
}

export default function Title({ children, isSubtitle, textStyle }: TitleProps) {
    const theme = useTheme();

    return (
        <Text style={[!isSubtitle ? styles.title : styles.subtitle, textStyle, { color: theme.text }]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 40,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
})
