import Image from 'next/image'
import React from 'react'

export default function TopCategerious() {
  return (
    <>
      <div className='absolute w-[2216px] h-[508px] mt-[1867px] ml-[-148px]'>
      <div className='absolute w-[1920px] h-[44px] ml-[148px] mt-0 flex flex-row justify-between items-center py-0 px-[300px] gap-[846px]'>
       <div className='w-[237px] h-[35px] text-[32px] leading-[35.2px] text-[#272343] font-semibold'>Top categories</div>
      </div>
      
      {/* CARDS 1*/}
      <div className='absolute w-[424px] h-[424px] mt-[84px] ml-[448px] rounded-[10px]'>
         <Image src="/images/card9.jpg" width={424} height={424} alt='wing chair' className='w-[424px] h-[424px]'/>
         <div className='flex flex-col items-start p-[20px] gap-2 absolute rounded-b-[10px] bg-[#000000B2] backdrop-grayscale'>
            <div className='w-[384px] h-[24px] text-[20px] leading-[22px] text-white'>Wing Chair</div>
            <div className='w-[376px] h-[15px] text-[14px] leading-[15.4px] text-[#ffffff] opacity-70 font-normal'>3,584 Products</div>

         </div>
      </div>

      {/* CARDS 2*/}
      <div className='absolute w-[424px] h-[424px] mt-[84px] ml-[896px] rounded-[10px]'>
         <Image src="/images/card5.jpg" width={424} height={424} alt='wing chair' className='w-[424px] h-[424px]'/>
         <div className='flex flex-col items-start p-[20px] gap-2 absolute rounded-b-[10px] bg-[#000000B2] backdrop-grayscale'>
            <div className='w-[384px] h-[24px] text-[20px] leading-[22px] text-white'>Wooden Chair</div>
            <div className='w-[376px] h-[15px] text-[14px] leading-[15.4px] text-[#ffffff] opacity-70 font-normal'>157 Products</div>

         </div>
      </div>

       {/* CARDS 3*/}
      <div className='absolute w-[424px] h-[424px] mt-[84px] ml-[1344px] rounded-[10px]'>
         <Image src="/images/card11.png" width={424} height={424} alt='wing chair' className='w-[424px] h-[424px]'/>
         <div className='flex flex-col items-start p-[20px] gap-2 absolute rounded-b-[10px] bg-[#000000B2] backdrop-grayscale cursor-pointer'>
            <div className='w-[384px] h-[24px] text-[20px] leading-[22px] text-white'>Wooden Chair</div>
            <div className='w-[376px] h-[15px] text-[14px] leading-[15.4px] text-[#ffffff] opacity-70 font-normal'>157 Products</div>

         </div>
      </div>
      </div>

        
    </>
  )
}
