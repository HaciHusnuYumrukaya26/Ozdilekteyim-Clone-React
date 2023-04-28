import React from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Navbar = () => {

    
  return (
    <>
      <div className="container text-gray-600 px-24 min-h-[40px] max-w-[1440px] flex flex-wrap justify-between items-center">
        <div className="flex  flex-row  justify-center items-center list-none gap-2 text-sm">
          <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
            Özdilek Holding Kuruluşları
          </li>
          <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
            Kurumsal
          </li>
          <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
            Haberler
          </li>
          <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
            İletişim
          </li>
        </div>
        <div className="flex">
          <div className="text-[#fa8222] font-semibold px-2 h-[40px] items-center  flex hover:bg-[#fa8222] hover:text-white">
            <BsFillBasket2Fill className=" me-1" /><NavLink to="/onlineshopping"> ÇEVRİM İÇİ ALIŞVERİŞ</NavLink>
          </div>
          <div className=" px-3 h-[40px] items-center  flex hover:bg-[#fa8222] hover:text-white">
            <AiFillStar className="me-1" /> FIRSAT KATALOGLARI
          </div>
          <div className=" px-2 text-sm h-[40px] items-center  flex hover:bg-[#fa8222] hover:text-white">
            <FaFacebookF />
          </div>
          <div className=" px-2 text-sm h-[40px] items-center  flex hover:bg-[#fa8222] hover:text-white">
            <FaTwitter />
          </div>
          <div className=" px-2 text-sm h-[40px] items-center  flex hover:bg-[#fa8222] hover:text-white">
            <FaInstagram />
          </div>
          <div className=" px-2 text-sm h-[40px] items-center  flex hover:bg-[#fa8222] hover:text-white">
            <FaYoutube />
          </div>
          <div className=" px-2 text-sm h-[40px] items-center  flex hover:bg-[#fa8222] hover:text-white">
            <FaWhatsapp />
          </div>
          <div className=" px-2 h-[40px] items-center  flex hover:bg-[#fa8222] hover:text-white">
            <FiPhoneCall className="me-1" /> 444 44 16
          </div>
          <div className=" font-semibold px-2 text-sm h-[40px] items-center  flex hover:bg-[#fa8222] hover:text-white">
            TR
          </div>
        </div>
      </div>
      <hr className="w-[100%]"></hr>
      <div className="container max-w-[1440px] flex items-center justify-center my-2">
      <NavLink to="/"> <img
          className="w-64"
          alt=""
          src="https://www.ozdilek.com.tr/tr/images/logo/logo.svg"
        /></NavLink>
      </div>
      <div className="flex text-black min-h-[40px] flex-wrap   flex-row  justify-center items-center list-none gap-2 ">
        <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
          ÖzdilekParklar
        </li>
        <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
          Alışveriş Merkezleri
        </li>
        <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
          Hipermarketler
        </li>
        <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
          Departman Mağazalar
        </li>
        <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
          Ev Tekstili Mağazaları
        </li>
        <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
          Kataloglar
        </li>
        <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
          Etkinlikler
        </li>
        <li className=" h-[40px] flex justify-center items-center px-1 hover:text-white hover:bg-[#fa8222]">
          Kampanyalar
        </li>
        <li
        className=" h-[30px] font-semibold flex text-sm justify-center items-center px-1 text-[#ff0000]"
        >
            we|you|they
        </li>
      </div>
    </>
  );
};

export default Navbar;
