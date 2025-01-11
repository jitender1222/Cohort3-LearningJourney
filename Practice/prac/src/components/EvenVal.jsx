import { useRecoilValue } from "recoil";
import { IsEvenAtom, ValueAtom } from "./Value";

const EvenVal = () => {
  const even = useRecoilValue(IsEvenAtom);
  return <div>{even ? "Even" : "Odd"}</div>;
};

export default EvenVal;
