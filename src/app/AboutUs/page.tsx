
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-row ">
        {/* left sidde */}
        <div className=" bg-[#007580] text-white w-[672px] h-[478px] mt-[303px] ml-[300px] gap- ">
          <div className="flex flex-col items-start p-0 gap-3 mt-[64px] ml-[64px] ">
            <h1 className="w-[325px] h-[39px] text-[32px] leading-[38px] font-bold ">About Us - Comforty</h1>
            <p className="w-[495px] h-[110px] font-normal text-[18px] ">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
           <Link href="/" className="w-[179px] h-[56px] flex flex-row items-start gap-[10px] py-4 px-8 bg-[#029FAE] ml-[44px] mt-[108px]"><button className="w-[115px] h-[24px] ">View collection</button></Link>
        
        </div>
        {/* right side */}
        <div className="">
          <Image
            src="/images/card1.jpg"
            width={619}
            height={478}
            alt=""
            className="w-[619px] h-[478px] mt-[303px] ml-[100px] "
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-[#272343] w-[501px] h-[35px] mt-[250px] ml-[750px] gap-5 text-[32px] capitalize leading-[35.2px] font-semibold">What makes our Brand Different</h1>
        
        {/* bottom */}
      <div className="w-[1320px] h-[244px] mt-[166px] ml-[330px] bg-slate-300">

      </div>
    </>
  );
}
