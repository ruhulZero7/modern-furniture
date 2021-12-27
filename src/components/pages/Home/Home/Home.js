import React from "react";
import Footer from "../../../shared_components/Footer/Footer";
import Header from "../../../shared_components/Header/Header";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
