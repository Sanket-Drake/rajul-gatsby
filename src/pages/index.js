import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import backdrop from "../img/offset-printing.jpg";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class IndexPage extends React.Component {
  state = { offset: 0 };

  componentDidMount() {
    if (this.props.location.hash == "#about") {
      const domNode = ReactDOM.findDOMNode(this.refs["aboutIdentifier"]);
      domNode.scrollIntoView();
    }
    const elementOffset = ReactDOM.findDOMNode(
      this.refs["UniqueElementIdentifier"]
    ).getBoundingClientRect();
    console.log(elementOffset);
    this.setState({ offset: elementOffset.top });
  }

  componentWillReceiveProps(Props) {
    console.log("Props", Props.location.hash);
    if (Props.location.hash == "#about") {
      const domNode = ReactDOM.findDOMNode(this.refs["aboutIdentifier"]);
      domNode.scrollIntoView();
    } else if (Props.location.hash == "#products") {
      const domNode = ReactDOM.findDOMNode(this.refs["productsIdentifier"]);
      domNode.scrollIntoView();
    } else if (Props.location.hash == "#portfolio") {
      const domNode = ReactDOM.findDOMNode(this.refs["portfolioIdentifier"]);
      domNode.scrollIntoView();
    }
  }

  scrollToEle = e => {
    e.preventDefault();
    // window.scrollTo(0, this.state.offset);
    const domNode = ReactDOM.findDOMNode(this.refs["UniqueElementIdentifier"]);
    domNode.scrollIntoView();
    console.log(this.state.offset);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    const { data } = this.props;
    const { edges: blogs } = data.blogs;
    const { edges: about } = data.about;
    const aboutData = about[0].node.frontmatter;
    console.log(aboutData);
    return (
      <div className="home-page">
        <div className="home-banner" ref="UniqueElementIdentifier">
          <div className="container">
            <div className="text-content">
              <h1>
                Design, Printing, Packaging, Paper Bag, Non Woven Bags,
                Signages, Digital Printing.
              </h1>
              <h2>
                We offer the best combination of Design, Price, Quality &
                Services.
              </h2>
              <a
                className="button is-rounded primary-button"
                href="#"
                onClick={this.scrollToEle}
              >
                EXPLORE
              </a>
            </div>
          </div>
        </div>

        <div className="home-philosophy" ref="aboutIdentifier">
          <div className="container">
            <h2>{aboutData.title}</h2>
            <h3>{aboutData.subtitle}</h3>
            <div className="columns">
              <div className="column is-4">
                <p>{aboutData.description1}</p>
                <div className="column" />
                <p>{aboutData.description2}</p>
              </div>
              <div className="column is-8">
                <img src={backdrop} alt="Whizkids teacher" />
              </div>
            </div>
          </div>
        </div>
        <div className="stand-out" ref="productsIdentifier">
          <div className="container">
            <h2>Products</h2>
            <h4>
              Having used discount toner cartridges for twenty years, there have
              been a lot of changes in the toner cartridge market. The market
              today is approximately a twenty billion dollar business.
            </h4>
            <div className="columns standout-chuks">
              {blogs.map(({ node: blog }, index) => (
                <div className="column standout-chunk" key={index}>
                  <div className="standout-illustrator">
                    <img
                      src={blog.frontmatter.serviceIcon}
                      alt="Whizkids teacher"
                    />
                  </div>
                  <h3>{blog.frontmatter.title}</h3>
                  <ul>
                    <li>{blog.frontmatter.description}</li>
                  </ul>
                  <a
                    className="button is-rounded primary-button"
                    href={blog.fields.slug}
                  >
                    EXPLORE
                  </a>
                </div>
              ))}
            </div>
            <a className="button is-rounded primary-button" href="/products">
              EXPLORE
            </a>
          </div>
        </div>

        <div className="stand-out" ref="portfolioIdentifier">
          <div className="container">
            <h2>Portfolio</h2>
            <img src={backdrop} alt="Whizkids teacher" />
            <div className="columns standout-chuks" />
            <a className="button is-rounded primary-button" href="#">
              EXPLORE
            </a>
            {/* <a className="button is-rounded secondary-button" href="#">
          View All
        </a> */}
          </div>
        </div>
        <div className="contact-form">
          <div className="container">
            <div className="columns">
              <div className="column is-three-fifths is-offset-one-fifth">
                <h2>Talk to Us</h2>
                <form
                  name="contact"
                  method="POST"
                  action="/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group columns">
                    <div className="column">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="column">
                      <label htmlFor="">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Message</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      name="message"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="button-container">
                    <button
                      className="button is-rounded secondary-button"
                      href="#"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    about: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "about-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            description1
            description2
          }
        }
      }
    }
    blogs: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            serviceIcon
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
          html
        }
      }
    }
  }
`;
