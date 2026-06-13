import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
    return (
        <section className='flex flex-col sm:flex-row border border-gray-400'>
            <div className="py-10 sm:py-0 sm:w-1/2 flex flex-col items-center justify-center lg:text-5xl w-full">
                <div>
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 font-bold h-[0.125rem] bg-[#414141]"></p>
                        <p className="uppercase font-medium text-sm md:text-base text-[#414141]">
                            our best sellers
                        </p>
                    </div>

                    <h1 className="text-3xl leading-relaxed prata-regular text-[#414141] font-normal lg:text-5xl">
                        Latest Arrivals
                    </h1>

                    <div className="flex items-center gap-2">
                        <p className="uppercase font-semibold text-[#414141] text-sm md:text-base">
                            Shop now
                        </p>
                        <p className="w-8 md:w-11 font-bold h-[0.063rem] bg-[#414141]"></p>
                    </div>
                </div>
            </div>

            <img src={assets.hero_img} className="sm:w-1/2" alt="hero-img" />
        </section>
    );
};

export default Hero;