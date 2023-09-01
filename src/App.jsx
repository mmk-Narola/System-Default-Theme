import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    // Initially set the theme based on the system/browser preference
    updateTheme(darkThemeQuery);
  }, []);

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>System/Browser Theme App</h1>
        <p>Current theme: {theme}</p>
      </header>
    </div>
  );
}

export default App;
