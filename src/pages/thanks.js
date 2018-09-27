import React from 'react'
import Link from 'gatsby-link'

const thanks = () => (
  <div className="container thanks-page">
    <h4>
      Thanks for contacting us. We will get back to you as soon as possible.
    </h4>
    <div className="button-container">
      <Link className="button is-rounded secondary-button" to="/">
        Go to Home page
      </Link>
      <Link className="button is-rounded secondary-button" to="/contact">
        Go to Contact Page
      </Link>
    </div>
  </div>
)

export default thanks
