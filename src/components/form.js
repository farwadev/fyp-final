import React from "react";
import "../pages/style/form.css";
import img from "../images/3d1.png";

function Form(props) {
  return (
    <div>
      {/* address section */}
      <section class="wrapper">
        <div class="container py-14 py-md-16 text-center">
          <div class="row">
            <div class="col-md-9 col-lg-7 col-xl-7 mx-auto text-center">
              <img
                src="./assets/img/icons/lineal/puzzle-2.svg"
                class="svg-inject icon-svg icon-svg-md mb-4"
                alt=""
              />
              <h2 class="display-4 mb-3">Join Us</h2>
              <p class="lead fs-lg mb-6 px-xl-10 px-xxl-15">
                We are trusted by over 5000+ clients. Reach out to us from our
                contact form and we will get back to you shorlty.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* form section  */}
      <section class="wrapper ">
        <div class="container py-14 pt-lg-16 pb-lg-0">
          <div class="row gx-lg-8 gx-xl-0 gy-10 align-items-center">
            {/* <h4 class="display-6 mb-3" align="center">
              Get in Touch
            </h4> */}
            <div class="col-lg-6 col-xl-5 position-relative d-none d-lg-block">
              <div
                class="shape rounded-circle bg-soft-primary rellax w-21 h-21"
                data-rellax-speed="1"
                style={{ top: "8rem", left: "2rem" }}
              ></div>

              <img src={img} srcset={img} alt=""></img>
            </div>

            <div class="col-lg-6 col-xl-5 offset-xl-1">
              <p class="lead mb-8 pe-xl-10">Have any questions?</p>
              <form
                class="contact-form needs-validation"
                method="post"
                action="./assets/php/contact.php"
                novalidate
              >
                <div class="messages"></div>
                <div class="form-floating mb-4">
                  <input
                    id="form_name2"
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Jane"
                    required="required"
                    data-error="Name is required."
                  />
                  <label for="form_name2">Name *</label>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter your name.</div>
                </div>
                <div class="form-floating mb-4">
                  <input
                    id="form_email2"
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="jane.doe@example.com"
                    required="required"
                    data-error="Valid email is required."
                  />
                  <label for="form_email2">Email *</label>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please provide a valid email address.
                  </div>
                </div>
                <div class="form-floating mb-4">
                  <textarea
                    id="form_message2"
                    name="message"
                    class="form-control"
                    placeholder="Your message"
                    style={{ height: "150px" }}
                    required
                  ></textarea>
                  <label for="form_message2">Message *</label>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please enter your messsage.
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary rounded-pill btn-send mb-3"
                  value="Send message"
                >Send message</button>
                <p class="text-muted">
                  <strong>*</strong> These fields are required.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default Form;
