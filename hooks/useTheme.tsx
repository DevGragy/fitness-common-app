import { DarkTheme, LightTheme } from "@/constants/theme";
import { useColorScheme } from "react-native";

export const useTheme = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const theme = isDarkMode ? DarkTheme : LightTheme;
    return theme;
}