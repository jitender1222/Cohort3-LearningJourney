import WishListItems from "./WishListItems";
import ProductCard from "./Product";
import { useRecoilValue } from "recoil";

const Wishlist = () => {
  const items = useRecoilValue(WishListItems);
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
