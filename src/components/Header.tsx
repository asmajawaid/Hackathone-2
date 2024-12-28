import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiSofa } from "react-icons/gi";

export default function Header() {
  return (
    <>
      <div className="bg-[#F0F2F3] flex flex-row justify-between items-center h-[84px] py-[20px]">
        <div className="flex flex-row items-center w-[166px] h-[40px] p-0 gap-2 my-0 mx-auto">
          <div className="w-[40px] h-[40px] text-[#029FAE]">
            <GiSofa className="w-[40px] h-[40px]" />
          </div>
          <h1 className="text-[#272343] w-[118px] h-[31px] font-medium text-[26px] leading-[31px]">
            Comforty
          </h1>
        </div>

        {/* CART SECTION */}

        <div className="bg-white rounded-sm flex flex-row items-center w-[120px] h-[44px] p-2 gap-2 my-0 mx-auto border border-purple-600">
        <Link href="/cart" className="flex flex-row items-center gap-2">
          {/* Cart Icon */}
          <FiShoppingCart className="text-[#272343] w-5 h-5" />

          {/* Cart Text */}
          <span className="text-[#272343] font-medium text-[19px] leading-none">
            Cart
          </span>
        </Link>

        {/* Notification Badge */}
        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#007580] text-white text-xs font-medium">
          2
        </div>
      </div>


      </div>
    </>
  );
}
