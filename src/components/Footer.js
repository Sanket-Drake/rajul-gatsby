import React from "react";
import Link from "gatsby-link";

import facebook from "../img/homepage/facebook.svg";
import twitter from "../img/homepage/twitter.svg";
import google from "../img/homepage/google.svg";

import github from "../img/github-icon.svg";
import logo from "../img/logo.png";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="columns">
        <div className="column is-4 footer-links">
          <ul>
            <li className="navbar-item under-line">COMPANY</li>
            <li>
              <Link className="navbar-item" to="/about">
                News
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                Blog
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
        <div className="column is-4 social">
          <ul>
            <li className="navbar-item under-line">PRODUCTS</li>
            <li>
              <Link className="navbar-item" to="/about">
                Offset Printing
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                Screen Printing
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                Non Woven Bags
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                Paper Bags
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                Designing
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                Packaging
              </Link>
            </li>
          </ul>
        </div>
        <div className="column is-4 footer-links">
          <ul>
            <li className="navbar-item under-line">SUPPORT</li>
            <li>
              <Link className="navbar-item" to="/about">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <footer>
      <div className="container">
        <div className="columns">
          <div className="column is-8 footer-links">
            <h3>© 2018 Rajul Graphics</h3>
          </div>
          <div className="column is-4 social">
            <ul>
              <li>
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={google} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
