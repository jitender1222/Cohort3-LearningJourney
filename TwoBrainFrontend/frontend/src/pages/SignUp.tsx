import { NavLink } from "react-router-dom";
import { Button } from "../Components/Button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signup() {
  const userNameRef = useRef<HTMLInputElement>();
  const userEmailRef = useRef<HTMLInputElement>();
  const userPasswordRef = useRef<HTMLInputElement>();

  const handleClick = async () => {
    const firstName = userNameRef.current?.value;
    const email = userEmailRef.current?.value;
    const password = userPasswordRef.current?.value;
    await axios.post(BACKEND_URL + "/api/v1/user/signup", {
      firstName,
      email,
      password,
    });
    alert("You have signed up successfully");
  };
  return (
    <div className="flex flex-col justify-center h-screen bg-gray-200">
      <div className="text-center text-5xl mb-10 text-purple-600">
        Create Your Account
      </div>
      <div className="flex flex-col items-center gap-2">
        <input
          ref={userNameRef}
          placeholder="Enter Your Name"
          className="border p-2 "
        />
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
        <Button variant="primary" text="Submit" onClick={handleClick} />
        <span>
          Already SignUp ?{" "}
          <NavLink className="text-purple-600 hover:underline" to={"/signin"}>
            SignIn
          </NavLink>
        </span>
      </div>
    </div>
  );
}
