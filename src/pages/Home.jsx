import React from "react";
import Navbar from "../components/Navbar";
import SliderComp from "../components/SliderComp";
import Campany from "../components/Campany";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SliderComp />
      <Campany/>
      <Footer/>
    </div>
  );
};

export default Home;
