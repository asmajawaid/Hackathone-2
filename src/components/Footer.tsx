import React from "react";
import { GiSofa } from "react-icons/gi";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaPinterest  } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      {/* main div */}
      <footer className="absolute min-w-[480px] sm:max-w-[767px] md:max-w-[1079px] lg:max-w-[1920px] h-[418px] mt-[4480px] ml-[-12px]">
        {/* top div */}
        {/* section 1 */}
        <div className="flex flex-col items-start p-0 gap-6 absolute w-[350px] h-[198px] mt-[80px] ml-[300px]">
          <div className="flex flex-row items-center p-0 gap-2 w-[168px] h-[40px]">
            <div className="w-[40px] h-[40px] text-[#029FAE]">
              <GiSofa className="w-[40px] h-[40px]" />
            </div>
            <h1 className="text-[#272343] w-[118px] h-[31px] font-medium text-[26px] leading-[31px]">
              Comforty
            </h1>
          </div>
          <div className="w-[350px] h-[72px] font-normal text-[16px] leading-6 text-[#272343] opacity-[60%]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus
          </div>

          <div>
            <ul className="flex flex-row items-start p-0 gap-2 w-[206px] h-[38px]">
              <li className="w-[38px] h-[38px] hover:text-[#007580] hover:rounded-full hover:border hover:border-[#007580]">
                <FaFacebook className="absolute w-[26px] h-[26px] opacity-[70%]  mt-[5px] ml-[5px]" />
              </li>

              <li className="w-[38px] h-[38px] hover:text-[#007580] hover:rounded-full hover:border hover:border-[#007580]">
                <FaTwitter className="absolute w-[26px] h-[26px] opacity-[70%]  mt-[5px] ml-[5px]" />
              </li>

              <li className="w-[38px] h-[38px] hover:text-[#007580] hover:rounded-full hover:border hover:border-[#007580]">
                <FaInstagram  className="absolute w-[26px] h-[26px] opacity-[70%]  mt-[5px] ml-[5px]" />
              </li>

              <li className="w-[38px] h-[38px] hover:text-[#007580] hover:rounded-full hover:border hover:border-[#007580]">
                <FaPinterest className="absolute w-[26px] h-[26px] opacity-[70%]  mt-[5px] ml-[3px]" />
              </li>

              <li className="w-[38px] h-[38px] hover:text-[#007580] hover:rounded-full hover:border hover:border-[#007580]">
                <FaYoutube className="absolute w-[26px] h-[26px] opacity-[70%]  mt-[5px] ml-[3px]" />
              </li>
             
            </ul>
          </div>
        </div>
        {/* section 2 categories */}
        <div className="flex flex-col items-start p-0 gap-5 absolute w-[105px] h-[203px] mt-[80px] ml-[747px]">
          <h6 className="footer-title w-[82px] h-[15px] font-medium text-[14px] leading-[15.4px] tracking-[0.06em] text-[#9A9CAA] uppercase">
            Category
          </h6>
          <ul className="w-[105px] h-[168px] gap-3 flex flex-col items-start p-0">
            <Link
              href="/"
              className="link link-hover hover:text-[#007580] hover:underline w-[35px] h-[18px] font-normal text-[16px] leading=[17.6px] text-[#272343] "
            >
              Sofa
            </Link>
            <Link
              href="/"
              className="link link-hover hover:text-[#007580] hover:underline w-[68px] h-[18px] font-normal text-[16px] leading=[17.6px] text-[#272343] "
            >
              Armchair
            </Link>
            <Link
              href="/"
              className="link link-hover hover:text-[#007580] hover:underline w-[83px] h-[18px] font-normal text-[16px] leading=[17.6px] text-[#272343] "
            >
              Wing Chair
            </Link>
            <Link
              href="/"
              className="link link-hover hover:text-[#007580] hover:underline w-[83px] h-[18px] font-normal text-[16px] leading=[17.6px] text-[#272343]"
            >
              Desk Chair
            </Link>
            <Link
              href="/"
              className="link link-hover hover:text-[#007580] hover:underline w-[105px] h-[18px] font-normal text-[16px] leading=[17.6px] text-[#272343] "
            >
              wooden Chair
            </Link>
            <Link
              href="/"
              className="link link-hover hover:text-[#007580] hover:underline w-[86px] h-[18px] font-normal text-[16px] leading=[17.6px] text-[#272343] "
            >
              Park Bench
            </Link>
          </ul>
        </div>
        {/* section 3 */}
        <div className="flex flex-col items-start p-0 gap-5 absolute w-[156px] h-[143px] mt-[80px] ml-[971.5px]">
          <h6 className="footer-title w-[72px] h-[15px] font-medium text-[14px] leading-[15.4px] tracking-[0.06em] text-[#9A9CAA] uppercase">
            Support
          </h6>
          <ul className="w-[156px] h-[108px] gap-3 flex flex-col items-start p-0">
            <Link
              href="/"
              className="link link-hover hover:text-[#007580] hover:underline w-[115px] h-[18px] font-normal text-[16px] leading=[17.6px] text-[#272343] "
            >
              Help & Support
            </Link>
            <Link
              href="/"
              className="link link-hover hover:text-[#007580] hover:underline w-[156px] h-[18px] font-normal text-[16px] leading=[17.6px] text-[#272343] "
            >
              Tearms & Conditions
            </Link>
            <Link
              href="/"
              className="link link-hover hover:text-[#007580] hover:underline w-[105px] h-[18px] font-normal text-[16px] leading=[17.6px] text-[#272343] "
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="link link-hover hover:text-[#007580] hover:underline w-[35px] h-[18px] font-normal text-[16px] leading=[17.6px] text-[#272343]"
            >
              Help
            </Link>
          </ul>
        </div>
        {/* section 4 News Letter*/}
        <form >
        <div className="absolute w-[424px] h-[142px] mt-[80px] ml-[1196px] rounded-[8px]">
          <h6 className="text-[#9A9CAA] w-[102px] h-[15px] footer-title font-medium text-[14px] leading-[15.4px] tracking-[0.06em] mt-[0px] uppercase">
            Newsletter
          </h6>
          <div className="flex flex-row">
          <fieldset className="w-[285px] h-[46px] mt-[15px] rounded-[8px] border hover:border-[#007580]">
            <div className="join w-[79px] h-[16px] mt-[11px] ml-[11px] text-[#E1E3E5] text-[16px] leading-[16px] font-normal">
              <input
                type="text"
                placeholder="Your email."
                className="input input-bordered join-item"
              />
          </div>
          </fieldset>
          <button className="bg-[#029FAE] text-white items-center w-[127px] h-[46px] mt-[15px] gap-5 ml-[8px] rounded-[8px] py-[14px] px-[24px] text-[16px] leading-[17.6px] mb-2">
            Subscribe
          </button>
          </div>
          <p className="w-[424px] h-[46px] opacity-60 text-[16px] leading-[22.5px] font-normal text-[#272343]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam tincidunt erat enim.</p>
          
           </div>
            </form>
        {/* Bottom div */}
        <div className=" absolute w-[1920px] h-[75px] mt-[343px] flex flex-row items-center gap-[752px] justify-between py-[24px] px-[300px] bg-white shadow-[inset_0px_1px_0px_#E1E3E6]">
          <div className="w-[341px] h-[21px] text-[14px] leading-[21px] font-normal mx-auto my-0 text-[#9A9CAA]">
            @ 2021 - Blogy - Designed & Develop by
            <span className="text-[14px] leading-[21px] font-normal text-black text-left">
              Zakirsoft
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
