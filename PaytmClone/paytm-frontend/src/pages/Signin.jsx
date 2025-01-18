import { Link } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Signup = () => {
  const navigate = useNavigate();

  let emailRef = useRef(null);
  let passwordRef = useRef(null);

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user" + "/signin",
        {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }
      );
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("User SignIn Successfully", {
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
      } else {
        toast.error("Something went wrong", {
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
        return;
      }
      emailRef.current.value = "";
      passwordRef.current.value = "";
      navigate("/dashboard");
    } catch (error) {
      toast("Error in creating the user", {
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "dark",
      });
      console.log(error);
    }
  };
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="bg-white text-black py-20 px-10 rounded-md">
        <div className="text-center">
          <h1 className="text-4xl font-serif pb-4">Sign In</h1>
          <p className="font-serif text-lg pb-4 text-gray-500">
            Enter your credentials to enter your account
          </p>
        </div>
        <div className=" font-serif flex flex-col gap-3 text-lg mt-4">
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="enter your email..."
              className="border border-gray-400 rounded-md px-2 py-1 "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="enter your password..."
              className="border border-gray-400 rounded-md px-2 py-1 "
            />
          </div>
          <button
            onClick={onSubmit}
            className="bg-black text-white mt-4 text-center py-1 rounded-md"
          >
            Submit
          </button>
          <p className="text-center">
            Don't have an account ?{" "}
            <Link className="underline" to={"/signup"}>
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
