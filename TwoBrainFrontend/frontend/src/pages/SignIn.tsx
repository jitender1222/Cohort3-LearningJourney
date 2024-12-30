import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../Components/Button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function SignIn() {
  const userEmailRef = useRef<HTMLInputElement>();
  const userPasswordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function onHandleSubmit() {
    const email = userEmailRef.current?.value;
    const password = userPasswordRef.current?.value;
    const response = await axios.post(BACKEND_URL + "/api/v1/user/signin", {
      email,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }
  return (
    <div className="flex flex-col justify-center h-screen bg-gray-200">
      <div className="text-center text-5xl mb-10 text-purple-600">
        Login in your account
      </div>
      <div className="flex flex-col items-center gap-2">
        <input
          ref={userEmailRef}
          placeholder="Enter Your Email"
          className="border p-2"
        />
        <input
          ref={userPasswordRef}
          placeholder="Enter Your Password"
          className="border p-2"
        />
        <Button onClick={onHandleSubmit} variant="primary" text="Submit" />
        <span>
          Don't Have an Account{" "}
          <NavLink className="text-purple-600 hover:underline" to={"/signup"}>
            Signup
          </NavLink>
        </span>
      </div>
    </div>
  );
}
