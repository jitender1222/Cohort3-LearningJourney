import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Home from "./components/Home";
import Login from "./components/Login";
import { createContext } from "react";

export const AuthContext = createContext();

function App() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleLogin = (user) => {
    setUserName(user);
    setIsLoggedIn(true);
  };
  const loggedOut = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <AuthContext.Provider
          value={{ userName, isLoggedIn, handleLogin, loggedOut }}
        >
          <AppBar />
          <Home />
        </AuthContext.Provider>
      ) : (
        <>
          <AppBar
            userName={userName}
            isLoggedIn={isLoggedIn}
            isLoggedOut={loggedOut}
          />
          {isLoggedIn ? <Home /> : <Login handleLogin={handleLogin} />}
        </>
      )}
      <div className="toggle">
        <button onClick={handleToggle} className="btn">
          {toggle ? "State Lifting Up" : "Context Api"}
        </button>
      </div>
    </>
  );
}

export default App;
