// // src/context/AuthContext.js
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (user) => {
    setUserName(user);
    setIsLoggedIn(true);
  };

  const loggedOut = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ userName, isLoggedIn, handleLogin, loggedOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
