// Libraries , css and static files
import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState({ isAuth: true, userId: "", username: "leon", supporter: true });

  return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>;
}
