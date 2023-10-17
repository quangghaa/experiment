import React from "react";
import { useState } from "react";
import "./styles.scss";
import List from "./list"

export const themes = {
    light: {
        background: "#fff",
        color: "#000",
    },
    dark: {
        background: "#171717",
        color: "#fff",
    },
};
export const ThemeContext = React.createContext();
const ProviderPattern = () => {
    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const providerValue = {
        theme: themes[theme],
        toggleTheme,
    };
    return (
        <div id="pattern-provider" className={`App theme-${theme}`}>
            <ThemeContext.Provider value={providerValue}>
                <Toggle />
                <List />
            </ThemeContext.Provider>
        </div>
    );
};
export default ProviderPattern;
