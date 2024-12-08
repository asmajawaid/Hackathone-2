import Image from 'next/image'
import React from 'react'

export default function CompanyLogo() {
  return (
    <>
    <div className='absolute flex flex-row justify-between items-center w-[1321px] h-[139px] gap-[106px] ml-[300px] mt-[1107px] border border-dashed border-[#007580]'>
             
             <div className='w-[85px] h-[87px] mx-auto my-0'>
                <Image src="/images/logo1.png" width={100} height={100} alt=''/>
             </div>

             <div className='w-[85px] h-[87px] mx-auto my-0'>
                <Image src="/images/logo2.png" width={100} height={100} alt=''/>
             </div>

             <div className='w-[107px] h-[109px] mx-auto my-0'>
                <Image src="/images/logo3.png" width={100} height={100} alt=''/>
             </div>

             <div className='w-[135px] h-[139px] mx-auto my-0'>
                <Image src="/images/logo4.png" width={100} height={100} alt=''/>
             </div>

             <div className='w-[63px] h-[65px] mx-auto my-0'>
                <Image src="/images/logo5.png" width={100} height={100} alt=''/>
             </div>

             <div className='w-[98px] h-[101px] mx-auto my-0'>
                <Image src="/images/logo5.png" width={100} height={100} alt=''/>
             </div>

             <div className='w-[113px] h-[115px] mx-auto my-0'>
                <Image src="/images/logo6.png" width={100} height={100} alt='' />
             </div>

             <div className='w-[84px] h-[87px] mx-auto my-0'>
                <Image src="/images/logo7.png" width={300} height={300} alt='' className='w-[84px] h-[70px]'/>
             </div>
    </div>
    </>
  )
}
