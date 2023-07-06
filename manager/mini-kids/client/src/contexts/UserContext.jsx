/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage?.getItem("user")) || ""
  );
  
  const logout = () => {
    setUser("");
    localStorage.removeItem("user");
  }
  useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}
