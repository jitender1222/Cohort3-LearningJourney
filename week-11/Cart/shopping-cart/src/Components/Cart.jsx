import { useRecoilState } from "recoil";
import { cartItems } from "./CartItems";
import { NavLink } from "react-router";

const Cart = () => {
  const [items, setItems] = useRecoilState(cartItems);

  const updateQuantity = (id, increment) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + increment } : item
      )
    );
  };

  const calculateTotal = () =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-4xl text-center mt-4">Shopping Cart</h2>
      {items.length > 0 ? (
        <div className="flex items-center p-5 mt-10 flex-wrap">
          {items.map((item) => (
            <div
              className="flex items-center justify-between p-10 shadow-xl w-[70%]"
              key={item.id}
            >
              <div className="flex items-center gap-5">
                <img
                  className="w-[100px]"
                  src={
                    item.image ||
                    "https://rankenjordan.org/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png"
                  }
                />
                <div>
                  <span>{item.name}</span>
                  <div className="p-2 flex gap-10">
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        updateQuantity(item.id, -1);
                      }}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="cursor-pointer"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-blue-600 hover:text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <span className="font-bold">Rs {item.price * item.quantity}</span>
            </div>
          ))}
          <div className="flex flex-col shadow-xl p-10 w-[30%] gap-3 fixed top-2px right-0">
            <span className="font-bold">Order Summary</span>
            <div className="flex justify-between">
              <span>Items({items.length})</span>
              <span>Rs {calculateTotal()}.00</span>
            </div>
            <button className="bg-yellow-400 p-2 rounded w-full hover:bg-yellow-500">
              Proceed to Buy
            </button>
          </div>
        </div>
      ) : (
        <span className="text-center flex flex-col">
          <h1 className="text-7xl text-gray-300 mt-20">
            No Product in the Cart
          </h1>
          <button className="mt-10">
            <NavLink
              className="p-3 bg-yellow-300 rounded font-semibold hover:bg-yellow-400"
              to={"/"}
            >
              Move To Wishlist
            </NavLink>
          </button>
        </span>
      )}
    </div>
  );
};

export default Cart;
