import { useSetRecoilState } from "recoil";
import { ValueAtom } from "./Value";

const EvenOdd = () => {
  const setCount = useSetRecoilState(ValueAtom);

  const handleIncrease = () => {
    setCount((c) => c + 2);
  };

  const handleDecrease = () => {
    setCount((c) => c - 1);
  };

  return (
    <>
      <button onClick={handleIncrease} className="bg-red-400 p-4 rounded-xl">
        Increase
      </button>
      <button
        onClick={handleDecrease}
        className="bg-red-400 p-4 ml-2 rounded-xl"
      >
        Decrease
      </button>
    </>
  );
};

export default EvenOdd;
