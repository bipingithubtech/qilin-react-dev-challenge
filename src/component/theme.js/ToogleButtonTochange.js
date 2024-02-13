import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeProvider>
        {theme === "light" ? <LightTheme /> : <DarkTheme />}
      </ThemeProvider>
    </div>
  );
};

export default ThemeSwitcher;
