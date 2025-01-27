import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        padding: "5px 10px",
        cursor: "pointer",
        margin: "10px",
      }}
    >
      {theme === "light" ? "Темна тема" : "Світла тема"}
    </button>
  );
};

export default ThemeSwitcher;
