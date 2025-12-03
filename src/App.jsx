import React, { useState, useEffect } from "react";
import "./index.css";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  // При первом рендере читаем тему из localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // При изменении темы обновляем localStorage и атрибут html
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Моё React-приложение</h1>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main>
        <p>
          Текущая тема:{" "}
          <strong>{theme === "light" ? "светлая" : "тёмная"}</strong>
        </p>

        <div className="card">
          <h2>реакт кр</h2>
          <p>
            артем со эфбо 09-24
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
