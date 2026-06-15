import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const OurPolicy = () => {
    return (
        <section className="flex flex-col justify-around gap-12 py-8 text-center text-xs text-gray-700 sm:flex-row sm:gap-6 sm:text-sm md:text-base">
            {/* Returns */}
            <div className="flex flex-col items-center">
                <img
                    className="mb-3 w-12"
                    src={assets.exchange_icon}
                    alt="return"
                />

                <p className="mb-2 font-semibold">
                    Easy Returns & Exchanges
                </p>

                <p className="text-gray-400">
                    Hassle-free returns and exchanges within 10 days of delivery.
                </p>

                <Link
                    to="/returns-refunds"
                    className="mt-2 text-sm text-black underline hover:text-gray-600"
                >
                    Learn More
                </Link>
            </div>

            {/* Quality */}
            <div className="flex flex-col items-center">
                <img
                    className="mb-3 w-12"
                    src={assets.quality_icon}
                    alt="quality-icon"
                />

                <p className="mb-2 font-semibold">
                    Premium Quality Guarantee
                </p>

                <p className="text-gray-400">
                    Every product is carefully selected to ensure exceptional quality.
                </p>

                <Link
                    to="/about"
                    className="mt-2 text-sm text-black underline hover:text-gray-600"
                >
                    About Our Quality
                </Link>
            </div>

            {/* Support */}
            <div className="flex flex-col items-center">
                <img
                    className="mb-3 w-12"
                    src={assets.support_img}
                    alt="customer-support"
                />

                <p className="mb-2 font-semibold">
                    24/7 Customer Support
                </p>

                <p className="text-gray-400">
                    Our support team is always available via email and phone.
                </p>

                <Link
                    to="/contact"
                    className="mt-2 text-sm text-black underline hover:text-gray-600"
                >
                    Contact Support
                </Link>
            </div>
        </section>
    );
};

export default OurPolicy;




// import React from "react";
// import { assets } from "../assets/assets";


// const OurPolicy = () => {
//     return (
//         <section className="flex flex-col py-8 justify-around gap-12 text-xs text-gray-700 text-center sm:text-sm md:text-base sm:flex-row sm:gap-2">
//             <div>
//                 <img
//                     className="m-auto mb-3 w-12"
//                     src={assets.exchange_icon}
//                     alt="return"
//                 />
//                 <p className="font-semibold mb-2">Easy Return & Exchange Policy</p>
//                 <p className="text-gray-400">
//                     Easy Returns/exchanges within 10 days.
//                 </p>
//             </div>

//             <div>
//                 <img
//                     className="m-auto mb-3 w-12"
//                     src={assets.quality_icon}
//                     alt="quality-icon"
//                 />
//                 <p className="font-semibold mb-2">Our Quality Policy</p>
//                 <p>Trendify ensures top-quality products.</p>
//             </div>

//             <div>
//                 <img
//                     className="m-auto mb-3 w-12"
//                     src={assets.support_img}
//                     alt="earphone"
//                 />
//                 <p className="font-semibold mb-2">Best Customer Support</p>
//                 <p className="text-gray-400">We support via email, phone, or chat.</p>
//             </div>
//         </section>
//     );
// };

// export default OurPolicy;