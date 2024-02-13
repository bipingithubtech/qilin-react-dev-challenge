import React from "react";
import { useTheme } from "./ThemeContext";

const DarkTheme = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#555",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h1>Dark Theme Content</h1>
      <p>This is the dark theme content.</p>
    </div>
  );
};

export default DarkTheme;
