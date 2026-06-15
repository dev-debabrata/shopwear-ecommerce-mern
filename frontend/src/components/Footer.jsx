import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

import Container from "../layout/Container";
import Button from "./Button";

const Footer = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <Container>
      {(location.pathname === "/" ||
        location.pathname === "/about" ||
        location.pathname === "/contact") && (
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="text-2xl font-medium text-gray-800">
              Unlock 20% Off | Subscribe Today!
            </p>

            <p className="mt-3 text-gray-500">
              Don't miss out—unlock your savings now by subscribing below!
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex w-full sm:w-1/2 items-center my-6 border border-gray-200"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@gmail.com"
                required
                className="w-full px-4 py-4 outline-none"
              />

              <Button
                buttonType="submit"
                type="primary"
                size="small"
                className="uppercase px-8 py-4 text-xs whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        )}

      <div className="flex flex-col lg:flex-row justify-between gap-14 text-sm my-10 mt-32">
        {/* Logo & About */}
        <div className="lg:w-1/2">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img
              src="/shopwear.png"
              alt="ShopWear Logo"
              className="w-6 h-6 md:w-8 md:h-8 object-contain brightness-0"
            />

            <h1 className="text-lg md:text-[30px] font-semibold">
              ShopWear
            </h1>
          </Link>

          <p className="text-gray-600 leading-6">
            ShopWear brings you the latest fashion trends, premium-quality
            clothing, and a seamless online shopping experience. Discover
            new arrivals, exclusive deals, and stylish collections designed
            to help you look your best every day.
          </p>
        </div>

        {/* Company */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>

          <ul className="flex flex-col gap-2 text-gray-600">
            <Link to="/" className="hover:text-black transition">
              <li>Home</li>
            </Link>

            <Link to="/about" className="hover:text-black transition">
              <li>About Us</li>
            </Link>

            <Link to="/contact" className="hover:text-black transition">
              <li>Contact Us</li>
            </Link>

            <Link to="/careers" className="hover:text-black transition">
              <li>Careers</li>
            </Link>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <p className="text-xl font-medium mb-5">CUSTOMER SERVICE</p>

          <ul className="flex flex-col gap-2 text-gray-600">
            <Link to="/faq" className="hover:text-black transition">
              <li>FAQ</li>
            </Link>

            <Link to="/returns-refunds" className="hover:text-black transition">
              <li>Returns & Refunds</li>
            </Link>

            <Link to="/orders" className="hover:text-black transition">
              <li>Shipping Information</li>
            </Link>

            <Link to="/orders" className="hover:text-black transition">
              <li>Track Order</li>
            </Link>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>

          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9876-543-210</li>
            <li>contact.shopwear@info.com</li>
            <li>Kolkata, West Bengal, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <p className="py-5 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} ShopWear. All Rights Reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;


// import { Link, useLocation } from "react-router-dom";

// import Container from "../layout/Container";
// import Button from "./Button";

// const Footer = () => {
//   const location = useLocation();

//   return (
//     <Container>
//       {(location.pathname === "/" ||
//         location.pathname === "/about" ||
//         location.pathname === "/contact") && (
//           <div className="mt-10 flex flex-col items-center">
//             <p className="text-2xl text-gray-800 font-medium">
//               Unlock 20% Off | Subscribe Today!
//             </p>
//             <p className="text-gray-400 mt-3">
//               Don't miss out—unlock your savings now by subscribing below!
//             </p>
//             <form
//               action=""
//               className="flex items-center gap-3 w-full my-6 border-[0.063rem] border-gray-200 sm:w-1/2"
//             >
//               <input
//                 type="text"
//                 className="w-full pl-3 sm:flex-1 outline-none required:"
//                 placeholder="hello@gmail.com"
//               />
//               {/* <Input
//               size="large"
//               htmlType="text"
//               className="pl-3 sm:flex-1 outline-none required:"
//               placeholder="hello@gmail.com"
//             /> */}
//               <Button
//                 type="primary"
//                 size="small"
//                 className="uppercase px-10 py-4 text-xs"
//               >
//                 Subscribe
//               </Button>
//             </form>
//           </div>
//         )}
//       <div className="flex flex-col sm:flex-row text-sm my-10 mt-40 gap-14">
//         <div>
//           <Link to="/" className="flex items-center gap-2 mb-1">
//             <img
//               src="/shopwear.png"
//               alt="ShopWear Logo"
//               className=" w-6 h-6 md:w-8 md:h-8 object-contain brightness-0"
//             />

//             <h1 className="md:text-[30px] text-lg  font-semibold">
//               ShopWear
//             </h1>
//           </Link>
//           <p className="w-full md:w-2/3 text-gray-600">
//             Thank you for shopping with ShopWear! We're dedicated to bringing
//             you the latest trends and top-quality products. Follow us on social
//             media for updates on new arrivals, exclusive offers, and more. If
//             you have any questions or need assistance, our friendly customer
//             support team is here to help. Subscribe to our newsletter for
//             special discounts and be the first to know about our latest
//             promotions. Your style journey starts here—let's make it
//             unforgettable!
//           </p>
//         </div>
//         <div>
//           <p className="text-xl font-medium mb-5">COMPANY</p>
//           <ul className="flex flex-col text-gray-600 gap-1">
//             <Link to="/">
//               <li>Home</li>
//             </Link>
//             <Link to="/about">
//               {" "}
//               <li>About Us</li>
//             </Link>
//             <Link to="/delivery">
//               {" "}
//               <li>Delivery</li>
//             </Link>
//             <Link to="/privacy">
//               <li>Privacy & Policy</li>
//             </Link>
//           </ul>
//         </div>

//         <div>
//           <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
//           <ul className="flex flex-col text-gray-600 gap-1">
//             <li>+91 9876-543-210</li>
//             <li>contact.shopwear@info.com</li>
//           </ul>
//         </div>
//       </div>
//       <div className="border-t-[0.063rem] border-t-gray-200">
//         <p className="py-5 text-sm text-center">
//           © {new Date().getFullYear()} ShopWear. All Rights Reserved.
//         </p>
//         {/* <p className="py-5 text-sm text-center">
//           Copyright 2024 ShopWear. All rights reserved.
//         </p> */}
//       </div>
//     </Container>
//   );
// };

// export default Footer;
