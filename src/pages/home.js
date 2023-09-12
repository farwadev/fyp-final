import React from "react";
// import nav , slider , footer

import Navbar from "../components/navbar";
import Slider from "../components/slider";
import Footer from "../components/footer";
import Grids from '../components/grids'


function home(props) {
  return (
    <div>
      <Navbar />
      <Slider />
      <Grids/>
      <Footer />
    </div>
  );
}

export default home;
