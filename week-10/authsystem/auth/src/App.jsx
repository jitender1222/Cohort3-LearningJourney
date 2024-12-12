import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
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
    <>
      <AppBar
        userName={userName}
        isLoggedIn={isLoggedIn}
        isLoggedOut={loggedOut}
      />
      {isLoggedIn ? <Home /> : <Login handleLogin={handleLogin} />}
    </>
  );
}

export default App;
