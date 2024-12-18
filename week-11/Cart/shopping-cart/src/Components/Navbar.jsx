import { NavLink } from "react-router";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 items-center bg-blue-950 text-white">
      <NavLink to={"/"}>
        <div>
          <img
            className="w-[90px] h-[40px] cursor-pointer rounded"
            src="https://www.blog.thebrandshopbw.com/wp-content/uploads/2022/01/Amazon-Logo-1.jpg"
            alt=""
          />
        </div>
      </NavLink>
      <div className="cursor-pointer flex gap-2 items-center ">
        <span>
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
        <NavLink className={"hover:underline"} to={"/cart"}>
          Cart
        </NavLink>
        <NavLink className={"hover:underline"} to={"/"}>
          WishList
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
