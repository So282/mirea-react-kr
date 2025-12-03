import React from "react";

function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {theme === "light" ? "🌙 Тёмная тема" : "🌞 Светлая тема"}
    </button>
  );
}

export default ThemeToggle;
