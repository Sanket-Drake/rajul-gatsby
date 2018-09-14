import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import backdrop from "../img/offset-printing.jpg";

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

  render() {
    const { data } = this.props;
    const { edges: blogs } = data.blogs;
    console.log(blogs);
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
            <h2>About us</h2>
            <h3>Know us a little better</h3>
            <div className="columns">
              <div className="column is-4">
                <p>
                  We have been helping businesses to attract more customers for
                  over a decade. Specializing in printing, graphic design, and
                  website development, we offer a wide variety of services to
                  help companies promote themselves, in one place. Delivered
                  with personal guidance and support you can rely on. Achieving
                  quality results, every time. Our in-house team is made up of
                  friendly and talented designers, website developers, and print
                  professionals. Together, we have all the expertise, experience
                  and knowledge to provide you with outstanding service that is
                  of the highest quality.
                </p>
                <div className="column" />

                <p>
                  We specialize in designing and developing all types of
                  marketing materials like corporate profiles, brochures,
                  newsletters, flyers, insertions, annual reports, leaflets,
                  posters, direct mailers, hoardings… the list is endless.
                </p>
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
              {blogs.map(({ node: blog }) => (
                <div className="column standout-chunk">
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
