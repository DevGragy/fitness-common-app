import { Text, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { useUser } from "@/context/UserContext";
import { Metrics } from "@/types/Metrics";
import { useTheme } from "@/hooks/useTheme";

import ScreenContainer from "@/components/ScreenContainer";
import Title from "@/components/Title";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";

export default function ProfileScreen() {
    const { userMetrics } = useUser();
    const theme = useTheme();

    const metrics = userMetrics as Metrics;

    return (
        <ScreenContainer>
            <Title>Mi perfil</Title>
            <Title isSubtitle textStyle={{ fontSize: 15 }}>
                Observa tus métricas y ajustalas para obtener un mejor seguimiento de tu salud y metas de alimentación.
            </Title>

            <Card>
                <Title isSubtitle>Mis métricas</Title>
                <View style={styles.metricRow}>
                    <Text style={[styles.label, { color: theme.secondaryText }]}>Peso:</Text>
                    <Text style={[styles.value, { color: theme.text }]}>{metrics.weight} kg</Text>
                </View>
                <View style={styles.metricRow}>
                    <Text style={[styles.label, { color: theme.secondaryText }]}>Altura:</Text>
                    <Text style={[styles.value, { color: theme.text }]}>{metrics.height} cm</Text>
                </View>
                <View style={styles.metricRow}>
                    <Text style={[styles.label, { color: theme.secondaryText }]}>Edad:</Text>
                    <Text style={[styles.value, { color: theme.text }]}>{metrics.age} años</Text>
                </View>
                <View style={styles.metricRow}>
                    <Text style={[styles.label, { color: theme.secondaryText }]}>Género:</Text>
                    <Text style={[styles.value, { color: theme.text }]}>{metrics.gender}</Text>
                </View>
            </Card>
            <Title isSubtitle textStyle={{ fontSize: 13 }}>
                Si necesitas ayuda para ajustar tus métricas, ponte en contacto con un nutricionista para recibir orientación personalizada.
            </Title>

            <PrimaryButton
                title="Editar métricas"
                onPress={() => {
                    router.push("/metrics");
                }}
            />
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    metricRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#ccc",
    },
    label: {
        fontSize: 15,
    },
    value: {
        fontSize: 15,
        fontWeight: "bold",
    },
});
