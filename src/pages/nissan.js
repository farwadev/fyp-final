import React from 'react';
import {Link }from "react-router-dom";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
//  images  icons
import img8 from "../images/n4.jpg";
import img9 from "../images/N5.jpg";
import img10 from "../images/n6.jpg";
import "../pages/style/hero.css";
// rzr
import img11 from "../images/n9.jpg";
import img12 from "../images/n10.jpg";
import img13 from "../images/n11.jpg";
//  images for slider
import img1 from "../images/n1.jpg";
import img2 from "../images/n2.jpg";
import img3 from "../images/n3.jpg";
function nissan(props) {
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
      <section class="wrapper">
        <div class="container py-4 py-md-5">
          <div class="row">
            <h2 class="fs-15 text-uppercase text-center">NISSAN</h2>
            <hr class="text-primary" />
            <h4 class="fs-15 text-uppercase text-center">SPORT CARS</h4>
          </div>
          <div class="row align-items-center counter-wrapper gy-4 gy-md-5 text-center">
            <div class="col-md-4">
              <img src={img8} alt="" class="img-fluid" />
              <h6 class="counter">GT-R</h6>
            </div>

            <div class="col-md-4">
              <img src={img9} alt="" class="img-fluid" />
              <h6 class="counter">GT-R50</h6>
            </div>

            <div class="col-md-4">
              <img src={img10} alt="" class="img-fluid" />
              <h6 class="counter">Nissan Z/Z Proto</h6>
            </div>
          </div>
        </div>
      </section>

      {/* pictures 2 rzr */}
      <section class="wrapper">
        <div class="container py-4 py-md-5">
          <div class="row">
            <hr class="text-primary" />
            <h4 class="fs-15 text-uppercase text-center">HYBRID</h4>
          </div>
          <div class="row align-items-center counter-wrapper gy-4 gy-md-5 text-center">
            <div class="col-md-4">
              <img src={img11} alt="" class="img-fluid" />
              <h6 class="counter">Sky-Line</h6>
            </div>

            <div class="col-md-4">
              <img src={img12} alt="" class="img-fluid" />
              <h6 class="counter">Rouge / X-Trail</h6>
            </div>

            <div class="col-md-4">
              <img src={img13} alt="" class="img-fluid" />
              <h6 class="counter">Quashqai</h6>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <div class="container text-center">
        <hr text-primary></hr>
        <h2 class="text-uppercase " align="center">
          NISSAN SERVICES
        </h2>
        <div class="row">
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <h6 class="m-b-20">GEAR REPAIRING</h6>
                <h2 class="text-right">
                  <i class="fa fa-wrench " style={{ fontSize: "34px" }}></i>
                </h2>
                <small class="m-b-0">Program: Stage1 ,Stage2, Stage3</small>
                <h6>HOME SERVICE IS AVAILABLE</h6>
                <Link to="/contact">
                  <button className="buttonn">Get Service</button>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <h6 class="m-b-20"> ENGINE REPAIRING </h6>
                <h2 class="text-right">
                  <i class="fa fa-gear fa-spin" style={{ fontSize: "34px" }}></i>
                </h2>
                <small class="m-b-0">Program: Stage1 ,Stage2, Stage3</small>
                <h6>HOME SERVICE IS AVAILABLE</h6>
                <Link to="/contact">
                  <button className="buttonn">Get Service</button>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
              <div class="card-block">
                <h6 class="m-b-20"> OIL SERVICES</h6>
                <h2 class="text-right">
                  <i class="fa fa-refresh fa-spin" style={{ fontSize: "34px" }}></i>
                </h2>
                <small class="m-b-0">Program: Stage1 ,Stage2, Stage3</small>
                <h6>HOME SERVICE IS AVAILABLE</h6>
                <Link to="/contact">
                  <button className="buttonn">Get Service</button>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
              <div class="card-block">
                <h5 class="m-b-20"> BODY REPAIRING</h5>
                <h2 class="text-right">
                  <i class="fa fa-car" style={{ fontSize: "34px" }}></i>
                </h2>
                <small class="m-b-0">Program: Stage1 ,Stage2, Stage3</small>
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

export default nissan;