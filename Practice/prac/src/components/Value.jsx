import { atom, selector } from "recoil";

export const ValueAtom = atom({
  key: "value",
  default: 0,
});

export const IsEvenAtom = selector({
  key: "isEven",
  get: ({ get }) => {
    const count = get(ValueAtom);
    const isEvenNum = count % 2 == 0;
    return isEvenNum;
  },
});
