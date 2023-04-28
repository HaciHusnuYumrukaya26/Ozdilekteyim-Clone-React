import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Opportunity = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-2xl ">Özdilekteyim Fırsatları</div>
        <div className="flex flex-row gap-2">
          <div className="border-2 flex text-sm font-semibold border-[#fa8222] p-1 rounded-full px-2 text-[#fa8222]">
            ÇEVRİMİÇİ MAĞAZA{" "}
            <BsBoxArrowUpRight className="ms-2 me-2 mt-[2px]" />{" "}
          </div>
          <div className="border-2 flex text-sm font-semibold border-[#fa8222] p-1 rounded-full px-2 text-[#fa8222]">
            ÇEVRİMİÇİ MARKET{" "}
            <BsBoxArrowUpRight className="ms-2 me-2 mt-[2px]" />{" "}
          </div>
        </div>
      </div>
      <div className="flex">
        <img
          className="mt-5 ms-1"
          src="https://www.ozdilek.com.tr/tr/images/firsatlar/175/kucuk.jpg?35161,46"
          alt=""
        />
        <div className="flex flex-wrap ms-1">
          <img
            className="mt-5 w-72 h-[320px]"
            src="https://www.ozdilek.com.tr/tr/images/firsatlar/179/kucuk.jpg?35161,48"
            alt=""
          />
          <img
            className="mt-5 w-72 h-[320px]"
            src="https://www.ozdilek.com.tr/tr/images/firsatlar/178/kucuk.jpg?35161,48"
            alt=""
          />
          <img
            className="mt-5 w-72 h-[320px]"
            src="https://www.ozdilek.com.tr/tr/images/firsatlar/177/kucuk.jpg?35161,48"
            alt=""
          />
          <img
            className="mt-5 w-72 h-[320px]"
            src="https://www.ozdilek.com.tr/tr/images/firsatlar/176/kucuk.jpg?35161,48"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Opportunity;
