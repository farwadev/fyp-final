import React from "react";
// import img gif
import img from "../images/logo1.GIF";
import { Link } from "react-router-dom";

function footer(props) {
  return (
    <div>
      <footer className="footer-section">
  <div className="container">
    <div className="footer-cta pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-md-4 mb-4 mb-md-0">
          <div className="single-cta">
            <i className="fa fa-map-marker"></i>
            {/* location */}
            <div className="cta-text">
              <h4>Find us</h4>
              <span>Ras AL Khor Industrial Area -2, Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* email */}
        <div className="col-xl-4 col-md-4 mb-4 mb-md-0">
          <div className="single-cta">
            <i className="fa fa-envelope-open"></i>
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>adilsaeed.hhh@gmail.com</span>
            </div>
          </div>
        </div>
        {/* number */}
        <div className="col-xl-4 col-md-4">
          <div className="single-cta">
            <i className="fa fa-phone"></i>
            <div className="cta-text">
              <h4>Call us</h4>
              <span>+971 55 567 5375</span>
              <br />
              <span>+971 56 600 5555</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* logo gif */}
    <div className="footer-content pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-4 mb-lg-0">
          <div className="footer-widget">
            <div className="footer-logo">
              <Link to="index.html">
                <img src={img} alt="img" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Adil's Auto Service Center</h3>
            </div>
            {/* text */}
            <div className="footer-text">
              <p>
                All types of Jetski, Bikes services are provided in our
                Garage. We also provide you home service. All mechanical
                and electrical work of cars is also provided.
              </p>
            </div>
          </div>
        </div>
        {/* social icons */}
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Join us</h3>
            </div>
            <div className="footer-basic">
              <footer>
                <div className="footer-social-icon social">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/categories">Categories</Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/about">About</Link>
                    </li>
                  </ul>
                  <br />
                  <Link to="/contact">
                    <i className="fa fa-whatsapp whatsapp-bg"></i>
                  </Link>
                  <Link to="/contact">
                    <i className="fa fa-snapchat-ghost snapchat-bg"></i>
                  </Link>
                  <Link to="/contact">
                    <i className="fa fa-google google-bg"></i>
                  </Link>
                  <Link to="/contact">
                    <i className="fa fa-facebook facebook-bg"></i>
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default footer;
