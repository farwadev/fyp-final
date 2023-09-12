import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Pictures from "../components/pictures";
import Carscards from "./../components/Carscards";
function categories(props) {
  return (
    <div>
      <Navbar />
      <Pictures />
      <Carscards />
      <Footer />
    </div>
  );
}

export default categories;
