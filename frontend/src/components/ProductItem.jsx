import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Heart } from "lucide-react";

const ProductItem = ({
  _id,
  images,
  image,
  image1,
  name,
  price,
  discount = 0,
  showWishlist = false,
  onWishlist,
  isWishlisted,
  showDetails = true,
}) => {
  // const { currency = "₹" } = useAppContext();
  const { currency } = useAppContext();


  const originalPrice = Number(price || 0);
  const discountValue = Number(discount || 0);

  const discountPrice = originalPrice - (originalPrice * discountValue) / 100;


  // const productImage = images?.[0] || image?.[0] || image || image1;
  const productImage =
    images?.[0] ||
    image?.[0] ||
    (typeof image === "string" ? image : null) ||
    image1 ||
    "/images/placeholder.png";

  return (
    <Link
      to={`/products/${_id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="relative block text-gray-700 cursor-pointer"
    >
      <div className="relative overflow-hidden ">
        {showWishlist && (
          <button
            type="button"
            onClick={onWishlist}
            className="absolute top-3 right-3 z-20 p-2 bg-white rounded-full shadow-md"
          >
            <Heart
              size={20}
              className={
                isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
              }
            />
          </button>
        )}

        {/* <div className="relative overflow-hidden bg-gray-100 flex items-center justify-center h-72"> */}
        <div className="relative overflow-hidden bg-gray-100 flex items-center justify-center h-60 sm:h-72 w-full">

          <img
            src={productImage}
            alt={name}
            className="max-h-full max-w-full object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* <img
          src={productImage}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        // className="w-full h-60 sm:h-80 object-cover hover:scale-110 transition duration-300"
        /> */}
      </div>

      {showDetails && (
        <>
          <p className="pt-3 pb-1 text-sm">{name}</p>

          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-black">
              {currency}
              {discountPrice.toFixed(2)}
            </span>

            {discountValue > 0 && (
              <>
                <span className="text-base text-gray-500 line-through">
                  {currency}
                  {originalPrice.toFixed(2)}
                </span>

                <span className="text-base font-bold text-red-500">
                  -{discountValue}%
                </span>
              </>
            )}
          </div>
        </>
      )}

      {/* <p className="pt-3 pb-1 text-sm">{name}</p>


      <div className="flex items-center gap-2">
        <span className="text-lg font-medium text-black">
          {currency}
          {discountPrice.toFixed(2)}
        </span>

        {discountValue > 0 && (
          <>
            <span className="text-base text-gray-400 line-through">
              {currency}
              {originalPrice.toFixed(2)}
            </span>

            <span className="text-base font-bold text-red-500">
              -{discountValue}%
            </span>
          </>
        )}
      </div> */}

      {/* <p className="text-sm font-medium">
        {currency}
        {Number(price || 0).toFixed(2)}
      </p> */}
    </Link>
  );
};

export default ProductItem;
