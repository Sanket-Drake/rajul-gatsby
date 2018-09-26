import React from "react";
import PropTypes from "prop-types";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import backdrop from "../img/offset-printing.jpg";

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
  edges
}) => (
  <section className=" section--gradient">
    <div className="container">
      <div className="columns">
        <div className="content">
          <div className="stand-out">
            <div className="container">
              <h2>Products</h2>
              <h4>
                Having used discount toner cartridges for twenty years, there
                have been a lot of changes in the toner cartridge market. The
                market today is approximately a twenty billion dollar business.
              </h4>

              <div className="columns standout-chuks">
                {edges.map(({ node: blog }, index) => (
                  <div className="column standout-chunk" key={index}>
                    <div className="standout-illustrator">
                      <img
                        src={blog.frontmatter.serviceIcon}
                        alt="Whizkids teacher"
                      />
                    </div>
                    <h3>{blog.frontmatter.title}</h3>
                    <div>{blog.frontmatter.description}</div>
                    <a
                      className="button is-rounded primary-button"
                      href={blog.fields.slug}
                    >
                      EXPLORE
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array
  })
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.product;
  const { edges } = data.blogs;

  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
      edges={edges}
    />
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    product: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
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
