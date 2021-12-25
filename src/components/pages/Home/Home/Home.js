import React from "react";
import Header from "../../../shared_components/Header/Header";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Products />
    </div>
  );
};

export default Home;
