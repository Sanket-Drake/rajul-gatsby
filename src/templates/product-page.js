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
              <h2>Products{title}</h2>
              <h4>
                Having used discount toner cartridges for twenty years, there
                have been a lot of changes in the toner cartridge market. The
                market today is approximately a twenty billion dollar business.
              </h4>
              <div className="columns standout-chuks">
                <div className="column standout-chunk">
                  <div className="standout-illustrator">
                    <img src={backdrop} alt="Whizkids teacher" />
                  </div>

                  <h3>Teachers</h3>
                  <ul>
                    <li>Love for working with children</li>
                    <li>Classroom management</li>
                    <li>Love for their work</li>
                    <li>Energetic person</li>
                  </ul>
                  <a className="button is-rounded primary-button" href="#">
                    EXPLORE
                  </a>
                </div>
                <div className="column standout-chunk">
                  <div className="standout-illustrator">
                    <img src={backdrop} alt="Whizkids teacher" />
                  </div>

                  <h3>Mission & Philosophy</h3>
                  <ul>
                    <li>We care about others</li>
                    <li>We work as a team</li>
                    <li>Active and curious learners</li>
                    <li>Creative thinkers</li>
                  </ul>
                  <a className="button is-rounded primary-button" href="#">
                    EXPLORE
                  </a>
                </div>
                <div className="column standout-chunk">
                  <div className="standout-illustrator">
                    <img src={backdrop} alt="Whizkids teacher" />
                  </div>

                  <h3>Facilities</h3>
                  <ul>
                    <li>Eco Friendly Enviornment</li>
                    <li>Large play area</li>
                    <li>Natural light throughout</li>
                    <li>Easy access to sports facilities</li>
                  </ul>
                  <a className="button is-rounded primary-button" href="#">
                    EXPLORE
                  </a>
                </div>
                <div className="column standout-chunk">
                  <div className="standout-illustrator">
                    <img src={backdrop} alt="Whizkids teacher" />
                  </div>

                  <h3>Safety & Security</h3>
                  <ul>
                    <li>Only authorized staff and families can enter</li>
                    <li>People with photo ID can pick-up your child</li>
                    <li>Safe area so that children can play safely</li>
                    <li>Smoke detectors and fire extinguishers</li>
                  </ul>
                  <a className="button is-rounded primary-button" href="#">
                    EXPLORE
                  </a>
                </div>
              </div>
              <a className="button is-rounded primary-button" href="#">
                EXPLORE
              </a>
              <div className="stand-out">
                <div className="container">
                  <h2>Portfolio</h2>
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
                  <div className="columns standout-chuks" />
                  <a className="button is-rounded primary-button" href="#">
                    Get in touch
                  </a>
                </div>
              </div>
              <div className="product-advantages" ref="UniqueElementIdentifier">
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
