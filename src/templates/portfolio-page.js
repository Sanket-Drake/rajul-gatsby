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
  pricing
}) => (
  <section className=" section--gradient">
    <div className="container">
      <div className="columns">
        <div className="content">
          <div className="stand-out">
            <div className="container">
              <h2>Portfolio</h2>
              <h4>
                Having used discount toner cartridges for twenty years, there
                have been a lot of changes in the toner cartridge market. The
                market today is approximately a twenty billion dollar business.
              </h4>
              <div className="columns">
                <div className="column is-4">
                  <img src={backdrop} alt="Whizkids teacher" />
                </div>
                <div className="column is-4">
                  <img src={backdrop} alt="Whizkids teacher" />
                </div>
                <div className="column is-4">
                  <img src={backdrop} alt="Whizkids teacher" />
                </div>
              </div>

              <div className="columns">
                <div className="column is-4">
                  <img src={backdrop} alt="Whizkids teacher" />
                </div>
                <div className="column is-4">
                  <img src={backdrop} alt="Whizkids teacher" />
                </div>
                <div className="column is-4">
                  <img src={backdrop} alt="Whizkids teacher" />
                </div>
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

const PortfolioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

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
    />
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default PortfolioPage;

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
  }
`;
