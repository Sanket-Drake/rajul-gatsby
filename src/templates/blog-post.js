import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";
import backdrop from "../img/offset-printing.jpg";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  shortBio,
  portfolioImage1,
  portfolioImage2
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="content">
            <div className="stand-out">
              <div className="container">
                <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <h4>{description}</h4>
                <div className="stand-out">
                  <div className="container">
                    <div className="columns">
                      <div className="column is-4">
                        <img src={backdrop} alt="Whizkids teacher" />
                      </div>
                      <div className="column is-8">
                        <p>{shortBio}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stand-out">
                  <div className="container">
                    <h2>Portfolio</h2>
                    <div className="columns">
                      {portfolioImage1.map((port, index) => (
                        <div key={index} className="column is-4">
                          <img src={port.image} alt={port.text} />
                        </div>
                      ))}
                    </div>
                    <div className="columns">
                      {portfolioImage2.map((port, index) => (
                        <div key={index} className="column is-4">
                          <img src={port.image} alt={port.text} />
                        </div>
                      ))}
                    </div>

                    <div className="columns standout-chuks" />
                    <a className="button is-rounded primary-button" href="#">
                      Get in touch
                    </a>
                  </div>
                </div>
                <div className="product-advantages">
                  <div className="container">
                    <h2>Advantages</h2>
                    <h3>
                      One more thing! Any time we start something new it is
                      exciting and we are very motivated and committed.
                    </h3>
                    <div className="columns">
                      <div className="column is-4">
                        <div className="card">
                          <h3>Fast Delivery </h3>
                          <img
                            src={backdrop}
                            alt="Whizkids teacher"
                            style={{ height: "50px", margin: 20 }}
                          />
                          <div className="content">
                            <p>YOUR DATA IS PROTECTED</p>
                            <p>
                              No matter how far along you are in your
                              sophistication as an amateur astronomer…
                            </p>
                          </div>
                          <a
                            className="button is-rounded primary-button"
                            href="#"
                          >
                            FIND MORE
                          </a>
                        </div>
                      </div>
                      <div className="column is-4">
                        <div className="card">
                          <h3>Fast Delivery </h3>
                          <img
                            src={backdrop}
                            alt="Whizkids teacher"
                            style={{ height: "50px", margin: 20 }}
                          />
                          <div className="content">
                            <p>YOUR DATA IS PROTECTED</p>
                            <p>
                              No matter how far along you are in your
                              sophistication as an amateur astronomer…
                            </p>
                          </div>
                          <a
                            className="button is-rounded primary-button"
                            href="#"
                          >
                            FIND MORE
                          </a>
                        </div>
                      </div>
                      <div className="column is-4">
                        <div className="card">
                          <h3>Fast Delivery </h3>
                          <img
                            src={backdrop}
                            alt="Whizkids teacher"
                            style={{ height: "50px", margin: 20 }}
                          />
                          <div className="content">
                            <p>YOUR DATA IS PROTECTED</p>
                            <p>
                              No matter how far along you are in your
                              sophistication as an amateur astronomer…
                            </p>
                          </div>
                          <a
                            className="button is-rounded primary-button"
                            href="#"
                          >
                            FIND MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      shortBio={post.frontmatter.shortBio}
      portfolioImage1={post.frontmatter.portfolioImage1}
      portfolioImage2={post.frontmatter.portfolioImage2}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        shortBio
        tags
        portfolioImage1 {
          image
          text
        }
        portfolioImage2 {
          image
          text
        }
      }
    }
  }
`;
