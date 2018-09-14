import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import logo from "../img/logo.png";

export default class Navbar extends React.Component {
  state = {
    menuActive: false,
    navState: "normal"
  };

  componentDidMount() {
    const scrollListener = document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50;
      if (isTop) {
        this.setState({
          navState: "normal"
        });
      } else {
        this.setState({
          navState: "shrink"
        });
      }
    });

    this.setState({
      scrollListener: scrollListener
    });
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.state.scrollListener);
  }
  render() {
    const navbarPadding =
      this.state.navState === "shrink" ? "navbar-shrink" : "";
    return (
      <nav className={`navbar is-transparent is-fixed-top ${navbarPadding}`}>
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img
                  src={logo}
                  alt="Kaldi"
                  style={{ width: "300px", height: "auto" }}
                />
              </figure>
            </Link>
          </div>
          <div className="navbar-start" />
          <div className="navbar-end">
            <Link className="navbar-item" to="/#home">
              Home
            </Link>
            <Link className="navbar-item" to="/#about">
              About Us
            </Link>
            <Link className="navbar-item" to="/#products">
              Products
            </Link>
            <Link className="navbar-item" to="/#portfolio">
              Portfolio
            </Link>
            <Link className="navbar-item" to="/#contact">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
