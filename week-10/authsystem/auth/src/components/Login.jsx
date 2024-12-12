import { useState } from "react";
import "../App.css";
const Login = ({ handleLogin }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = () => {
    if (inputValue.trim()) {
      handleLogin(inputValue); // Call handleLogin only when the user submits
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
