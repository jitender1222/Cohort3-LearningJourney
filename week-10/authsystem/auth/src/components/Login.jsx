import { useContext, useState } from "react";
import "../App.css";
import { AuthContext } from "../App";
const Login = ({ handleLogin }) => {
  const [inputValue, setInputValue] = useState("");
  const authContext = useContext(AuthContext);

  const onSubmit = () => {
    const loginFunction = authContext ? authContext.handleLogin : handleLogin;
    if (inputValue.trim()) {
      loginFunction(inputValue); // Call handleLogin only when the user submits
    }
  };

  return (
    <div className="login">
      <div>
        <h2>Login</h2>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your username"
        />
        <button className="btn" onClick={onSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
