import { Link } from "react-router-dom";
import { shippingFee } from "./constants";
import { useAppContext } from "../context/AppContext";

import Title from "./Title";
import Button from "./Button";


const CartTotal = () => {

  const { subTotal, cartItems, products } = useAppContext();

  const originalSubTotal = cartItems.reduce((acc, item) => {
    const latestProduct = products.find(
      (product) => product._id === item._id || product._id === item.productId,
    );

    const price = Number(latestProduct?.price || item.price || 0);
    const quantity = Number(item.quantity) || 1;

    return acc + price * quantity;
  }, 0);

  const totalDiscount = originalSubTotal - subTotal;
  const totalAmount = cartItems.length > 0 ? subTotal + shippingFee : 0;

  // const { subTotal, cartItems } = useAppContext();

  // const totalAmount = cartItems.length > 0 ? subTotal + shippingFee : 0;

  return (
    <div className="my-10 flex justify-end">
      <div className="w-full sm:w-[450px]">
        <div className="text-2xl">
          <Title text1="CART" text2="TOTAL" />
        </div>

        <div className="flex flex-col gap-2 text-sm mt-2">

          <div className="flex justify-between text-lg font-medium ">
            <p>Original Total</p>
            <p className="text-gray-500 line-through">
              ₹{originalSubTotal.toFixed(2)}
            </p>
          </div>

          <hr className="border-gray-200" />

          {totalDiscount > 0 && (
            <>
              <div className="flex justify-between text-lg font-medium text-red-500">
                <p>Total Discount</p>
                <p>-₹{totalDiscount.toFixed(2)}</p>
              </div>

              <hr className="border-gray-200" />
            </>
          )}


          <div className="flex justify-between text-lg font-medium">
            <p>Sub Total</p>
            <p>₹{Number(subTotal).toFixed(2)}</p>
          </div>

          <hr className="border-gray-200" />

          <div className="flex justify-between text-lg font-medium">
            <p>Shipping Fee</p>
            <p>₹{cartItems.length > 0 ? shippingFee.toFixed(2) : "0.00"}</p>
          </div>

          <hr className="border-gray-200" />

          <div className="flex justify-between text-2xl font-semibold">
            <p>Total Amount</p>
            <p>₹{totalAmount.toFixed(2)}</p>
          </div>

          {cartItems.length > 0 && (
            <Link to="/checkout" className="w-full text-end">
              <Button
                type="primary"
                size="large"
                className="py-3 rounded-none px-8 text-sm my-8"
              >
                PROCEED TO CHECKOUT
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
