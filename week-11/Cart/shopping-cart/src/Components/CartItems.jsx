import { atom } from "recoil";

const cartItems = atom({
  key: "cartItems",
  default: [
    {
      id: 1,
      name: "Redragon K617 Fizz 60% Wired RGB Gaming Keyboard",
      price: 2290.0,
      image: "https://m.media-amazon.com/images/I/41EckzKo9lL._SS220_.jpg",
      rating: 4.5,
      quantity: 1,
      reviews: 5261,
      oldPrice: 2790.0,
    },
  ],
});

export default cartItems;
