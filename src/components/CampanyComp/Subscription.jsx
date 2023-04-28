import React from "react";
import { MdOutlinePeopleAlt } from "react-icons/md";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
  } from "react-icons/fa";
const Subscription = () => {
  return (
    <>
      <div className="mt-4 pt-4 pb-4 bg-[#282828] text-white">
        <div className=" ms-4">E-BÜLTEN ABONELİĞİ</div>
        <div className="flex gap-3 ms-4 mt-3 text-sm">
          <div>
            <input type="checkbox" className="me-2 " id="flexCheckDefault" />
            <label htmlFor="flexCheckDefault">ozdilek.com.tr</label>
          </div>
          <div>
            <input type="checkbox" className="me-2 " id="flexCheckDefault" />
            <label htmlFor="flexCheckDefault">Özdilekteyim Market</label>
          </div>
          <div>
            <input type="checkbox" className="me-2 " id="flexCheckDefault" />
            <label htmlFor="flexCheckDefault">Özdilekteyim Mağaza</label>
          </div>
        </div>

        <div className="mt-3 ms-4 text-black flex gap-4">
          <input
            type="text"
            className="w-44 h-10 ps-2 outline-none placeholder:text-sm"
            placeholder="Adınız"
          />
          <input
            type="text"
            className="w-44 h-10 ps-2 outline-none placeholder:text-sm"
            placeholder="Soyadınız"
          />
          <input
            type="text"
            className="w-44 h-10 ps-2 outline-none placeholder:text-sm"
            placeholder="E-Posta Adresiniz"
          />
          <input
            type="text"
            className="w-44 h-10 ps-2 outline-none placeholder:text-sm"
            placeholder="Telefon Numaranız"
          />
          <select className="w-24 outline-none placeholder:text-sm">
            <option selected>Şehriniz</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button className="text-white border-2 border-white px-3  text-sm hover:text-black  hover:bg-white  ">
            KAYDOL
          </button>
        </div>
        <div className="flex  ms-[30px] mt-1  text-xs">
          <input type="checkbox" className="me-2" id="flexCheckDefault" />
          <label htmlFor="flexCheckDefault" className="underline decoration-1 ">
            {" "}
            Abonelik, Gizlilik ve Kişisel Verileri Koruma Kanunu hakkında
            bilgilendirme şartlarını okudum, anladım ve kabul ediyorum.
          </label>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <div className="flex border-r-2">
          <div>
            {" "}
            <div className="text-xs font-bold text-[#fa8222]">
              MÜŞTERİ MEMNUNİYETİ HATTI
            </div>
            <div className="text-2xl text-gray-400">444 44 16</div>{" "}
          </div>{" "}
          <div>
            <MdOutlinePeopleAlt size={50} color="gray" className="w-20 -ms-3 me-2" />
          </div>
        </div>
        <div className="ms-2 flex border-r-2 pe-12">
          <div>
            {" "}
            <div className="text-xs font-bold text-[#fa8222] ">
             MEMNUNİYET ANKETİ
            </div>
            <div className="text-sm text-gray-400"><i>Müşteri en iyi müfettiştir</i>.</div>{" "}
          </div>{" "}
          
        </div>
        <div className="ms-2 flex   pe-12">
          <div>
            {" "}
            <div className="text-xs font-bold text-[#fa8222] ">
             SOSYAL MEDYA
            </div>
            <div className="text-sm text-gray-400 flex">
            <div className="pe-2  h-[40px] items-center  flex hover:text-[#fa8222]">
            <FaFacebookF size={20} />
          </div>
          <div className="pe-2 h-[40px] items-center  flex hover:text-[#fa8222]">
            <FaTwitter  size={20}/>
          </div>
          <div className="pe-2  h-[40px] items-center  flex hover:text-[#fa8222] ">
            <FaInstagram  size={20}/>
          </div>
          <div className="pe-2 p h-[40px] items-center  flex hover:text-[#fa8222]">
            <FaYoutube  size={20}/>
          </div>
          <div className=" h-[40px] items-center  flex hover:text-[#fa8222]">
            <FaWhatsapp  size={20}/>
          </div>
            </div>
          </div>{" "}
          
        </div>
      </div>
    </>
  );
};

export default Subscription;
