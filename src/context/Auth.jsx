import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  let lokalToken = localStorage.getItem("token");
  const [token, setToken] = useState(JSON.parse(lokalToken));
  useEffect(() => {
    if (token) {
      return localStorage.setItem("token", JSON.stringify(token));
    }
    localStorage.removeItem("token");
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
