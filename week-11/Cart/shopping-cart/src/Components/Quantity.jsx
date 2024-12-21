import { useRecoilValue, useSetRecoilState } from "recoil";
import { quantity } from "./CartItems";

const Quantity = () => {
  const setCount = useSetRecoilState(quantity);
  const count = useRecoilValue(quantity);
  // const countValue = useRecoilValue(count);
  const increaseCount = () => {
    setCount((c) => c + 1);
  };
  const decreaseCount = () => {
    setCount((c) => c - 1);
  };
  return (
    <div className="p-2 flex gap-10">
      <button onClick={increaseCount}>+</button>
      <span>{count}</span>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};

export default Quantity;
