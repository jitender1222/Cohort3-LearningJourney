import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";

function App() {
  return (
    <div className="h-[100vh] bg-black">
      <Routes>
        <Route path="*" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sendMoney" element={<SendMoney />} />
      </Routes>
    </div>
  );
}

export default App;
