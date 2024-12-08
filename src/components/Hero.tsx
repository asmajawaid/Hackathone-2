import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      <div className="absolute max-w-[1740px] h-[850px] ml-[0px] mt-[0px]">
        <div className="bg-[#F0F2F3]  w-[1321px] h-[850px] ml-[300px] mt-[204px] rounded-x-[48px] ">
          <div className="flex flex-col absolute w-[557px] h-[337px] ml-[70px] mt-[229px] rounded-[8px]">
            <div className="text-[#272343] tracking-[12%]  absolute w-[177px] h-[14px] ml-[70px] mt-[0px] font-normal text-[14px] leadinig-[14px]">
              Welcome to chairy
            </div>
            <div className="text-[#272343] tracking-widest absolute w-[557px] h-[198px] ml-[70px] mt-[20px] font-bold text-[50px] leadinig-[66px]">
              Best Furniture <br />
              Collection for your <br />
              interior.
            </div>

            <div className="bg-[#029FAE] flex flex-row justify-center item-center w-[171px] h-[52px] gap-[20px] ml-[70px] mt-[265px] rounded-[8px] py-[14px] px-[24px]">
                  <button className="flex flex-row text-white w-[79px] h-[18px] text-[16px] leading-[17.6px] items-center gap-1"
               >ShopNow 
                    <span><FaArrowRightLong className="text-white w-[24px] h-[24px]"/></span>
                  </button>
             
        
            </div>
          </div>

          {/* image */}
          <div className="absolute w-[434px] h-[584px] ml-[777px] mt-[115px]">
            <Image
              src="/images/BG.png"
              width={500}
              height={500}
              alt="chairy"
              className="w-[434px] h-[584px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
