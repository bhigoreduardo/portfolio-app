/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [isSettings, setIsSettings] = useState(false);
  const [colorSidebar, setColorSidebar] = useState(
    localStorage.getItem("colorSidebar")
      ? localStorage.getItem("colorSidebar")
      : "blue"
  );
  const [themeSidebar, setThemeSidebar] = useState(
    localStorage.getItem("themeSidebar")
      ? localStorage.getItem("themeSidebar")
      : "light"
  );
  const [fixedNav, setFixedNav] = useState(
    localStorage.getItem("fixedNav")
      ? (/true/i).test(localStorage.getItem("fixedNav"))
      : false
  );
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );

  useEffect(() => localStorage.setItem("colorSidebar", colorSidebar), [colorSidebar]);
  useEffect(() => localStorage.setItem("themeSidebar", themeSidebar), [themeSidebar]);
  useEffect(() => localStorage.setItem("fixedNav", fixedNav), [fixedNav]);
  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  return (
    <ThemeContext.Provider value={{
      isSettings, setIsSettings,
      colorSidebar, setColorSidebar,
      themeSidebar, setThemeSidebar,
      fixedNav, setFixedNav,
      theme, setTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}