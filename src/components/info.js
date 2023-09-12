import React from "react";
import img from "../images/settings-2.svg";
import img1 from "../images/adjust.svg";
import img3 from "../images/truck.svg";
import img4 from "../images/loyalty.svg";
import video3 from "../images/video4.MP4";
import { Link } from "react-router-dom";
import "../pages/style/info.css";

function cards(props) {
  return (
    <div>
      <div class="row featurette">
        <div class="col-md-12">
          <center>
            <h2 class="featurette-heading fw-normal lh-">
              WELCOME TO OUR GARAGE!!!
            </h2>
          </center>
        </div>
      </div>
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <div class="imgContainer">
            <img
              class="blueDots"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg"
              alt=""
            />
            <video
              class="mainImg"
              src={video3}
              width="100%"
              height="500px"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div class="responsive-container-block textSide">
            <p class="text-blk heading">About Us</p>
            <p class="text-blk subHeading">
              We treat every vehicle as if it were our own and strive to provide
              high-quality work and excellent communication throughout the
              repair process.We know that car troubles can be stressful , so we
              do our best to make the experience as hassle-free as possible.
            </p>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img class="cardImg" src={img} alt="" />
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading"> Range of Services </p>
                <p class="text-blk cardSubHeading">
                   We offer range of services from oil changes and
                  tire rotations to more complex engine repairs
                </p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img class="cardImg" src={img1} alt="" />
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">Maintains your Vehicles</p>
                <p class="text-blk cardSubHeading">
                  We treat every vehicle as if it were our own and strive to
                  provide high-quality work
                </p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img class="cardImg" src={img4} alt="" />
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">Trusted Workers</p>
                <p class="text-blk cardSubHeading">
                  I have been working and providing different services in
                  automotive industry since 2002
                </p>
              </div>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <div class="cardImgContainer">
                <img class="cardImg" src={img3} alt="" />
              </div>
              <div class="cardText">
                <p class="text-blk cardHeading">Home Services</p>
                <p class="text-blk cardSubHeading">
                  Our garage is also providing home services to our customers.
                </p>
              </div>
            </div>
            <Link to="/services">
              <button class="explore">Explore our Services</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">
            MY NAME IS ADIL SAEED{" "}
           
          </h2>
          <p class="lead">
            I have been working and providing different services in automotive
            industry since 2002.I have work experience of 21 Years and can do
            all types of repairs and maintenance. I have been working and
            providing different services in automotive industry since 2002.I
            have work experience of 21 Years and can do all types of repairs and
            maintenance. I have been working and providing different services in
            automotive industry since 2002.I have work experience of 21 Years
            and can do all types of repairs and maintenance.
          </p>
          <hr class="featurette-divider" />
        </div>
        <div class="col-md-4 order-md-1">
          <video src={video3} width="100%" autoPlay loop muted></video>
        </div>
      </div> */}

      {/* <div class="row featurette">
        <div class="col-md-8">
          <h2 class="featurette-heading fw-normal lh-1">
            HOME SERVICE IS AVAILABLE:
          </h2>
          <p class="lead">
            We treat every vehicle as if it were our own and strive to provide
            high-quality work and excellent communication throughout the repair
            process.We know that car troubles can be stressful , so we d our
            best to make the experience as hassle-free as possible.I have been
            working and providing different services in automotive industry
            since 2002.I have work experience of 21 Years and can do all types
            of repairs and maintenance. I have been working and providing
            different services in automotive industry since 2002.I have work
            experience of 21 Years and can do all types of repairs and
            maintenance .We also provide home services.
          </p>
          <hr class="featurette-divider" />
        </div>
        <div class="col-md-4">
          <video src={video2} width="100%" autoPlay loop muted></video>
        </div>
      </div> */}
      {/* <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">
            RANGE OF SERVICES FOR YOUR VEHICLES.{" "}
          </h2>
          <p class="lead">
            At our Garage, we offer Link range of services to keep your vehicle
            running smoothly, from oil changes and tire rotations to more
            complex engine repairs .We specialize in working with both domestic
            and foreign vehicles and have the latest diagnostic tools and
            equipment to ensure accurate ans efficient repairs. I have been
            working and providing different services in automotive industry
            since 2002.I have work experience of 21 Years and can do all types
            of repairs and maintenance. I have been working and providing
            different services in automotive industry since 2002.I have work
            experience of 21 Years and can do all types of repairs and
            maintenance.
          </p>
          <hr class="featurette-divider" />
        </div>

        <div class="col-md-4 order-md-1">
          <video src={video1} width="100%" autoPlay loop muted></video>
        </div>
      </div> */}
    </div>
  );
}

export default cards;
