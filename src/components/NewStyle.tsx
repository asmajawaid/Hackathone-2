import Image from "next/image";
import React from "react";

export default function NewStyle() {
  return (
    <>
      <div className="relative w-full py-16">
        {/* text rotate */}
        <div className="absolute transform -rotate-90 text-[20px] sm:text-[20px] md:text-[] lg:text-[28px] font-normal leading-[1.2] left-[-200px] top-[50%] -translate-y-1/2">
          Explore new and popular styles
        </div>

       <div className="flex flex-wrap px-4 sm:px-8 md:px-44 -mx-2 mt-12">
             {/* Main Image Section */}
             <div className="w-full md:w-1/2 p-2 flex flex-row justify-center items-center">
               <div className="w-full h-full relative hover:shadow-2xl cursor-pointer">
                 <Image
                   src="/images/card3.jpg"
                   alt="Main Image"
                   layout="responsive"
                   width={400}
                   height={560}
                   className="object-cover shadow-lg rounded-lg"
                 />
               </div>
             </div>
       
             {/* Grid of Smaller Images */}
             <div className="w-full md:w-1/2 p-2 grid grid-cols-2 gap-2">
               {/* Image 1 */}
               <div className="relative hover:shadow-2xl cursor-pointer">
                 <Image
                   src="/images/card10.jpg"
                   alt="Image 1"
                   layout="responsive"
                   width={200}
                   height={280}
                   className="rounded-lg object-cover shadow-lg"
                 />
               </div>
       
               {/* Image 2 */}
               <div className="relative hover:shadow-2xl cursor-pointer">
                 <Image
                   src="/images/card1.jpg"
                   alt="Image 2"
                   layout="responsive"
                   width={200}
                   height={280}
                   className="rounded-lg object-cover shadow-lg"
                 />
               </div>
       
               {/* Image 3 */}
               <div className="relative hover:shadow-2xl cursor-pointer">
                 <Image
                   src="/images/card1.jpg"
                   alt="Image 3"
                   layout="responsive"
                   width={200}
                   height={280}
                   className="rounded-lg object-cover shadow-lg"
                 />
               </div>
       
               {/* Image 4 */}
               <div className="relative hover:shadow-2xl cursor-pointer ">
                 <Image
                   src="/images/card6.jpg"
                   alt="Image 4"
                   layout="responsive"
                   width={200}
                   height={280}
                   className="rounded-lg object-cover shadow-lg"
                 />
               </div>
             </div>
           </div>

      </div>
    </>
  );
}
