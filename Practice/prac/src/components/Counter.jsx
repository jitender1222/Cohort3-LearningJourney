import { useRecoilValue } from "recoil";
import { ValueAtom } from "./Value";

const Counter = () => {
  const value = useRecoilValue(ValueAtom);
  return <div className="text-5xl m-10">{value}</div>;
};

export default Counter;
