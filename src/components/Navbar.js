import React from "react";
import Link from "gatsby-link";

import github from "../img/github-icon.svg";
import logo from "../img/logo.png";

export default class Navbar extends React.Component {
  state = {
    menuActive: false,
    navState: "normal"
  };

  toggleMenu = () => {
    this.setState({
      menuActive: !this.state.menuActive
    });
  };

  closeMenu = () => {
    this.setState({
      menuActive: false
    });
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

  getMenuClasses(original) {
    if (this.state.menuActive) {
      return original + " is-active";
    }
    return original;
  }
  render() {
    const navbarPadding =
      this.state.navState === "shrink" ? "navbar-shrink" : "";
    const burgerClasses = this.getMenuClasses("navbar-burger");
    const menuClasses = this.getMenuClasses("navbar-menu");
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
            <a
              role="button"
              className={burgerClasses}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-start" />
          <div className={menuClasses} id="navMenu">
            <div className="navbar-end">
              <Link
                className="navbar-item"
                to="/#home"
                onClick={this.closeMenu}
                activeStyle={{
                  color: "#ff6451"
                }}
              >
                Home
              </Link>
              <Link
                className="navbar-item"
                to="/#about"
                onClick={this.closeMenu}
                activeStyle={{
                  color: "#ff6451"
                }}
              >
                About Us
              </Link>
              <Link
                className="navbar-item"
                to="/#products"
                onClick={this.closeMenu}
                activeStyle={{
                  color: "#ff6451"
                }}
              >
                Products
              </Link>
              <Link
                className="navbar-item"
                to="/#portfolio"
                onClick={this.closeMenu}
                activeStyle={{
                  color: "#ff6451"
                }}
              >
                Portfolio
              </Link>
              <Link
                className="navbar-item"
                to="/#contact"
                onClick={this.closeMenu}
                activeStyle={{
                  color: "#ff6451"
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
