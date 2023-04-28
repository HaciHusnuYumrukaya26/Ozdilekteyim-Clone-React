import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
const Cinetime = () => {
  return (
    <>
      {" "}
      <div className="flex  my-4">
        <div className="text-2xl me-3">Cinetime'da Bu Hafta</div>
        <div className="flex flex-row gap-2">
          <div className="border-2 ps-3 flex text-sm font-semibold border-[#fa8222] p-1 rounded-full px-2 text-[#fa8222]">
            Seçiniz <IoMdArrowDropdown className="ms-40 me-2 mt-[2px]" />{" "}
          </div>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap  items-center justify-center">
        <div className="relative ">
          <img
            src="https://www.ozdilek.com.tr/sinemaafis/2574.jpg"
            alt=""
            className="w-56"
          />
          <div className="w-56 h-20 -mt-20  absolute bg-[#000000a6]">
            <div className=" ms-3 max-w-[170px] text-white font-semibold   ">
              Süper Mario Kardeşler Filmi
            </div>
          </div>
        </div>
        <div className="relative ">
          <img
            src="https://www.ozdilek.com.tr/sinemaafis/2592.jpg"
            alt=""
            className="w-56"
          />
          <div className="w-56 h-20 -mt-20  absolute bg-[#000000a6]">
            <div className=" ms-3 max-w-[170px] text-white font-semibold   ">
              Oregon
            </div>
          </div>
        </div>
        <div className="relative ">
          <img
            src="https://www.ozdilek.com.tr/sinemaafis/2593.jpg"
            alt=""
            className="w-56"
          />
          <div className="w-56 h-20 -mt-20  absolute bg-[#000000a6]">
            <div className=" ms-3 max-w-[170px] text-white font-semibold   ">
              Elif ve Arkadaşları Kapadokya
            </div>
          </div>
        </div>
        <div className="relative ">
          <img
            src="https://www.ozdilek.com.tr/sinemaafis/2542.jpg"
            alt=""
            className="w-56"
          />
          <div className="w-56 h-20 -mt-20  absolute bg-[#000000a6]">
            <div className=" ms-3 max-w-[170px] text-white font-semibold   ">
              John Wick 4
            </div>
          </div>
        </div>
        <div className="relative ">
          <img
            src="https://www.ozdilek.com.tr/sinemaafis/2596.jpg"
            alt=""
            className="w-56"
          />
          <div className="w-56 h-20 -mt-20  absolute bg-[#000000a6]">
            <div className=" ms-3 max-w-[170px] text-white font-semibold   ">
              Karanlık Gece
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cinetime;
