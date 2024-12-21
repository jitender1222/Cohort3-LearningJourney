import { atom } from "recoil";

export const cartItems = atom({
  key: "cartItems",
  default: [],
});

export const count = atom({
  key: "count",
  default: 0,
});

export const isCartItems = atom({
  key: "isCartItems",
  default: false,
});

export const quantity = atom({
  key: "quantity",
  default: 0,
});
