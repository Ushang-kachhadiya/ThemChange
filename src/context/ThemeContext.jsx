import React, { createContext, useState, useEffect } from "react";
import "../styles.css";
// Create a ThemeContext
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Default theme is 'light'
    const [customColors, setCustomColors] = useState({
        background: "",
        text: "",
        button: "",
    });

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // Set custom theme colors
    const setCustomThemeColors = (colors) => {
        setCustomColors(colors);
    };

    // Apply theme colors to CSS variables
    useEffect(() => {
        if (theme === "light") {
            document.documentElement.style.setProperty(
                "--background-color",
                "#fff"
            );
            document.documentElement.style.setProperty("--text-color", "#000");
            document.documentElement.style.setProperty(
                "--button-color",
                "#007bff"
            );
        } else {
            document.documentElement.style.setProperty(
                "--background-color",
                "#333"
            );
            document.documentElement.style.setProperty("--text-color", "#fff");
            document.documentElement.style.setProperty(
                "--button-color",
                "#ff6347"
            );
        }
    }, [theme]);

    // Apply custom colors to CSS variables if defined
    useEffect(() => {
        if (customColors.background) {
            document.documentElement.style.setProperty(
                "--background-color",
                customColors.background
            );
        }
        if (customColors.text) {
            document.documentElement.style.setProperty(
                "--text-color",
                customColors.text
            );
        }
        if (customColors.button) {
            document.documentElement.style.setProperty(
                "--button-color",
                customColors.button
            );
        }
    }, [customColors]);

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme, customColors, setCustomThemeColors }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
