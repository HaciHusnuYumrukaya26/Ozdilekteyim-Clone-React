import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerShopping from "../components/BannerShopping";
import ForYouShopping from "../components/ForYouShopping";
import DurdaneShopping from "../components/DurdaneShopping";
import BestSellersShopping from "../components/BestSellersShopping";

const OnlineShopping = () => {
  return (
    <div>
      <Navbar />
      <BannerShopping />
      <ForYouShopping />
      <DurdaneShopping/>
      <BestSellersShopping/>
      <Footer />
    </div>
  );
};

export default OnlineShopping;
