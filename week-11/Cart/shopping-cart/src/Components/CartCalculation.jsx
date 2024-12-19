import { atom } from "recoil";

const calculation = atom({
  key: "cartCalculation",
  default: "2200",
});

export default calculation;
