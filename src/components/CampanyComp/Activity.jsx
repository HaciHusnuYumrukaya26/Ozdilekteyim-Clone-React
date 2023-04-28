import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
const Activity = () => {
  return <><div className="flex justify-between my-4">
  <div className="text-2xl ">Etkinlikler</div>
  <div className="flex flex-row gap-2">
    <div className="border-2 flex text-sm font-semibold border-[#fa8222] p-1 rounded-full px-2 text-[#fa8222]">
      TÜMÜ <BsBoxArrowUpRight className="ms-2 me-2 mt-[2px]" />{" "}
    </div>
  </div>
</div>

<div className="flex gap-3 flex-wrap items-center justify-center ">
  <div className="relative ">
    <img
      src="https://www.ozdilek.com.tr/tr/images/haberler/1265/kucuk.jpg"
      alt=""
      className=" w-72"
    />
    <div className="text-white rounded flex font-bold justify-center items-center text-center absolute max-w-[42px] top-4 left-4 bg-gray-800">
      Nis 25
    </div>
    <div className="w-72 h-14 -mt-14  absolute bg-[#00000080]">
      <div className=" ms-3 ] text-white text-sm   ">
        Özdilek Eskişehir'de Kırmızı Başlıklı Kız Çocuk Tiyatrosu
      </div>
    </div>
  </div>
  <div className="relative ">
    <img
      src="https://www.ozdilek.com.tr/tr/images/haberler/1264/kucuk.jpg"
      alt=""
      className=" w-72"
    />
    <div className="text-white rounded flex font-bold justify-center items-center text-center absolute max-w-[42px] top-4 left-4 bg-gray-800">
      Nis 25
    </div>
    <div className="w-72 h-14 -mt-14  absolute bg-[#00000080]">
      <div className=" ms-3 ] text-white text-sm   ">
        Özdilek Afyonkarahisar'da Ramazan Etkinlikleri
      </div>
    </div>
  </div>
  <div className="relative ">
    <img
      src="https://www.ozdilek.com.tr/tr/images/haberler/1263/kucuk.jpg"
      alt=""
      className=" w-72"
    />
    <div className="text-white rounded flex font-bold justify-center items-center text-center absolute max-w-[42px] top-4 left-4 bg-gray-800">
      Nis 25
    </div>
    <div className="w-72 h-14 -mt-14  absolute bg-[#00000080]">
      <div className=" ms-3 ] text-white text-sm   ">
        Özdilek Eskişehir'de 23 Nisan Çoşkusu
      </div>
    </div>
  </div>
  <div className="relative ">
    <img
      src="https://www.ozdilek.com.tr/tr/images/haberler/1262/kucuk.jpg"
      alt=""
      className=" w-72"
    />
    <div className="text-white rounded flex font-bold justify-center items-center text-center absolute max-w-[42px] top-4 left-4 bg-gray-800">
      Nis 25
    </div>
    <div className="w-72 h-14 -mt-14  absolute bg-[#00000080]">
      <div className=" ms-3 ] text-white text-sm   ">
        23 Nisan Bayramının Çoşkusu Özdilek İzmir'de
      </div>
    </div>
  </div>
</div></>;
};

export default Activity;
