/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );
  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  return (
    <UserContext.Provider value={{
      theme, setTheme
    }}>
      {children}
    </UserContext.Provider>
  )
}
