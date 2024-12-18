import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
import { RecoilRoot } from "recoil";
const App = () => {
  return (
    <>
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </RecoilRoot>
    </>
  );
};

export default App;
