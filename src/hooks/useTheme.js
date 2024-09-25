// src/hooks/useTheme.js
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Custom hook to use theme context
export const useTheme = () => {
    const { theme, toggleTheme, customColors, setCustomThemeColors } = useContext(ThemeContext);
    return { theme, toggleTheme, customColors, setCustomThemeColors };
};
