// src/App.js
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./styles.css";

function App() {
    return (
        <ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>
    );
}

export default App;
