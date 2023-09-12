import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
// honda images

import img8 from "../images/honda1.jpg";
import img9 from "../images/honda2.jpg";
import img10 from "../images/honda3.jpg";
import "../pages/style/hero.css";
// honda
import img11 from "../images/Honda4.jpg";
import img12 from "../images/honda5.jpg";
import img13 from "../images/honda6.jpg";
// honda images for slider
import img1 from "../images/hs.jpg";
import img2 from "../images/hs1.jpg";
import img3 from "../images/hs2.jpg";

function honda(props) {
  return (
    <div>
      <Navbar />
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
            <div class="col-12">
              <h2 class="fs-15 text-uppercase text-center">HONDA</h2>
              <hr class="text-primary" />
              <h4 class="fs-15 text-uppercase text-center">GOLDWING</h4>
            </div>
          </div>
          <div class="row align-items-center counter-wrapper gy-4 gy-md-5 text-center">
            <div class="col-md-4">
              <img src={img9} alt="" class="img-fluid" />
              <h6 class="counter">Mat Iridium Grey Metallic</h6>
            </div>

            <div class="col-md-4">
              <img src={img8} alt="" class="img-fluid" />
              <h6 class="counter">Mat Morion Black (2-Tone)</h6>
            </div>

            <div class="col-md-4">
              <img src={img10} alt="" class="img-fluid" />
              <h6 class="counter">
                Mat Iridium Grey Metallic/ Mat Morion Black (2-Tone)
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* pictures 2 rzr */}
      <section class="wrapper">
        <div class="container py-4 py-md-5">
          <div class="row">
            <div class="col-12">
              <hr class="text-primary" />
              <h4 class="fs-15 text-uppercase text-center">SPORTS NAKED</h4>
            </div>
          </div>
          <div class="row align-items-center counter-wrapper gy-4 gy-md-5 text-center">
            <div class="col-md-4">
              <img src={img11} alt="" class="img-fluid" />
              <h6 class="counter">Honda CB 300R</h6>
            </div>

            <div class="col-md-4">
              <img src={img12} alt="" class="img-fluid" />
              <h6 class="counter">Honda CB 1000R</h6>
            </div>

            <div class="col-md-4">
              <img src={img13} alt="" class="img-fluid" />
              <h6 class="counter">250cc Naked Model</h6>
            </div>
          </div>
        </div>
      </section>

      {/* services */}

      <div class="container text-center">
        <hr text-primary></hr>
        <h2 class="text-uppercase " align="center">
          HONDA SERVICES
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
      <Footer />
    </div>
  );
}

export default honda;
