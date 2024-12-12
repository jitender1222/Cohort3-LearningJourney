import "../App.css";

const AppBar = ({ userName, isLoggedIn, isLoggedOut }) => {
  function onHandle() {
    isLoggedOut();
  }
  return (
    <>
      <div className="header">
        <span>Auth System Demo</span>
        <span>Welcome, {userName ? userName : "User"}</span>
        <button onClick={onHandle} className="btn">
          {isLoggedIn ? "LogOut" : "Login"}
        </button>
      </div>
    </>
  );
};

export default AppBar;
