import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ForYouShopping = () => {
  return (
    <div className="container max-w-[1440px] px-10 mb-3">
      <div className="text-4xl text-gray-600 mt-5 mb-3 font-bold ps-12">
        Sizin İçin Seçtiklerimiz
      </div>
      <div className=" relative flex gap-3 flex-wrap justify-center">
        <div className="border w-48 flex flex-col justify-center">
          <img
            className="w-44 h-44 object-cover"
            src="https://img-ozdilekteyim.mncdn.com/rest/v2/medias2/container/zoom/pmc_10005608_2001152.jpeg"
            alt=""
          />
          <div className="flex gap-1 text-gray-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>Muz Yerli Kg.</div>
          <div className="mt-5 mb-1 relative">
            <b className=" font-extrabold">27,</b>
            <span className="absolute text-sm text-gray-500 -mt-1 -ms-[1px]">
              65
            </span>{" "}
            <span className="ms-3">TL</span>
          </div>
        </div>
        <div className="border w-48 flex flex-col justify-center">
          <img
            className="w-44 h-44 object-cover"
            src="https://img-ozdilekteyim.mncdn.com/rest/v2/medias2/container/zoom/pmc_10005951_2706374.jpeg"
            alt=""
          />
          <div className="flex gap-1 text-gray-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>Maydonoz Adet</div>
          <div className="mt-5 mb-1 relative">
            <b className=" font-extrabold">4,</b>
            <span className="absolute text-sm text-gray-500 -mt-1 -ms-[1px]">
              99
            </span>{" "}
            <span className="ms-3">TL</span>
          </div>
        </div>
        <div className="border w-48 flex flex-col justify-center">
          <img
            className="w-44 h-44 object-cover"
            src="https://img-ozdilekteyim.mncdn.com/rest/v2/medias2/container/zoom/pmc_10005894_2001282.jpeg"
            alt=""
          />
          <div className="flex gap-1 text-gray-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>Salatalık Badem Kg.</div>
          <div className="mt-5 mb-1 relative">
            <b className=" font-extrabold">122,</b>
            <span className="absolute text-sm text-gray-500 -mt-1 -ms-[1px]">
              75
            </span>{" "}
            <span className="ms-3">TL</span>
          </div>
        </div>
        <div className="border w-48 flex flex-col justify-center">
          <img
            className="w-44 h-44 object-cover"
            src="https://img-ozdilekteyim.mncdn.com/rest/v2/medias2/container/zoom/pmc_10005608_2001152.jpeg"
            alt=""
          />
          <div className="flex gap-1 text-gray-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>Muz Yerli Kg.</div>
          <div className="mt-5 mb-1 relative">
            <b className=" font-extrabold">27,</b>
            <span className="absolute text-sm text-gray-500 -mt-1 -ms-[1px]">
              65
            </span>{" "}
            <span className="ms-3">TL</span>
          </div>
        </div>
        <div className="border w-48 flex flex-col justify-center">
          <img
            className="w-44 h-44 object-cover"
            src="https://img-ozdilekteyim.mncdn.com/rest/v2/medias2/container/zoom/pmc_10005951_2706374.jpeg"
            alt=""
          />
          <div className="flex gap-1 text-gray-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>Maydonoz Adet</div>
          <div className="mt-5 mb-1 relative">
            <b className=" font-extrabold">4,</b>
            <span className="absolute text-sm text-gray-500 -mt-1 -ms-[1px]">
              99
            </span>{" "}
            <span className="ms-3">TL</span>
          </div>
        </div>
        <div className="border w-48 flex flex-col justify-center">
          <img
            className="w-44 h-44 object-cover"
            src="https://img-ozdilekteyim.mncdn.com/rest/v2/medias2/container/zoom/pmc_10005894_2001282.jpeg"
            alt=""
          />
          <div className="flex gap-1 text-gray-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>Salatalık Badem Kg.</div>
          <div className="mt-5 mb-1 relative">
            <b className=" font-extrabold">122,</b>
            <span className="absolute text-sm text-gray-500 -mt-1 -ms-[1px]">
              75
            </span>{" "}
            <span className="ms-3">TL</span>
          </div>
        </div>
        <div className="absolute left-0 top-[44%]  text-gray-500 hover:text-[#fa8222] p-[5px]">
          <IoIosArrowBack size={30} />
        </div>
        <div className="absolute right-0 top-[44%] font-extrabold  text-gray-500 hover:text-[#fa8222] p-[5px]">
          <IoIosArrowForward size={30} />
        </div>
      </div>

      {""}
    </div>
  );
};

export default ForYouShopping;
