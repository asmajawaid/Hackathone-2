import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row justify-between items-center shadow-[0px_1px_0px_#E1E3E6] w-full h-[74px] py-[14px] lg:px-[100px] xl:px-[200px] 2xl:px-[380px] ">
        {/* NAV ICONS */}
        <div className="w-[339px] h-[15px] gap-[32px] flex flex-row items-center p-0 my-0 mx-auto ml-20">
          <ul className="hidden lg:flex list-none justify-between gap-[32px] ">
            <li >
              <Link href="/" className="text-[#636270] w-[40px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Home</Link>
            </li>
            <li>
              <Link href="/Shop" className="text-[#636270] w-[35px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Shop</Link>
            </li>
            <li>
              <Link href="/product" className="text-[#636270] w-[53px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Product</Link>
            </li>
            <li>
              <Link href="/singleProductPage" className="text-[#636270] w-[42px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Pages</Link>
            </li>
            <li>
              <Link href="/aboutUs" className="text-[#636270] w-[41px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">About</Link>
            </li>
          </ul>

          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Menu className="p-0 gap-2 my-0 ml-2 text-[#636270]" />
            </SheetTrigger>
            <SheetContent className="bg-[#F0F2F3] w-[300px] sm:w-[540px]">
              <ul className="flex flex-col gap-1 list-none justify-between p-0 my-0 mx-auto">
              <li >
              <Link href="/" className="text-[#636270] w-[40px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Home</Link>
            </li>
            <li>
              <Link href="/Shop" className="text-[#636270] w-[35px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Shop</Link>
            </li>
            <li>
              <Link href="/product" className="text-[#636270] w-[53px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Product</Link>
            </li>
            <li>
              <Link href="/singleProductPage" className="text-[#636270] w-[42px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Pages</Link>
            </li>
            <li>
              <Link href="/aboutUs" className="text-[#636270] w-[41px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">About</Link>
            </li>
              </ul>

              {/* <Link href="/contactUs" className="lg:hidden hover:text-[#007580]"> */}

        <div className="flex flex-row justify-between items-start w-[168px] h-[15px] gap-[8px] p-0  mx-auto ">
          <p className="text-[#636270] w-[57px] h-[15px] font-normal text-[14px] leading-[15.4px]">Contact:</p>
          <p className="text-[#272343] w-[103px] h-[15px] font-medium text-[14px] leading-[15.4px]">(808) 555-0111</p>
         
        </div>
      </Link>
            </SheetContent>
          </Sheet>
        </div>
          {/* CONTACT NO */}
      <Link href="/contactUs" className="hidden lg:flex hover:text-[#007580]">

        <div className="flex flex-row justify-between items-start w-[168px] h-[15px] gap-[8px] p-0 my-0 mx-auto ">
          <p className="text-[#636270] w-[57px] h-[15px] font-normal text-[14px] leading-[15.4px] ">Contact:</p>
          <p className="text-[#272343] w-[103px] h-[15px] font-medium text-[14px] leading-[15.4px]">(808) 555-0111</p>
         
        </div>
      </Link>
      </div>
    </>
  );
}
