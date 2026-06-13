import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { cn } from "../utils/cn";
import { shippingFee } from "../components/constants";

import Container from "../layout/Container";
import Title from "../components/Title";
import Input from "../components/Input";
import PaymentMethods from "../components/PaymentMethods";
import { toast } from "react-toastify";
import { deliveryFields } from "../data/checkoutData";
import { useNavigate } from "react-router-dom";



const Checkout = () => {
  const { subTotal } = useAppContext();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    mobile: "",
  });


  const handlePlaceOrder = (e) => {
    e.preventDefault();

    toast.success("Order placed successfully");
    navigate("/orders");
  };

  // const handlePlaceOrder = (e) => {
  //   e.preventDefault();

  //   const emptyField = deliveryFields.find(
  //     (field) => field.isRequired && !formData[field.fieldName].trim()
  //   );

  //   if (emptyField) {
  //     toast.error(`${emptyField.placeholder} is required`);
  //     return;
  //   }

  //   toast.success("Order placed successfully");

  //   setTimeout(() => {
  //     navigate("/orders");
  //   }, 1000);
  // };




  return (
    <Container>
      <form onSubmit={handlePlaceOrder}
        className="border-t border-gray-200 
      flex flex-col justify-between sm:flex-row min-h-[80vh] pt-5 sm:pt-14 gap-4"
      >
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="my-3 text-xl sm:text-2xl">
            <Title text1="DELIVERY" text2="INFORMATION" />
          </div>
          <div className="flex gap-3 w-full flex-wrap">
            {deliveryFields.map((deliveryField) => (
              <Input
                key={deliveryField.fieldName}
                value={formData[deliveryField.fieldName]}
                size="medium"
                htmlType="text"
                required={deliveryField.isRequired}
                inputClassName="w-full px-4 border-gray-300 rounded mb-1"
                wrapperClassName={cn({
                  "w-full": deliveryField.isFullWidth,
                  "w-[calc(50%-0.375rem)]": !deliveryField.isFullWidth,
                })}
                placeholder={deliveryField.placeholder}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [deliveryField.fieldName]: e.target.value,
                  })
                }
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="min-w-70 mt-8">
            <div className="w-full">
              <div className="text-2xl">
                <Title text1="CART" text2="TOTAL" />
              </div>
              <div className="mt-2 flex flex-col text-sm gap-2">
                <div className="flex justify-between text-lg font-medium">
                  <p>Sub Total</p>
                  <p>$ {subTotal.toFixed(2)}</p>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-medium">
                  <p>Shipping Fee</p>
                  <p>$ {shippingFee.toFixed(2)}</p>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between text-2xl font-semibold">
                  <p>Total Amount</p>
                  <p>$ {(subTotal + shippingFee).toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div>
                {" "}
                <Title text1="PAYMENT" text2="Methods" />
              </div>

              <PaymentMethods />
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Checkout;
