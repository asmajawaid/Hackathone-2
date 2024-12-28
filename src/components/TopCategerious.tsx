import Image from 'next/image'
import React from 'react'

export default function TopCategerious() {
  return (
    <>
        <div className="relative w-full mt-16">
              {/* Header */}
              <div className="flex justify-start items-start w-full h-[44px] mb-8">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#272343]">
                  Top Categories
                </h2>
              </div>
      
              {/* Cards Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {/* Card Components */}
                {[
                  {
                    image: "/images/card9.jpg",
                    title: "Wing Chair",
                    products: "3,584 Products",
                  },
                  {
                    image: "/images/card5.jpg",
                    title: "Wooden Chair",
                    products: "157 Products",
                  },
                  {
                    image: "/images/card11.png",
                    title: "Wooden Chair",
                    products: "157 Products",
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="relative w-[250px] h-[300px] sm:w-[200px] sm:h-[350px]  lg:w-[300px] max-w-[424px] lg:gap-10 lg:h-[424px] rounded-[10px] overflow-hidden group cursor-pointer hover:shadow-2xl"
                  >
                    {/* Image */}
                    <Image
                      src={category.image}
                      width={424}
                      height={424}
                      alt={category.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
      
                    {/* Hover Overlay */}
                    <div className="absolute bottom-0 left-0 w-full bg-[#000000B2] p-4 flex flex-col gap-2 backdrop-grayscale rounded-b-[10px] translate-y-full group-hover:translate-y-0 transform transition-transform duration-300 ease-in-out hover:scale-105">
                      <h3 className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-medium">
                        {category.title}
                      </h3>
                      <p className="text-white opacity-70 text-[12px] sm:text-[14px] font-normal">
                        {category.products}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

        
    </>
  )
}
