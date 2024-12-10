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
      <div className="flex flex-row justify-between items-center shadow-[0px_1px_0px_#E1E3E6] max-w-[1920px] h-[74px] gap-[478px] py-[14px] lg:px-[300px] lg:gap-[300] 2xl:gap-[302px]">
        {/* NAV ICONS */}
        <div className="w-[339px] h-[15px] gap-[32px] flex flex-row items-center p-0 my-0 mx-auto">
          <ul className="hidden md:flex list-none justify-between gap-[32px] ">
            <li >
              <Link href="/" className="text-[#636270] w-[40px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Home</Link>
            </li>
            <li>
              <Link href="/Shop" className="text-[#636270] w-[35px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Shop</Link>
            </li>
            <li>
              <Link href="/ProductPage" className="text-[#636270] w-[53px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Product</Link>
            </li>
            <li>
              <Link href="/Pages" className="text-[#636270] w-[42px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Pages</Link>
            </li>
            <li>
              <Link href="/aboutUs" className="text-[#636270] w-[41px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">About</Link>
            </li>
          </ul>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="ml-0" />
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
              <Link href="/ProductPage" className="text-[#636270] w-[53px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Product</Link>
            </li>
            <li>
              <Link href="/Pages" className="text-[#636270] w-[42px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">Pages</Link>
            </li>
            <li>
              <Link href="/About" className="text-[#636270] w-[41px] h-[15px] font-medium text-[14px] leading-[15.4px] hover:text-[#007580]">About</Link>
            </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
          {/* CONTACT NO */}
      <Link href="/contactUs">

        <div className="flex flex-row justify-between items-start w-[168px] h-[15px] gap-[8px] p-0 my-0 mx-auto">
          <p className="text-[#636270] w-[57px] h-[15px] font-normal text-[14px] leading-[15.4px]">Contact:</p>
          <p className="text-[#272343] w-[103px] h-[15px] font-medium text-[14px] leading-[15.4px]">(808) 555-0111</p>
         
        </div>
      </Link>
      </div>
    </>
  );
}
