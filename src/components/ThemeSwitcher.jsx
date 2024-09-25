import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import "../styles.css";
const ThemeSwitcher = () => {
    const { theme, toggleTheme, setCustomThemeColors } = useTheme();
    const [backgroundColor, setBackgroundColor] = useState("");
    const [textColor, setTextColor] = useState("");
    const [buttonColor, setButtonColor] = useState("");

    // Apply custom theme colors
    const applyCustomColors = () => {
        setCustomThemeColors({
            background: backgroundColor,
            text: textColor,
            button: buttonColor,
        });
    };

    return (
        <div
            style={{
                backgroundColor: `var(--background-color)`,
                color: `var(--text-color)`,
            }}
        >
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>

            <h2>Customize Theme</h2>
            <div>
                <label>Background Color:</label>
                <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                />
                <label>Text Color:</label>
                <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                />
                <label>Button Color:</label>
                <input
                    type="color"
                    value={buttonColor}
                    onChange={(e) => setButtonColor(e.target.value)}
                />
                <button onClick={applyCustomColors}>Apply Custom Colors</button>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
