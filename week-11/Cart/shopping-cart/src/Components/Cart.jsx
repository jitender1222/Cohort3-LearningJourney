import { useRecoilValue } from "recoil";
import cartItems from "./CartItems";

const Cart = () => {
  const items = useRecoilValue(cartItems);
  console.log("inside Items", items);
  return (
    <>
      <div>
        <h2 className="text-4xl text-center mt-4">Shopping Cart</h2>
        {items.map((item) => (
          <div
            className="flex items-center justify-between p-10 shadow-xl"
            key={item.id}
          >
            <div className="flex items-center gap-5">
              <span>
                {
                  <img
                    className="w-[100px]"
                    src={
                      item.image
                        ? item.image
                        : "https://rankenjordan.org/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png"
                    }
                  />
                }
              </span>
              <div className="flex flex-col justify-center">
                <span>{item.name}</span>
                <span className="text-sm text-green-600">In Stock</span>
                <div className="p-2 flex gap-10">
                  <button className="font-bold">-</button>
                  <span className="font-bold">1</span>
                  <button className="font-bold">+</button>
                  <button className="text-blue-600 hover:text-red-500">
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <span className="font-bold">Rs {item.price}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
