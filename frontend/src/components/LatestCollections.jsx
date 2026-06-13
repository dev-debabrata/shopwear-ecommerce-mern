import { useEffect, useState } from "react";
import Title from "./Title";

import { useAppContext } from "../context/AppContext";
import Loading from "./Loading";
import ProductItem from "./ProductItem";

const LatestCollections = () => {
    const { products, loading } = useAppContext();
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <section className="my-10">
            <div className="py-8 text-center text-3xl">
                <Title text1="LATEST" text2="COLLECTIONS" />

                <p className="w-3/4 mx-auto mt-2 text-xs text-gray-600 sm:text-sm md:text-base">
                    ShopWear offers the latest trendy and high-quality fashion
                    collections, keeping you stylish for every occasion.
                </p>
            </div>


            {loading ? (
                <div className="flex-1">
                    <Loading text="Loading product..." />
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {latestProducts.map((product) => (
                        <ProductItem key={product._id} {...product} />
                        // <ProductItem
                        //     key={product._id}
                        //     _id={product._id}
                        //     image={product.image}
                        //     name={product.name}
                        //     price={product.price}
                        // />
                    ))}
                </div>
            )}


        </section>
    );
};

export default LatestCollections;