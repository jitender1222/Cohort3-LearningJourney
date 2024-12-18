import { useState } from "react";
import WishListItems from "./WishListItems";
import ProductCard from "./Product";

const Wishlist = () => {
  const [items, setItems] = useState(WishListItems);
  console.log(items);
  return (
    <div className="flex flex-wrap justify-center items-center h-[90vh] gap-10">
      {items.map((items, index) => (
        <div key={index}>
          <ProductCard items={items} />
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
