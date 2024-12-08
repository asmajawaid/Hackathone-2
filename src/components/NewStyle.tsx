import Image from "next/image";
import React from "react";

export default function NewStyle() {
  return (
    <>
      <div className="absolute flex flex-row w-[648px] h-[52px] mt-[648px] ml-[-52px] text-black -rotate-90 items-center font-normal text-[34px] leading-[39.84px]">
        Explore new and popular styles
      </div>

      <div className="absolute w-[1320px] h-[648px] mt-[2604px] ml-[323px]">
        {/* MAIN DIV IMAGE */}
        <div className="absolute w-[648px] h-[648px] mt-0 ml-0">
          <Image
            src="/images/card3.jpg"
            width={648}
            height={648}
            alt=""
            className="w-[648px] h-[648px]"
          />
        </div>
         
        {/* 2MAIN DIV IMAGE */}

        <div className="flex ">
          <div>
            <Image
              src="/images/card10.jpg"
              width={312}
              height={312}
              alt=""
              className="absolute w-[312px] h-[312px] ml-[672px]"
            />
            <Image
              src="/images/card1.jpg"
              width={312}
              height={312}
              alt=""
              className="absolute w-[312px] h-[312px] ml-[1008px]"
            />
          </div>

          <div className="">
            <Image
              src="/images/card6.jpg"
              width={312}
              height={312}
              alt=""
              className="absolute w-[312px] h-[312px] mx-[0px] mt-[336px] ml-[672px]"
            />
            <Image
              src="/images/card1.jpg"
              width={312}
              height={312}
              alt=""
              className="absolute w-[312px] h-[312px] mx-[0px] mt-[336px] ml-[1008px]"
            />
          </div>
        </div>

        {/* <div className='w-[648px] h-[648px] ml-0 mt-0'>
            <div className='absolute w-[648px] h-[312px] ml-[1008px] flex flex-row mt-0'>
                <Image src="/images/card10.jpg"  width={312} height={312} alt='' className='w-[312px] h-[312px] ml-[672px]'/>
                <Image src="/images/card1.jpg"  width={312} height={312} alt='' className='w-[312px] h-[312px] ml-[1008px]'/>

            </div>
        </div> */}
      </div>
    </>
  );
}
