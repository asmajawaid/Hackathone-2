import Image from 'next/image'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

export default function OurProduct() {
  return (
    <>
      <div className='absolute w-[1320px] h-[919px] ml-[307px] mt-[3425px] '>
         <div className='text-[#272343] text-[32px] leading-[35.2px] w-[205px] h-[35px] ml-[557px] mt-[16px]'>Our Products</div>

        {/* CARD 1*/}
        <div className="absolute w-[312px] h-[377px] mt-[125px] ml-[0px]">
          {/* IMAGE */}
          <div className="absolute w-[312px] h-[312px] mt-0 mx-0 mb-[17.24%] rounded-[6px]">
            <Image
              src="/images/card1.jpg"
              width={312}
              height={312}
              alt="stool chair"
              className="rounded-[6px]  w-[312px] h-[312px]"
            />
          </div>

          <div className="absolute flex flex-col items-start w-[256px] h-[51px] p-0 gap-[10px] ml-0 mb-0 mr-[17.95%] mt-[326px]">
            <div className="w-[256px] h-[21px] font-normal text-[16px] leading-[20.8px] text-[#007580]">
              Library Stool Chair
            </div>
            <div className="text-[#272343] w-[35px] h-[20px] gap-1 p-0 text-[18px] leading-[19.8px] flex flex-row items-center">
              $20
            </div>
          </div>
          <div className="absolute w-[44px] h-[44px] mt-[329.5px] ml-[268px] bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md hover:text-white">
            <FiShoppingCart className="w-[25px] h-[25px] mt-[9px] ml-[8px]" />
          </div>
          <div className="bg-[#01AD5A] absolute flex flex-row items-start w-[49px] h-[26px] gap-[10px] mt-[20px] ml-[20px] rounded-[4px] py-[6px] px-[10px]">
            <div className="-[29px] h-[14px] font-medium text-[13px] leading-[14.3px] text-white">
              New
            </div>
          </div>
        </div>

        {/* CARD 2*/}
        <div className="absolute w-[312px] h-[377px] mt-[125px] ml-[336px]">
          {/* IMAGE */}
          <div className="absolute w-[312px] h-[312px] mt-0 mx-0 mb-[17.24%] rounded-[6px]">
            <Image
              src="/images/card2.jpg"
              width={312}
              height={312}
              alt="stool chair"
              className="rounded-[6px]  w-[312px] h-[312px]"
            />
          </div>

          <div className="absolute flex flex-col items-start w-[256px] h-[51px] p-0 gap-[10px] ml-0 mb-0 mr-[17.95%] mt-[326px]">
            <div className="w-[256px] h-[21px] font-normal text-[16px] leading-[20.8px] text-[#007580]">
              Library Stool Chair
            </div>
            <div className="flex flex-row items-center p-0 gap-1 w-[66px] h-[20px]">
              <div className="text-[#272343] w-[35px] h-[20px] gap-1 p-0 text-[18px] leading-[19.8px] flex flex-row items-center">
                $20
              </div>
              <div className="w-[27px] h-[15px] font-normal text-[14px] leading-[15.4px] line-through text-[#9A9CAA]">
                $39
              </div>
            </div>
          </div>
          <div className="absolute w-[44px] h-[44px] mt-[329.5px] ml-[268px] bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md hover:text-white">
            <FiShoppingCart className="w-[25px] h-[25px] mt-[9px] ml-[8px]" />
          </div>

          <div className="bg-[#F5813F] absolute flex flex-row items-start w-[54px] h-[26px] gap-[4px] mt-[20px] ml-[20px] rounded-[4px] py-[6px] px-[10px]">
            <div className="-[29px] h-[14px] font-medium text-[13px] leading-[14.3px] text-white">
              Sales
            </div>
          </div>
        </div>

        {/* CARD 3*/}
        <div className="absolute w-[312px] h-[377px] mt-[125px] ml-[672px] ">
          {/* IMAGE */}
          <div className="absolute w-[312px] h-[312px] mt-0 mx-0 mb-[17.24%] rounded-[6px]">
            <Image
              src="/images/card3.jpg"
              width={312}
              height={312}
              alt="stool chair"
              className="rounded-[6px]  w-[312px] h-[312px]"
            />
          </div>

          <div className="absolute flex flex-col items-start w-[256px] h-[51px] p-0 gap-[10px] ml-0 mb-0 mr-[17.95%] mt-[326px]">
            <div className="w-[256px] h-[21px] font-normal text-[16px] leading-[20.8px] text-[#007580]">
              Library Stool Chair
            </div>
            <div className="text-[#272343] w-[35px] h-[20px] gap-1 p-0 text-[18px] leading-[19.8px] flex flex-row items-center">
              $20
            </div>
          </div>
          <div className="absolute w-[44px] h-[44px] mt-[329.5px] ml-[268px] bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md hover:text-white">
            <FiShoppingCart className="w-[25px] h-[25px] mt-[9px] ml-[8px]" />
          </div>
        </div>

        {/* CARD 4*/}
        <div className="absolute w-[312px] h-[377px] mt-[125px] ml-[1008px] ">
          {/* IMAGE */}
          <div className="absolute w-[312px] h-[312px] mt-0 mx-0 mb-[17.24%] rounded-[6px]">
            <Image
              src="/images/card10.jpg"
              width={312}
              height={312}
              alt="stool chair"
              className="rounded-[6px]  w-[312px] h-[312px]"
            />
          </div>

          <div className="absolute flex flex-col items-start w-[256px] h-[51px] p-0 gap-[10px] ml-0 mb-0 mr-[17.95%] mt-[326px]">
            <div className="w-[256px] h-[21px] font-normal text-[16px] leading-[20.8px] text-[#007580]">
              Library Stool Chair
            </div>
            <div className="text-[#272343] w-[35px] h-[20px] gap-1 p-0 text-[18px] leading-[19.8px] flex flex-row items-center">
              $20
            </div>
          </div>
          <div className="absolute w-[44px] h-[44px] mt-[329.5px] ml-[268px] bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md hover:text-white">
            <FiShoppingCart className="w-[25px] h-[25px] mt-[9px] ml-[8px]" />
          </div>
        </div>


        {/* 2nd ROW */}

          {/* CARD 1*/}
          <div className="absolute w-[312px] h-[377px] mt-[542px] ml-[0px]">
          {/* IMAGE */}
          <div className="absolute w-[312px] h-[312px] mt-0 mx-0 mb-[17.24%] rounded-[6px]">
            <Image
              src="/images/card9.jpg"
              width={312}
              height={312}
              alt="stool chair"
              className="rounded-[6px]  w-[312px] h-[312px]"
            />
          </div>

          <div className="absolute flex flex-col items-start w-[256px] h-[51px] p-0 gap-[10px] ml-0 mb-0 mr-[17.95%] mt-[326px]">
            <div className="w-[256px] h-[21px] font-normal text-[16px] leading-[20.8px] text-[#007580]">
              Library Stool Chair
            </div>
            <div className="text-[#272343] w-[35px] h-[20px] gap-1 p-0 text-[18px] leading-[19.8px] flex flex-row items-center">
              $20
            </div>
          </div>
          <div className="absolute w-[44px] h-[44px] mt-[329.5px] ml-[268px] bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md hover:text-white">
            <FiShoppingCart className="w-[25px] h-[25px] mt-[9px] ml-[8px]" />
          </div>
          <div className="bg-[#01AD5A] absolute flex flex-row items-start w-[49px] h-[26px] gap-[10px] mt-[20px] ml-[20px] rounded-[4px] py-[6px] px-[10px]">
            <div className="-[29px] h-[14px] font-medium text-[13px] leading-[14.3px] text-white">
              New
            </div>
          </div>
        </div>

        {/* CARD 2*/}
        <div className="absolute w-[312px] h-[377px] mt-[542px] ml-[336px]">
          {/* IMAGE */}
          <div className="absolute w-[312px] h-[312px] mt-0 mx-0 mb-[17.24%] rounded-[6px]">
            <Image
              src="/images/card6.jpg"
              width={312}
              height={312}
              alt="stool chair"
              className="rounded-[6px]  w-[312px] h-[312px]"
            />
          </div>

          <div className="absolute flex flex-col items-start w-[256px] h-[51px] p-0 gap-[10px] ml-0 mb-0 mr-[17.95%] mt-[326px]">
            <div className="w-[256px] h-[21px] font-normal text-[16px] leading-[20.8px] text-[#007580]">
              Library Stool Chair
            </div>
            <div className="flex flex-row items-center p-0 gap-1 w-[66px] h-[20px]">
              <div className="text-[#272343] w-[35px] h-[20px] gap-1 p-0 text-[18px] leading-[19.8px] flex flex-row items-center">
                $20
              </div>
              <div className="w-[27px] h-[15px] font-normal text-[14px] leading-[15.4px] line-through text-[#9A9CAA]">
                $39
              </div>
            </div>
          </div>
          <div className="absolute w-[44px] h-[44px] mt-[329.5px] ml-[268px] bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md hover:text-white">
            <FiShoppingCart className="w-[25px] h-[25px] mt-[9px] ml-[8px]" />
          </div>

          <div className="bg-[#F5813F] absolute flex flex-row items-start w-[54px] h-[26px] gap-[4px] mt-[20px] ml-[20px] rounded-[4px] py-[6px] px-[10px]">
            <div className="-[29px] h-[14px] font-medium text-[13px] leading-[14.3px] text-white">
              Sales
            </div>
          </div>
        </div>

        {/* CARD 3*/}
        <div className="absolute w-[312px] h-[377px] mt-[542px] ml-[672px] ">
          {/* IMAGE */}
          <div className="absolute w-[312px] h-[312px] mt-0 mx-0 mb-[17.24%] rounded-[6px]">
            <Image
              src="/images/card7.jpg"
              width={312}
              height={312}
              alt="stool chair"
              className="rounded-[6px]  w-[312px] h-[312px]"
            />
          </div>

          <div className="absolute flex flex-col items-start w-[256px] h-[51px] p-0 gap-[10px] ml-0 mb-0 mr-[17.95%] mt-[326px]">
            <div className="w-[256px] h-[21px] font-normal text-[16px] leading-[20.8px] text-[#007580]">
              Library Stool Chair
            </div>
            <div className="text-[#272343] w-[35px] h-[20px] gap-1 p-0 text-[18px] leading-[19.8px] flex flex-row items-center">
              $20
            </div>
          </div>
          <div className="absolute w-[44px] h-[44px] mt-[329.5px] ml-[268px] bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md hover:text-white">
            <FiShoppingCart className="w-[25px] h-[25px] mt-[9px] ml-[8px]" />
          </div>
        </div>

        {/* CARD 4*/}
        <div className="absolute w-[312px] h-[377px] mt-[542px] ml-[1008px] ">
          {/* IMAGE */}
          <div className="absolute w-[312px] h-[312px] mt-0 mx-0 mb-[17.24%] rounded-[6px]">
            <Image
              src="/images/card1.jpg"
              width={312}
              height={312}
              alt="stool chair"
              className="rounded-[6px]  w-[312px] h-[312px]"
            />
          </div>

          <div className="absolute flex flex-col items-start w-[256px] h-[51px] p-0 gap-[10px] ml-0 mb-0 mr-[17.95%] mt-[326px]">
            <div className="w-[256px] h-[21px] font-normal text-[16px] leading-[20.8px] text-[#007580]">
              Library Stool Chair
            </div>
            <div className="text-[#272343] w-[35px] h-[20px] gap-1 p-0 text-[18px] leading-[19.8px] flex flex-row items-center">
              $20
            </div>
          </div>
          <div className="absolute w-[44px] h-[44px] mt-[329.5px] ml-[268px] bg-[#F0F2F3] hover:bg-[#029FAE] rounded-md hover:text-white">
            <FiShoppingCart className="w-[25px] h-[25px] mt-[9px] ml-[8px]" />
          </div>
        </div>

      </div>
    </>
  )
}
