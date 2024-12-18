import { atom } from "recoil";

const WishListItems = atom({
  key: "wishListItem",
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
    {
      id: 2,
      name: "USB-C Adapter",
      price: 289.0,
      image: "https://m.media-amazon.com/images/I/31cqa17L5VL._SS220_.jpg",
      rating: 4,
      reviews: 1000,
      oldPrice: 350.0,
      quantity: 1,
    },
    {
      id: 3,
      name: "Computer Monitor",
      price: 9990.0,
      image: "https://m.media-amazon.com/images/I/41T6tUGZYkL._SS220_.jpg",
      rating: 4.2,
      reviews: 2500,
      oldPrice: 12000.0,
      quantity: 1,
    },
    {
      id: 4,
      name: "Wall Art 1",
      price: 1500.0,
      image: "https://m.media-amazon.com/images/I/41wE694AKFL._SS220_.jpg",
      rating: 4.3,
      reviews: 800,
      oldPrice: 1800.0,
      quantity: 1,
    },
    {
      id: 5,
      name: "Wall Art 2",
      price: 2000.0,
      image: "https://m.media-amazon.com/images/I/51Oa7UssIbL._SS220_.jpg",
      rating: 4.6,
      reviews: 1200,
      oldPrice: 2200.0,
      quantity: 1,
    },
  ],
});

export default WishListItems;
