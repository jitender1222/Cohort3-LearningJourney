import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
};

export default App;
