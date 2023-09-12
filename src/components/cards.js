import React from "react";
import { Link } from "react-router-dom";
// import css
import "../pages/style/cards.css";
// images import
import img from "../images/c1.JPG";
import img1 from "../images/c2.jpg";
import img2 from "../images/c4.webp";
import img3 from "../images/c3.jpg";
import img4 from "../images/c5.jpg";
import img5 from "../images/c6.jpg";

// cards
function cards(props) {
  return (
    <div>
      <br></br>
      <h2 align="center">CARS-BIKES-JETSKI</h2>
      
      <section className="articles">
        
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={img} alt="" />
            </figure>
            <div className="article-body">
              <h2>CANAM</h2>
              <p>
                Can-Am, or CanAm, is an abbreviation of Canadian-American. It
                may refer to: CanAm Highway, an international highway connecting
                Canada to the United States and Mexico, extending from La Ronge,
                Saskatchewan to El Paso, Texas. Electronic Fuel Injection (EFI)
              </p>
              <Link to="/contact" className="read-more">
                Get Service{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={img1} alt=""/>
            </figure>
            <div className="article-body">
              <h2>CANAM RXR</h2>
              <p>
                Can-Am Center, an international study centre for Canada-US
                relations at the University of Maine.200 hp, Rotax ACE (Advanced
                Combustion Efficiency) 900 cc Turbocharged Triple-cylinder
                engine, liquid cooled with integrated intercooler and
                high-perfomance air filter
              </p>
              <Link to="/contact" className="read-more">
                Get Service{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={img2} alt="" />
            </figure>
            <div className="article-body">
              <h2>SLINGSHOT</h2>
              <p>
                The Slingshot is federally classified as a three wheeled
                motorcycle. Most states classify it as an Autocycle, which means
                that only a valid driver's license is needed to drive the
                vehicle.The Slingshot Signature LE is powered by a Prostar 2.0L
                4-cylinder engine that delivers 178 hp at 8,500 rpm.
              </p>
              <Link to="/contact" className="read-more">
                Get Service{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      </section>
      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={img3} alt="" />
            </figure>
            <div className="article-body">
              <h2>Harley-Davidson</h2>
              <p>
                (H-D, or simply Harley) is an American motorcycle manufacturer
                headquartered in Milwaukee, Wisconsin, United States. Founded in
                1903, it is one of two major American motorcycle manufacturers
                to survive the Great Depression along with its historical rival,
                Indian Motorcycles.
              </p>
              <Link to="/contact" className="read-more">
                Get Service{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={img4} alt="" />
            </figure>
            <div className="article-body">
              <h2>Can-Am Spyder</h2>
              <p>
                Adjustable electronic windshield & automatic air adjustment in
                rear suspension. Extra lumbar support & heated driver grips.
                LinQ-compatible luggage including top case with 47 gallons
                (177L) of capacity. Bluetooth-compatible BRP six-speaker
                keypad-controllable sound system
              </p>
              <Link to="/contact" className="read-more">
                Get Service{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={img5} alt="" />
            </figure>
            <div className="article-body">
              <h2>JETSKI</h2>
              <p>
                Water scooter or jet ski, is a recreational watercraft that a
                rider sits or stands on, not within, as in a boat. A
                high-speed jet of water shooting out the back of the craft.The
                jet skis ability to make sharp turns and leap is similar to
                snowboarding, thus the name jet ski.
              </p>
              <Link to="/contact" className="read-more">
                Get Service{" "}
                <span className="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default cards;
