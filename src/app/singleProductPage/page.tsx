import FeatureProduct from "@/components/FeatureProduct";
import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function SingleProductPage() {
  return (
    <>
    <div className="flex flex-col md:flex-row gap-6">
      {/* image */}
      <div className="mt-6 md:mt-11 flex justify-center">
        <Image
          src="/images/card2.jpg"
          alt="Pink Chair"
          width={576}
          height={605}
          className="rounded-lg w-full max-w-sm md:w-auto"
        />
      </div>
      {/* text */}
      <div className="mt-6 md:mt-11 flex flex-col justify-evenly w-[541]">
        <h1 className="text-[#272343] text-2xl md:text-6xl font-semibold">
          Library Stool Chair
        </h1>
        <span className="bg-[#029FAE] text-white text-xs font-semibold uppercase rounded-full py-1 px-3 inline-block mt-0 max-w-fit">
          $20.00 USD
        </span>

        <p className="mt-20 text-sm md:text-base py-2 px-2 text-[#272343] opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
          adipiscing.
        </p>
        <button className="flex flex-row items-center justify-center text-white bg-[#029FAE] font-medium text-base md:text-xl rounded-sm py-2 px-4 gap-1 hover:bg-teal-900 transition duration-300 max-w-fit">
          <FiShoppingCart />
          <span>Add To Cart</span>
        </button>
      </div>
    </div>

    <div className="mt-16">
        <FeatureProduct/>
      </div>
    </>
  );
}
