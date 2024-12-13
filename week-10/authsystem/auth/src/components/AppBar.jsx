import { useContext } from "react";
import "../App.css";
import { AuthContext } from "../App";

const AppBar = ({ userName, isLoggedIn, isLoggedOut }) => {
  const authContext = useContext(AuthContext);
  const username = authContext ? authContext.userName : userName;
  const loggedIn = authContext ? authContext.isLoggedIn : isLoggedIn;
  const loggedOut = authContext ? authContext.loggedOut : isLoggedOut;
  // function onHandle() {
  //   if (authContext) {
  //     loggedOut();
  //   } else {
  //     isLoggedOut();
  //   }
  // }
  console.log("Context API:", authContext);
  console.log("Props:", { userName, isLoggedIn });

  return (
    <>
      <div className="header">
        <span>Auth System Demo</span>
        <span>Welcome, {loggedIn ? username : "Guest"}</span>
        <button onClick={loggedOut} className="btn">
          {loggedOut ? "LogOut" : "Login"}
        </button>
      </div>
    </>
  );
};

export default AppBar;
