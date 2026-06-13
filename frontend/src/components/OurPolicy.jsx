import React from "react";
import { assets } from "../assets/assets";


const OurPolicy = () => {
    return (
        <section className="flex flex-col py-8 justify-around gap-12 text-xs text-gray-700 text-center sm:text-sm md:text-base sm:flex-row sm:gap-2">
            <div>
                <img
                    className="m-auto mb-3 w-12"
                    src={assets.exchange_icon}
                    alt="return"
                />
                <p className="font-semibold mb-2">Easy Return & Exchange Policy</p>
                <p className="text-gray-400">
                    Easy Returns/exchanges within 10 days.
                </p>
            </div>

            <div>
                <img
                    className="m-auto mb-3 w-12"
                    src={assets.quality_icon}
                    alt="quality-icon"
                />
                <p className="font-semibold mb-2">Our Quality Policy</p>
                <p>Trendify ensures top-quality products.</p>
            </div>

            <div>
                <img
                    className="m-auto mb-3 w-12"
                    src={assets.support_img}
                    alt="earphone"
                />
                <p className="font-semibold mb-2">Best Customer Support</p>
                <p className="text-gray-400">We support via email, phone, or chat.</p>
            </div>
        </section>
    );
};

export default OurPolicy;