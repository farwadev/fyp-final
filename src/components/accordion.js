import React from "react";
import { Link } from "react-router-dom";

import "../pages/style/accordion.css";

function accordion(props) {
  return (
    <div>
      <section class="section-services">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h2 class="title">Exclusive Services</h2>
                <p class="description">
                  All types of Jetski, Bikes ,Cars services are provided in our
                  Garage. We also provide home service. All mechanical and
                  electrical work of cars is also provided.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="content">
                  <span class="icon">
                    <i class="fa fa-car"></i>
                  </span>
                  <h3 class="title">Oil Change</h3>
                  <p class="description">
                    Our garages provide oil change services, which include
                    draining the old oil, replacing the oil filter, and filling
                    the engine with fresh oil.
                  </p>
                  <Link to="/contact" class="learn-more">
                    Get Service
                  </Link>
                </div>
                <span class="circle-before"></span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="content">
                  <span class="icon">
                    <i class="fa fa-car"></i>
                  </span>
                  <h3 class="title">Engine Diagnostics</h3>
                  <p class="description">
                    Our garages use specialized diagnostic tools to identify
                    repairing issues with the engine's electronics, and
                    mechanical components.
                  </p>
                  <Link to="/contact" class="learn-more">
                    Get Service
                  </Link>
                </div>
                <span class="circle-before"></span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="content">
                  <span class="icon">
                    <i class="fa fa-car"></i>
                  </span>
                  <h3 class="title">Electrical System Repairs</h3>
                  <p class="description">
                    Mechanics can diagnose and fix electrical problems, such as
                    faulty wiring or electrical component replacements.
                  </p>
                  <Link to="/contact" class="learn-more">
                    Get Service
                  </Link>
                </div>
                <span class="circle-before"></span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="content">
                  <span class="icon">
                    <i class="fa fa-car"></i>
                  </span>
                  <h3 class="title">Battery Replacement</h3>
                  <p class="description">
                    When your car battery dies, our garage can test it and
                    install a new one if necessary.
                     Removing an old or installing a new one in its place.
                  </p>
                  <Link to="#" class="learn-more">
                    Get Service
                  </Link>
                </div>
                <span class="circle-before"></span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="content">
                  <span class="icon">
                    <i class="fa fa-car"></i>
                  </span>
                  <h3 class="title">Fuel System</h3>
                  <p class="description">
                    This includes services like cleaning fuel injectors,
                    replacing the fuel filter, and addressing issues with the
                    fuel pump.
                  </p>
                  <Link to="#" class="learn-more">
                    Get Service
                  </Link>
                </div>
                <span class="circle-before"></span>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="content">
                  <span class="icon">
                    <i class="fa fa-car"></i>
                  </span>
                  <h3 class="title">Transmission Services:</h3>
                  <p class="description">
                    This includes maintenance like changing transmission fluid
                    and replacing transmission components.
                  </p>
                  <Link to="#" class="learn-more">
                    Get Service
                  </Link>
                </div>
                <span class="circle-before"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default accordion;
