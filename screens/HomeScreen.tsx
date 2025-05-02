import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAuth } from '@/context/AuthContext';
import { WorkoutType, WORKOUT_DATA } from '@/constants/workouts';

import ScreenContainer from '@/components/ScreenContainer';
import Title from '@/components/Title';
import WorkoutCard from '@/components/WorkoutCard';
import PrimaryButton from '@/components/PrimaryButton';


export default function HomeScreen() {
    const { user } = useAuth();
    const [selectedWorkout, setSelectedWorkout] = useState<WorkoutType | null>(null);

    const handleWorkoutSelect = (workoutId: WorkoutType) => {
        setSelectedWorkout(currentSelected =>
            currentSelected === workoutId ? null : workoutId
        );
    };

    return (
        <ScreenContainer>

            <Title>Bienvenido, {user || 'User'} 👋</Title>

            <Title isSubtitle>
                Selecciona una rutina para empezar
            </Title>

            <View style={styles.cardsContainer}>
                {WORKOUT_DATA.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        title={workout.title}
                        description={workout.description}
                        icon={workout.icon}
                        isSelected={selectedWorkout === workout.id}
                        onPress={() => handleWorkoutSelect(workout.id)}
                        testID={`workout-card-${workout.id}`}
                    />
                ))}
            </View>
            <View style={styles.footer}>
                <PrimaryButton
                    title="Empezar"
                    onPress={() => { }}
                    disabled={!selectedWorkout}
                />
            </View>
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 24,
    },
    cardsContainer: {
        marginTop: 16,
    },
    footer: {
        marginTop: 'auto',
        paddingVertical: 16,
    },
});