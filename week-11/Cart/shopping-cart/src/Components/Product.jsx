const ProductCard = ({ items }) => {
  console.log(items);
  return (
    <div className="flex flex-col justify-center items-center flex-wrap mt-5">
      <span className="w-[250px] h-[250px] border-2">
        {
          <img
            src={
              items.image
                ? items.image
                : "https://rankenjordan.org/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png"
            }
          />
        }
      </span>
      <span className=" w-[250px] border-2 text-center">{items.name}</span>
      <span>Rating-{items.rating}⭐️⭐️</span>
      <span>{items.price}Rs</span>

      <button className="bg-yellow-400 font-bold px-10 py-2 rounded hover:bg-yellow-500">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
