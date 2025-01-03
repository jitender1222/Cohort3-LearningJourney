import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartItems, isCartItems } from "./CartItems";
import { useState } from "react";
import { NavLink } from "react-router";

const ProductCard = ({ items }) => {
  const [product, setProduct] = useRecoilState(cartItems);
  const [addCart, setAddCart] = useState(false);
  const setIsCartItem = useSetRecoilState(isCartItems);

  function onhandleClick(items) {
    const itemExists = product.find((prod) => prod.id === items.id);
    if (!itemExists) {
      setProduct([...product, { ...items, quantity: 1 }]);
      setAddCart(true);
      setIsCartItem(true);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center flex-wrap mt-5">
      <span className="w-[250px] h-[250px] border-2">
        {
          <img
            src={
              items.image
                ? items.image
                : "https://rankenjordan.org/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png"
            }
          />
        }
      </span>
      <span className=" w-[250px] border-2 text-center">{items.name}</span>
      <span>Rating-{items.rating}⭐️⭐️</span>
      <span>{items.price}Rs</span>

      <button
        className=" bg-yellow-400 font-bold px-10 py-2 rounded hover:bg-yellow-500"
        onClick={() => onhandleClick(items)}
      >
        {addCart ? (
          <button>
            <NavLink to={"/cart"}>Move to Cart</NavLink>
          </button>
        ) : (
          <button>Add to Cart</button>
        )}
      </button>
    </div>
  );
};

export default ProductCard;
