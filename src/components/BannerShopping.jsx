import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  VscDebugBreakpointDataUnverified,
  VscDebugBreakpointData,
} from "react-icons/vsc";

const BannerShopping = () => {
  return (
    <>
      <hr className="mb-3"></hr>
      <div className="container max-w-[1440px] px-24 mb-3">
        <div className="relative">
          <img
            className="border"
            src="https://img-ozdilekteyim.mncdn.com/medias/1920x735-eticikolata.jpg?context=bWFzdGVyfGJhbm5lcnN8NjQ3NzY1fGltYWdlL2pwZWd8aDM2L2gyOS85OTE3NjQzNTIyMDc4LzE5MjB4NzM1LWV0aWNpa29sYXRhLmpwZ3wwYjliNTQ1NjkyZjgzYWNhYzExYTkzM2UxMjljN2FmNDFkNTZkZGI3ZjZmZjEyMzNmMjMxYWFhYjY2ODQ4YmNl"
            alt=""
          />
          <div className="absolute left-0 top-[44%] rounded-e-2xl text-white bg-[#fa8222] p-[10px]">
            <IoIosArrowBack />
          </div>
          <div className="absolute right-0 top-[44%] rounded-s-2xl text-white bg-[#fa8222] p-[10px]">
            <IoIosArrowForward />
          </div>
          <div className="absolute left-[40%] bottom-[3%] flex gap-1 text-white p-[10px]">
            <VscDebugBreakpointDataUnverified size={24} />
            <VscDebugBreakpointDataUnverified size={24} />
            <VscDebugBreakpointDataUnverified size={24} />
            <VscDebugBreakpointDataUnverified size={24} />
            <VscDebugBreakpointDataUnverified size={24} />
            <VscDebugBreakpointDataUnverified size={24} />
            <VscDebugBreakpointData size={24} />
            <VscDebugBreakpointDataUnverified size={24} />
            <VscDebugBreakpointDataUnverified size={24} />
            <VscDebugBreakpointDataUnverified size={24} />
          </div>
        </div>
        <div className="mt-3">
          <img
            alt=""
            src="https://img-ozdilekteyim.mncdn.com/medias/1519x150.jpg?context=bWFzdGVyfGJhbm5lcnN8MTA1NDk1fGltYWdlL2pwZWd8aGJlL2gyYS85ODkxMjM3NTkzMTE4LzE1MTl4MTUwLmpwZ3wyN2FlMDc4ZWVjYmNhOWMwYmNlYjJhYzFhZDAxMGI2ODZkMGMwZWExM2JiZTBjOTk1NGE3NzAxZmZlNDFlNjFh"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2 mt-3 mb-3">
          <img
            className="w-[410px] hover:scale-[101%]"
            src="https://img-ozdilekteyim.mncdn.com/medias/Yoresel-Urunler-3-new.jpg?context=bWFzdGVyfGJhbm5lcnN8MTQ2MTAzfGltYWdlL2pwZWd8aGFlL2hlMi85MzE3MDcyNjMzODg2L1lvcmVzZWxfVXJ1bmxlcl8zX25ldy5qcGd8YWQyNzEyNGRiNjUzN2IxODMyNTA5YWUzZTdiZjJmNzczMmEwOWE4NTM3ZTRiNWM2M2IzY2Y5N2I5NmMyZjcyYg"
            alt=""
          />
          <img
            className="w-[410px] hover:scale-[101%]"
            src="https://img-ozdilekteyim.mncdn.com/medias/380x349-kapak.jpg?context=bWFzdGVyfGJhbm5lcnN8ODEzMjV8aW1hZ2UvanBlZ3xoZjkvaGY4Lzk5MTU5NzUxMzkzNTgvMzgweDM0OV9rYXBhay5qcGd8OGNhZjgyMmI2N2Q2ZTY3NjNhZWM4MGNkMzBmMGJlMGQwNjA3ZTM4YjNiYjdhZDFmN2UzZWEyZTgzMjJkYzMwMg"
            alt=""
          />
          <img
            className="w-[410px] hover:scale-[101%]"
            src="https://img-ozdilekteyim.mncdn.com/medias/380x349-4.jpg?context=bWFzdGVyfGJhbm5lcnN8NjU2MjJ8aW1hZ2UvanBlZ3xoZjAvaGU3Lzk5MTU5NzU2MzA4NzgvMzgweDM0OV80LmpwZ3w0MjRlYzg4ZTRmNGMxZDEzMTZhMWJjNzFkNDRiNGY4ZjEwZmVlYTEyNzI5MzBiYWJiMmNlNjBmNmVkZTY2YTE4"
            alt=""
          />
          <img
            className="w-[410px] hover:scale-[101%]"
            src="https://img-ozdilekteyim.mncdn.com/medias/380x349-3.jpg?context=bWFzdGVyfGJhbm5lcnN8NjExMjZ8aW1hZ2UvanBlZ3xoNDIvaGU3Lzk5MTU5NzU2OTY0MTQvMzgweDM0OV8zLmpwZ3xkYmQ5NzNhNTkzMGI2MmRmMGQ2ZDhkYjAzMjYxMWZiMzhkZGI4MDUxMWNlM2I2ZGZhOWMwMDMyZmRmYTg5NmRk"
            alt=""
          />
          <img
            className="w-[410px] hover:scale-[101%]"
            src="https://img-ozdilekteyim.mncdn.com/medias/380x349-2.jpg?context=bWFzdGVyfGJhbm5lcnN8NzM5NzN8aW1hZ2UvanBlZ3xoMGYvaGU4Lzk5MTkwNTY2NDIwNzgvMzgweDM0OV8yLmpwZ3xiZmY1OTQ3MzQ3ZTVjODZlZjRiMTE2ZWI1NjU5YmM1OWJjNTU3NmI4YTc0M2M4MTFlZWY3NTk5MDMyYzhkMWY4"
            alt=""
          />
          <img
            className="w-[410px] hover:scale-[101%]"
            src="https://img-ozdilekteyim.mncdn.com/medias/380x349-1.jpg?context=bWFzdGVyfGJhbm5lcnN8NjM5Mjh8aW1hZ2UvanBlZ3xoMzMvaGUxLzk5MTU5NzU4Mjc0ODYvMzgweDM0OV8xLmpwZ3xjNmEyMzE4NmQ2MmE3OGVhNmEzZWRlN2RjMWIwZmFmYWY4NDYyNmU3MDEyYzU4NmE4Yzg4ZThlZTJjNWFmMzA0"
            alt=""
          />
        </div>
        <div className="relative flex flex-row justify-center flex-wrap gap-2 mt-3 mb-3">
          <img
            className="w-[370px] hover:scale-[101%]"
            src="https://img-ozdilekteyim.mncdn.com/medias/400x300-8.jpg?context=bWFzdGVyfGJhbm5lcnN8NTY4NTJ8aW1hZ2UvanBlZ3xoYWEvaDEzLzk5MTU5Nzc2OTUyNjIvNDAweDMwMF84LmpwZ3xjYjM3ZDhiYWRlYjc1YTkzM2Y2ZWYzZWQzNjFkNTg5ZGViOGQxNmIwNjhjYzMwOGEwYzI2NDlhNzgyODhhMjhj"
            alt=""
          />
          <img
            className="w-[370px] hover:scale-[101%]"
            src="https://img-ozdilekteyim.mncdn.com/medias/400x300-9.jpg?context=bWFzdGVyfGJhbm5lcnN8MTE2OTY1fGltYWdlL2pwZWd8aDk5L2gxMC85OTE1OTc3NzYwNzk4LzQwMHgzMDBfOS5qcGd8Zjk3NDA0ZjNlMGFmNTM2ODBlOTA4YmQ4MjVmNzI4YzM3OTFkZTI4NjJiMDRiYjBhNDg1NDAxZThlYmQ2ZDRiYw"
            alt=""
          />
          <img
            className="w-[370px] hover:scale-[101%]"
            src="https://img-ozdilekteyim.mncdn.com/medias/400x300-1.jpg?context=bWFzdGVyfGJhbm5lcnN8NjQwNDR8aW1hZ2UvanBlZ3xoNzMvaDczLzk5MTU5NzY5NzQzNjYvNDAweDMwMF8xLmpwZ3w3NGU0ZjFhMzRlNWE3ZGM3ZTI3NzMzM2VhNzRkYzM3YTM3ZGI3NjQ0YTIzMjlhNjA1NTI5YTYzMzAyYmIwNjk2"
            alt=""
          />
          <div className="absolute left-0 top-[44%]  text-white bg-[#fa8222] p-[5px]">
            <IoIosArrowBack size={30} />
          </div>
          <div className="absolute right-0 top-[44%] font-extrabold  text-white bg-[#fa8222] p-[5px]">
            <IoIosArrowForward size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerShopping;
