import React from 'react';
import {Link} from "react-router-dom";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
//  images  icons
import img8 from "../images/suz3.jpg";
import img9 from "../images/suz4.jpg";
import img10 from "../images/suz5.jpg";
import "../pages/style/hero.css";
// rzr
import img11 from "../images/suz6.jpg";
import img12 from "../images/suz7.webp";
import img13 from "../images/suz8.jpg";
//  images for slider
import img1 from "../images/SUZ.jpg";
import img2 from "../images/suz1.png";
import img3 from "../images/suz2.jpg";
function Suzukii(props) {
    return (
        <div>
            <Navbar/>
             {/* slider */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
         
        </div>
        {/* previous button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        {/* next button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* pictures */}
      <section className="wrapper">
        <div className="container py-4 py-md-5">
          <div className="row">
            <div className="col-12">
              <h2 className="fs-15 text-uppercase text-center">SUZUKI</h2>
              <hr className="text-primary" />
              <h4 className="fs-15 text-uppercase text-center">SUZUKI SERIES</h4>
            </div>
          </div>
          <div className="row align-items-center counter-wrapper gy-4 gy-md-5 text-center">
            <div className="col-md-4">
              <img src={img9} alt="" className="img-fluid" />
              <h6 className="counter">SUZUKI Rec-Lite.</h6>
            </div>

            <div className="col-md-4">
              <img src={img8} alt="" className="img-fluid" />
              <h6 className="counter">SUZUKI Recreation.</h6>
            </div>

            <div className="col-md-4">
              <img src={img10} alt="" className="img-fluid" />
              <h6 className="counter">SUZUKI Performance.</h6>
            </div>
          </div>
        </div>
      </section>

      {/* pictures 2 */}
      <section className="wrapper">
        <div className="container py-4 py-md-5">
          <div className="row">
            <div className="col-12">
              <hr className="text-primary" />
              <h4 className="fs-15 text-uppercase text-center">SUZUKI SERIES</h4>
            </div>
          </div>
          <div className="row align-items-center counter-wrapper gy-4 gy-md-5 text-center">
            <div className="col-md-4">
              <img src={img11} alt="" className="img-fluid" />
              <h6 className="counter">SUZUKI Luxury/Touring.</h6>
            </div>

            <div className="col-md-4">
              <img src={img12} alt="" className="img-fluid" />
              <h6 className="counter">SUZUKI Tow Sport.</h6>
            </div>

            <div className="col-md-4">
              <img src={img13} alt="" className="img-fluid" />
              <h6 className="counter">SUZUKI Sport Fishing.</h6>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <div className="container text-center">
        <hr text-primary></hr>
        <h2 className="text-uppercase " align="center">
          SUZUKI SERVICES
        </h2>
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <h6 className="m-b-20">GEAR REPAIRING</h6>
                <h2 className="text-right">
                  <i className="fa fa-wrench " style={{ fontSize: "34px" }}></i>
                </h2>
                <small className="m-b-0">Program: Stage1 ,Stage2, Stage3</small>
                <h6>HOME SERVICE IS AVAILABLE</h6>
                <Link to="/contact">
                  <button className="buttonn">Get Service</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <h6 className="m-b-20"> ENGINE REPAIRING </h6>
                <h2 className="text-right">
                  <i className="fa fa-gear fa-spin" style={{ fontSize: "34px" }}></i>
                </h2>
                <small className="m-b-0">Program: Stage1 ,Stage2, Stage3</small>
                <h6>HOME SERVICE IS AVAILABLE</h6>
                <Link to="/contact">
                  <button className="buttonn">Get Service</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-yellow order-card">
              <div className="card-block">
                <h6 className="m-b-20"> OIL SERVICES</h6>
                <h2 className="text-right">
                  <i className="fa fa-refresh fa-spin" style={{ fontSize: "34px" }}></i>
                </h2>
                <small className="m-b-0">Program: Stage1 ,Stage2, Stage3</small>
                <h6>HOME SERVICE IS AVAILABLE</h6>
                <Link to="/contact">
                  <button className="buttonn">Get Service</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
              <div className="card-block">
                <h5 className="m-b-20"> BODY REPAIRING</h5>
                <h2 className="text-right">
                  <i className="fa fa-car" style={{ fontSize: "34px" }}></i>
                </h2>
                <small className="m-b-0">Program: Stage1 ,Stage2, Stage3</small>
                <h6>HOME SERVICE IS AVAILABLE</h6>
                <Link to="/contact">
                  <button className="buttonn">Get Service</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
            <Footer/>
        </div>
    );
}

export default Suzukii;