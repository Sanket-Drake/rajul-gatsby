import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./all.scss";
import "./new.scss";

const TemplateWrapper = ({ children, location }) => {
  const pathName = location.pathname.substr(1)
    ? location.pathname.substr(1) + "-wrapper"
    : "home-wrapper";

  return (
    <div className={pathName.replace(/\//g, "")}>
      <Helmet title="Rajul Graphics" />
      <Navbar />
      <div className="content-wrapper">{children()}</div>
      <Footer />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
