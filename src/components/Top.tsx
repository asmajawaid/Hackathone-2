import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleAlert } from "react-icons/ci";

export default function Top() {
  return (
    <>
    <div className='bg-[#272343] flex flex-col md:flex-row justify-between items-center h-[55px] md:h-[45px] md:gap-[150px] lg:gap-[300] 2xl:gap-[798px] max-w-[1920px] px-[300px] py-[14px]'>
        <div className='flex flex-row items-center p-0 gap-2 opacity-[0.7] my-0 mx-auto'>
          <div className='text-[#FFFFFF] '>
            <FaCheck className='w-4 h-4'/>
          </div>

          <div className='text-[#FFFFFF] w-[231px] h-[14px] font-normal text-[13px] leading-[14.3px]'>
          Free shipping on all orders over $50
          </div>
        </div>

        <div className='flex flex-row items-start p-0 gap-6 opacity-[0.7] my-0 mx-auto w-[202px] h-[17px]'>
            <div className='flex flex-row items-center p-0 gap-[6px] w-[37px] h-[17px]'>
                    <div className='text-[#FFFFFF] w-[24px] h-[17px] items-center font-normal text-[13px] leading-[16.9px]'>Eng</div>
                    <div className='text-[#FFFFFF] w-[16px] h-[13.5px] '><RiArrowDropDownLine /></div>
            </div>
            <div className='text-[#FFFFFF] w-[30px] h-[17px] font-normal text-[13px] leading-[16.9px] items-center'>Faqs</div>
             <div className='flex flex-row items-start p-0 w-[87px] h-[17px] gap-[6px]'>
                <div className='text-[#FFFFFF] w-4 h-4 opacity-70'><CiCircleAlert /></div>
                <div className='text-[#FFFFFF] w-[65px] h-[17px] font-normal text-[13px] leading-[16.9px] items-center'>Need Help</div>
             </div>
        </div>
    </div>
     
    </>
  )
}