import React from 'react';
// linl
import { Link } from "react-router-dom";
// import css
import '../pages/style/grids.css'
// import grids
import Grids from "../data/services.json"
console.log("🚀 ~ file: grids.js:16 ~ Grids:", Grids)
function grids(props) {
  return (
    //  grids
    <div className="main">
      <h1>CARS  |  BIKES    |  JETSKI </h1>
      <ul className="cards text-center">
        {Grids.map(item => (
          <li key={item.id} className="cards_item">
            <div className="card">
              <div className="card_image"><img src={item.img} alt='img'></img></div>
              <div className="card_content">
                <h2 className="card_title">{item.title}</h2>
                <p className="card_text">{item.text}</p>
                <p className="card_text">{item.text1}</p>
                <p className="card_text">{item.text2}</p>
               <Link to="/contact"><button className="btn card_btn">Get Service</button></Link>
              </div>
            </div>
          </li>))}
      </ul>
    </div>

  );
}

export default grids;