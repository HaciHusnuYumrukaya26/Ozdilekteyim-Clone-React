import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings} >
        <div className="!flex justify-center min-h-[500px] flex-row flex-wrap items-center bg-[#fa8222] px-4">
          <img className=" max-w-96 mt-2    me-5"
            alt=""
            src="https://img-ozdilekteyim.mncdn.com/medias/Yoresel-Urunler-3-new.jpg?context=bWFzdGVyfGJhbm5lcnN8MTQ2MTAzfGltYWdlL2pwZWd8aGFlL2hlMi85MzE3MDcyNjMzODg2L1lvcmVzZWxfVXJ1bmxlcl8zX25ldy5qcGd8YWQyNzEyNGRiNjUzN2IxODMyNTA5YWUzZTdiZjJmNzczMmEwOWE4NTM3ZTRiNWM2M2IzY2Y5N2I5NmMyZjcyYg"
          />
          <div className="max-w-[950px]">
          <div className="text-5xl text-white font-bold mb-2">ÖZDİLEKTEYİM.COM İLE</div>
            <div className="text-4xl text-green-700 font-bold">MARKETİ EVİNİZE GETİRELİM</div>
            <div className="text-lg my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quam
              non earum eligendi molestiae est nesciunt repellat dolor ducimus
              recusandae, quas commodi delectus molestias explicabo harum
              distinctio repellendus, deserunt maxime.
            </div>
            <div className="border rounded-md  max-w-[600px] text-green-700  flex  ps-2   cursor-pointer text-lg min-h-8 bg-white">
              Teslimat Bölgeleri : Yenimahalle, Vanimehmet, Esentepe, Kale Mahallesi
            </div>
            <div className=" mt-2 flex-col   rounded-md  max-w-[600px] bg-green-700  flex  ps-2   cursor-pointer text-lg min-h-8 text-white">
             <div className="justify-center flex">Servis Saatlerimiz</div>
             <div className="flex flex-row justify-around">
             <div>10.00-10.30</div>
             <div>10.00-10.30</div>
             <div>10.00-10.30</div>
             <div>10.00-10.30</div>
             </div>
            </div>
          </div>
          
        </div>
       
      </Slider>
      
    </div>
  );
};

export default SliderComp;
