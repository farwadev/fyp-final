import React from "react";
import "../pages/style/Carscards.css";
import { Link } from "react-router-dom";
// images logo
import img from "../images/polorise.jpg";
import img1 from "../images/Honda.png";
import img2 from "../images/harley2.jpg";
import img3 from "../images/yamaha.png";
import img4 from "../images/suzuki.png";
import img5 from "../images/bom.png";
import img7 from "../images/Tyota.png";
import img6 from "../images/Nissan.jpg";
import img8 from "../images/hyundai.jpg";
import img9 from "../images/jmc.jpg";
import img10 from "../images/lexus.png";
import img11 from "../images/che.png";
import img12 from "../images/seadoo.jpg";
import img13 from "../images/Kawasaki.jpg"
const carscards = () => {
  return (
    <div>
      <section className="wrapper ">
        <div className="row mt-11"></div>
        <div className="container py-14 py-md-16">
          <div className="row text-center">
            <div className="col-xl-10 mx-auto">
              <h2 className="fs-15 text-uppercase text-dark mb-3">BIKES</h2>
              <hr></hr>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-md-6 col-lg-4">
              <div className="card-body ">
                <div align="center">
                  <img src={img} alt={img}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">POLARIS</h5>
                  <Link to="/polarise">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card-body">
                <div align="center">
                  <img src={img2} alt={img1}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">HARLEY DAVIDSON</h5>
                  <Link to="/harley">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card-body">
                <div align="center">
                  <img src={img1} alt={img1}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">HONDA </h5>
                  <Link to="/honda">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card-body">
                <div align="center">
                  <img src={img3} alt={img1}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">YAMAHA</h5>
                  <Link to="/yamaha">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card-body">
                <div align="center">
                  <img src={img4} alt={img1}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">SUZUKI</h5>
                  <Link to="/suzuki">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-9 col-lg-4">
              <div className="card-body">
                <div align="center">
                  <img src={img5} alt={img1}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">BOOM TRIKE</h5>
                  <Link to="/boomtrike">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}

      <section className="wrapper ">
        <div className="row mt-11"></div>
        <div className="container py-14 py-md-16">
          <div className="row text-center">
            <div className="col-xl-10 mx-auto">
              <h2 className="fs-15 text-uppercase text-dark mb-3">CARS</h2>
              <hr></hr>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-md-6 col-lg-4">
              <div className="card-body ">
                <div align="center">
                  <img src={img6} alt={img}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">NISSAN</h5>
                  <Link to="/nissan">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card-body">
                <div align="center">
                  <img src={img7} alt={img1}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">TOYOTA</h5>
                  <Link to="/toyota">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card-body">
                <div align="center">
                  <img src={img8} alt={img8}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">HYUNDAI</h5>
                  <Link to="/hyundai">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card-body">
                <div align="center">
                  <img src={img9} alt={img1}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">JMC</h5>
                  <Link to="/jmc">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card-body">
                <div align="center">
                  <img src={img10} alt={img10}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">LEXUS</h5>
                  <Link to="/lexus">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-9 col-lg-4">
              <div className="card-body">
                <div align="center">
                  <img src={img11} alt={img11}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">CHEVROLET</h5>
                  <Link to="/chevrolet">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="wrapper ">
        <div className="row mt-11"></div>
        <div className="container py-14 py-md-16">
          <div className="row text-center">
            <div className="col-xl-10 mx-auto">
              <h2 className="fs-15 text-uppercase text-dark mb-3">JETSKI</h2>
              <hr></hr>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-md-6 col-lg-3">
              <div className="card-body ">
                <div align="center">
                  <img src={img4} alt={img}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">SUZUKI</h5>
                  <Link to="/Suzukii">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card-body">
                <div align="center">
                  <img src={img12} alt={img1}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">SEADOO</h5>
                  <Link to="/seadoo">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card-body">
                <div align="center">
                  <img src={img3} alt={img3}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">YAMAHA</h5>
                  <Link to="/yamahas">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card-body">
                <div align="center">
                  <img src={img13} alt={img13}></img>
                </div>
                <div align="center">
                  <h5 className="mb-1">KAWASAKI</h5>
                  <Link to="/kawasaki">
                    <button className="button">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default carscards;
