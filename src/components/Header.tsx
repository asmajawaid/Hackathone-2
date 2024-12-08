import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiSofa } from "react-icons/gi";

export default function Header() {
  return (
    <>
      <div className="bg-[#F0F2F3] flex flex-row justify-between items-center h-[84px] sm:gap-[250px] lg:gap-[300] 2xl:gap-[302px] max-w-[1920px] sm:px-[0px] lg:px-[300px] py-[20px]">
        <div className="flex flex-row items-center w-[166px] h-[40px] p-0 gap-2 my-0 mx-auto">
          <div className="w-[40px] h-[40px] text-[#029FAE]">
            <GiSofa className="w-[40px] h-[40px]" />
          </div>
          <h1 className="text-[#272343] w-[118px] h-[31px] font-medium text-[26px] leading-[31px]">
            Comforty
          </h1>
        </div>

        <div className="bg-white rounded-sm flex flex-row items-start w-[120px] h-[44px] p-0 gap-3 my-0 mx-auto border border-purple-600">
          {/* cart */}
          <div className="flex flex-row items-center w-[56px] h-[22px] p-0 gap-2">
            <div className="text-[#272343] w-[22px] h-[22px] mt-[2.98px] ml-[2.52px]">
              <FiShoppingCart className="w-[22px] h-[22px] mt-[7px] ml-[2.52px]" />
            </div>
            <div className="text-[#272343] w-[26px] h-[13px] font-medium text-[19px] leading-[13px] items-center mt-[16px] ml-[3px]">
              Cart
            </div>  
            </div>
           {/* NO */}
            <div className=" w-[20px] h-[20px] rounded-full bg-[#007580] text-white ml-[7px]">2
              <div className="text-black">
                {/* <div className=" w-[6px] h-[10px] ml-[20px] mt-[17px] font-medium text-[10px] leading-[10px] items-center text-white">
                  2
                </div> */}
              </div>
            </div>
        
        </div>
      </div>
    </>
  );
}
