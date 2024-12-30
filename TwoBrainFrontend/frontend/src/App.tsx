import { SignIn } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
import DashBoard from "./pages/dashboard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
