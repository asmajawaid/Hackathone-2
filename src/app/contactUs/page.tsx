import React from "react";
import { TiLocation } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { LuBadgeAlert } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

export default function ContactUs() {
  return (
    <>
      <div className=" w-[1440px] h-[1040px]">
        {/* HEADING */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="w-[375px] h-[54px] font-semibold text-[36px] leading-[54px] text-black mt-[70px]">
            Get In Touch With Us
          </h1>
          <p className="w-[644px] h-[48px] text-center">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        {/* SMALL DIV */}
        <div className=" flex sm:flex-col lg:flex-row">
          {/* CONTACT INFORMATION */}
          <div className="absolute w-[393px] h-[537px]  ml-[431px] mt-[192px] flex flex-col ">
          <div className="mb-6 text-base"><TiLocation  className="w-[27px] h-[27.5px]"/><h1 className=" font-medium text-2xl leading-9 ml-8 mt-0">Addresss</h1>
          <p className="ml-8">236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
          </div>
          <div className="mb-6"><FaPhone className="absolute w-[22px] h-[22px]" /><h1 className="font-medium text-2xl leading-9 ml-8 mt-0">Phone</h1>
          <p className="ml-8 text-base">Mobile: +(84) 546-6789 <br />
          Hotline: +(84) 456-6789</p>
          </div>
          <div><MdOutlineAccessTimeFilled className="absolute w-[23px] h-[23px]"/><h1 className="font-medium text-2xl leading-9 ml-8 mt-0">Working Time</h1>
          <p className="ml-8 text-base">Monday-Friday: 9:00 - 22:00 <br />
          Saturday-Sunday: 9:00 - 21:00</p>
          </div>
             </div>

          {/* FORM */}
          <div className="absolute mt-[124px] w-[635px] h-[923px] ml-[854px] ">
            <div className="lg:w-2/4 flex flex-col md:ml-auto w-full md:py-8 mt-20 md:mt-0">
            
            <div className="relative mb-4 flex flex-col">
                <label
                  htmlFor="email"
                  className="leading-6 text-base text-black font-medium mb-3 ml-5"
                >
                  Your name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-[528.75px] bg-white rounded-[10px] border border-[#636270] ml-5 focus:border-[#029FAE] focus:ring-2 focus:ring-[#007580] text-base outline-none text-[#9F9F9F] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4 flex flex-col">
                <label
                  htmlFor="email"
                  className="leading-6 text-base text-black font-medium mb-3 ml-5"
                >
                Email address 
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-[528.75px] bg-white rounded-[10px] border ml-5 border-[#636270] focus:border-[#029FAE] focus:ring-2 focus:ring-[#007580] text-base outline-none text-[#9F9F9F] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4 flex flex-col">
                <label
                  htmlFor="email"
                  className="leading-6 text-base text-black font-medium mb-3 ml-5"
                >
                  Subject
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-[528.75px] bg-white rounded-[10px] border ml-5 border-[#636270] focus:border-[#029FAE] focus:ring-2 focus:ring-[#007580] text-base outline-none text-[#9F9F9F] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4 flex flex-col">
                <label
                  htmlFor="message"
                  className="leading-6 text-base text-black font-medium mb-3 ml-5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-[528.75px] bg-white rounded-[10px] border ml-5 border-[#636270] focus:border-[#029FAE] focus:ring-2 focus:ring-[#007580] h-32 text-base outline-none text-[#9F9F9F] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <div className="">
              <button className="w-[237px] h-[55px] text-white text-base ml-5 font-normal leading-6 bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-[#007580] hover:border-[#029FAE] rounded-[5px] focus:border-[#029FAE]">
              Submit
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-400 w-[1320px] h-[270px] ml-[300px] mt-[0px] absolute flex flex-col items-center justify-between gap-[10px] py-[100px] ">
          <ul className="w-[1188px] h-[70px] flex sm:flex-col md:flex-col lg:flex-row items-center gap-[50px] justify-between">
            <li className="w-[337px] h-[70px] gap-[10px]">
            <HiOutlineTrophy className="w-[60px] h-[60px]"/>
              <div className="w-[267px] h-[70px] flex flex-col items-start p-0 gap-[2px]">
                <h6 className="w-[157px] h-[38px] text-[25px] font-semibold leading-[37.5px]">High Quality</h6>
                <p className="w-[267px] h-[30px] text-[20px] font-semibold leading-[30px]">crafted from top materials</p>
              </div>
            </li>

            <li className="w-[327px] h-[70px] gap-[10px]">
            <LuBadgeAlert  className="w-[60px] h-[60px]"/>
              <div className="w-[258px] h-[70px] flex flex-col items-start p-0 gap-[2px]">
                <h6 className="w-[258px] h-[38px] text-[25px] font-semibold leading-[37.5px]">Warranty Protection</h6>
                <p className="w-[126px] h-[30px] text-[20px] font-semibold leading-[30px]">Over 2 years</p>
              </div>
            </li> 
            
            <li className="w-[259px] h-[70px] gap-[10px]">
            <BiSupport  className="w-[60px] h-[60px]"/>
              <div className="w-[189px] h-[70px] flex flex-col items-start p-0 gap-[2px]">
                <h6 className="w-[177px] h-[38px] text-[25px] font-semibold leading-[37.5px]">24 / 7 Support</h6>
                <p className="w-[189px] h-[30px] text-[20px] font-semibold leading-[30px]">Dedicated support</p>
              </div>
            </li>

          </ul>
      </div>
    </>
  );
}
