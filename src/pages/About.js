import React, { Component, Fragment } from 'react'
import NavBar from '../Component/NavBar'

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <section className=" mt-5 page-section bg-primary text-white mb-0" id="about">
  <div className="container">
    {/* About Section Heading*/}
    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
    {/* Icon Divider*/}
    <div className="divider-custom divider-light">
      <div className="divider-custom-line" />
      <div className="divider-custom-icon"><i className="fas fa-star" /></div>
      <div className="divider-custom-line" />
    </div>
    {/* About Section Content*/}
    <div className="row">
      <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
      <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
    </div>
    {/* About Section Button*/}
    <div className="text-center mt-4">
      <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
        <i className="fas fa-download me-2" />
        Free Download!
      </a>
    </div>
  </div>
</section>

      </Fragment>
    )
  }
}
