import React from "react";
import { Helmet } from "react-helmet";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import Counter from "../../components/Home/Counter/Counter";
import FAQ from "../../components/Home/FAQ/FAQ";
import PopularServices from "../../components/Home/PopularServices/PopularServices";
import Pricing from "../../components/Home/Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HomeFixi | Home</title>
      </Helmet>

      <div>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <PopularServices></PopularServices>
        <Pricing></Pricing>
        <Counter></Counter>
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
