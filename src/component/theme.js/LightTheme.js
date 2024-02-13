import React from "react";
import { useTheme } from "./ThemeContext";

const LightTheme = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#eee",
        color: "#333",
        height: "100vh",
      }}
    >
      <h1>Light Theme Content</h1>
      <p>This is the light theme content.</p>
    </div>
  );
};

export default LightTheme;
