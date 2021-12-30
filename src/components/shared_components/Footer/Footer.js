import React from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import logo from "../../../images/logo/logo.png";
import postImage1 from "../../../images/sliders/slider-3.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="row footer-container">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="mb-4">
              <img src={logo} alt="" className="footer-logo" />
            </div>
            <div className="footer-address">
              <address>Address: Nikunja-1, Khilkhet, Dhaka-1229</address>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.709377184538!2d90.41363827313805!3d23.82376573821283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65a3d9b9649%3A0xff4da0194c977480!2sNikunja%201%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1640883953399!5m2!1sen!2sbd"
                  style={{ width: "400", height: "600", border: 0 }}
                  // allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3 className="mb-4 text-white">USEFUL LINKS</h3>
            <div className="usefull-links">
              <ul className="ul-left">
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> General info
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Our Cervies
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Online Support
                  </Link>
                </li>
              </ul>
              <ul className="ul-right">
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Become a Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Maintenance
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Language Packs
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> LearnPress
                  </Link>
                </li>
                <li>
                  <Link to="/home">
                    <i className="fas fa-angle-right"></i> Release Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3 className="mb-4 text-white">GET IN TOUCH</h3>
            <form action="">
              <div className="get-int-ouch-main">
                <div className="get-int-ouch-inner">
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div class="input-group input-group-sm mb-3">
                    <input
                      type="email"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    style={{ height: "120px" }}
                  ></textarea>
                  <label for="floatingTextarea">Comments</label>
                </div>
                <button type="submit" class="btn btn-secondary mt-3">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
