import React from "react";
import waterfordimg from "../assets/waterfordimg.webp";
import waterfordimg1 from "../assets/waterfordimg1.webp";
import waterfordimg2 from "../assets/waterfordimg2.webp";
import waterfordimg3 from "../assets/waterfordimg3.webp";
import { Carousel } from "react-bootstrap";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="carouselslider">
        <div className="carousel">
          <Carousel interval={500} className="carouselContainer">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={waterfordimg}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={waterfordimg1}
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={waterfordimg2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={waterfordimg3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="project-description js-scroll fade-in-bottom scrolled text-sm-start">
            <h4 className="border-top"> About Prestige Waterford</h4>
            <p>
              A delectable community of apartment homes in a wide range of room
              configurations to suit every need.
            </p>

            <p>
              Vaastu compliant and designed to emphasise privacy and lavish use
              of space.
            </p>

            <p>
              Step outside the home and you are greeted by a panorama of
              terraces, step walls, hidden courtyards, reflective ponds, seating
              areas, a maze garden, a mounded landscape garden, and formal
              courtyards. All combining to afford a magnificent view that can be
              enjoyed undisturbed from every apartment.
            </p>

            <p>
              When you want to indulge your leisure the clubhouse answers well,
              with its myriad luxury recreational amenities. And for the
              practical necessities of life, Prestige Waterford is situated in
              proximity to major retail hubs, malls, workspots and educational
              institutions. It is also well connected to other parts of the city
              though arterial roads.
            </p>
          </div>

          <div id="project-amenities" className=" mb-5  ">
            <div className="sub-section-title js-scroll fade-in-top scrolled">
              <h4 className="text-sm-start my-3">Amenities</h4>
            </div>
            <div className="d-flex has-text-centered js-scroll fade-in-bottom scrolled">
              <div className="d-flex flex-direction-column flex-wrap">
                {" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/8e1b3bde-a375-49f7-9e68-a60fa76abde5.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Swimming Pool</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/fec17cd3-f9e1-4a78-bce5-c91b5ed8bd18.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Badminton Court</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/962aa6c7-a1d9-4a6d-a80f-8f9c74c1f20d.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Tennis Court</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/a0422f88-f949-46f3-b39c-3d012a54d346.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>GYM</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/6622d1bc-4610-4f1c-aa24-c4ccab1db8d4.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Mini Theater</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/13fd8897-2b83-4c08-8622-3c0f726a70c7.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Health Club</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/ed747f42-2905-4060-bd43-a33caf940d67.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Party Halls</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/09df107f-2ede-4321-944f-d3243066d92b.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Convenience Store</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/9187aac7-22a1-4b29-b931-05f4900a18fb.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Multipurpose Court</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/ebcd3ed8-1a96-41c5-9955-b31e70472219.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Childrens Play Area</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/61d71d66-1a86-46f3-b858-b20e79c301e1.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Cricket Practice Pitch</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/5ecd6c7a-010c-4730-8377-ff80813e052f.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Event Lawns</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/47084cd5-c6f0-431c-8e9e-66004ab8ce1d.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="project-amenities-desc">
                      <span>Joggers Park</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="project-amenities-items">
                    <div className="project-amenities-icon">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/9d8fef71-f543-4472-8800-ac695b04951e.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="">
                      <span>Outdoor Game Area</span>
                    </div>
                  </div>
                </div>{" "}
                <div className="column">
                  <div className="">
                    <div className="">
                      <picture>
                        <img
                          src="https://dsc1bri60i31v.cloudfront.net/amenity/9f88e66f-8217-4d23-8a3d-b4e8af488b70.svg"
                          width="50"
                          height="50"
                        />
                      </picture>
                    </div>
                    <div className="">
                      <span>Bicycle Track</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="google-map">
            <h4 className="text-sm-start">Location</h4>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7390.9396976208845!2d77.74119667484158!3d12.982289787334064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1140a51448ab%3A0xc1e3bb2948afbff4!2sPrestige%20Waterford!5e1!3m2!1sen!2sus!4v1738193547435!5m2!1sen!2sus"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="gallery">
            <h4 className="text-sm-start">Gallery</h4>
            <div className="d-flex justify-content-between flex-wrap">
              <img
                className="d-block galleryImg"
                src={waterfordimg}
                alt="First slide"
              />
              <img
                className="d-block galleryImg"
                src={waterfordimg}
                alt="First slide"
              />
              <img
                className="d-block galleryImg"
                src={waterfordimg}
                alt="First slide"
              />
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="sidebar-content border-bottom border-primary">
            <div className="sidebar-header">
              <div className="text-center p-3">
                <picture>
                  <source
                    srcSet="https://preossdev.s3.ap-south-1.amazonaws.com/projectimage/5d6c7736-7004-41cb-bfc2-3a9bdc9d0466.webp"
                    type="image/webp"
                  />

                  <source
                    srcSet="https://preossdev.s3.ap-south-1.amazonaws.com/projectimage/5d6c7736-7004-41cb-bfc2-3a9bdc9d0466.png"
                    type="image/png"
                  />

                  <img
                    src="https://preossdev.s3.ap-south-1.amazonaws.com/projectimage/5d6c7736-7004-41cb-bfc2-3a9bdc9d0466.png"
                    width="70"
                    height="70"
                    className="img-fluid rounded-circle shadow border border-primary p-1"
                    alt="Project Image"
                  />
                </picture>
              </div>

              <div className="project-title text-center p-4">
                <h4 className="project_name_bind font-weight-bold ">
                  Prestige Waterford
                </h4>
                <span className="project_Address d-block text-muted mt-2">
                  ECC Rd, Pattandur Agrahara, Whitefield, Bangalore - 560066
                </span>
              </div>
            </div>
          </div>

          <div className="project-configurations p-2">
            <ul className="list-unstyled d-flex flex-row flex-wrap justify-content-between border-bottom border-primary projetct_attributes">
              <li className="hide_property_type mb-3">
                <div className="project-configurations-items d-flex align-items-center">
                  <div className="project-configurations-icon mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-building-skyscraper"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      strokeWidth="0.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h44v24H0z" fill="none"></path>
                      <path d="M3 21l18 0"></path>
                      <path d="M5 21v-14l8 -4v18"></path>
                      <path d="M19 21v-10l-6 -4"></path>
                      <path d="M9 9l0 .01"></path>
                      <path d="M9 12l0 .01"></path>
                      <path d="M9 15l0 .01"></path>
                      <path d="M9 18l0 .01"></path>
                    </svg>
                  </div>
                  <div className="project-configurations-desc">
                    <h4 className="font-weight-bold">Project Type</h4>
                    <span className="project_propertytype">Apartment</span>
                  </div>
                </div>
              </li>
              <li className="hide_bedrooms mb-3">
                <div className="project-configurations-items d-flex align-items-center">
                  <div className="project-configurations-icon mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-border-inner"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="0.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h44v24H0z" fill="none"></path>
                      <path d="M4 12l16 0"></path>
                      <path d="M12 4l0 16"></path>
                      <path d="M4 4l0 .01"></path>
                      <path d="M8 4l0 .01"></path>
                      <path d="M16 4l0 .01"></path>
                      <path d="M20 4l0 .01"></path>
                      <path d="M4 8l0 .01"></path>
                      <path d="M20 8l0 .01"></path>
                      <path d="M4 16l0 .01"></path>
                      <path d="M20 16l0 .01"></path>
                      <path d="M4 20l0 .01"></path>
                      <path d="M8 20l0 .01"></path>
                      <path d="M16 20l0 .01"></path>
                      <path d="M20 20l0 .01"></path>
                    </svg>
                  </div>
                  <div className="project-configurations-desc">
                    <h4 className="font-weight-bold">Bedrooms</h4>
                    <span className="projetct_attributes">3, 4 BHK</span>
                  </div>
                </div>
              </li>
              <li className="hide_project_size mb-3">
                <div className="project-configurations-items d-flex align-items-center">
                  <div className="project-configurations-icon mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-shape"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="0.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h44v24H0z" fill="none"></path>
                      <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M5 7l0 10"></path>
                      <path d="M7 5l10 0"></path>
                      <path d="M7 19l10 0"></path>
                      <path d="M19 7l0 10"></path>
                    </svg>
                  </div>
                  <div className="project-configurations-desc">
                    <h4 className="font-weight-bold">Development Size</h4>
                    <span className="project_size_bind">16.6 Acres</span>
                  </div>
                </div>
              </li>
              <li className="hide_nounits mb-3">
                <div className="project-configurations-items d-flex align-items-center">
                  <div className="project-configurations-icon mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-grid-dots"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="0.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h44v24H0z" fill="none"></path>
                      <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                      <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    </svg>
                  </div>
                  <div className="project-configurations-desc">
                    <h4 className="font-weight-bold">Total Units</h4>
                    <span className="project_NoUnits_bind">689 Units</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-3">
            <ul className="list-unstyled d-flex flex-row flex-wrap justify-content-between border-bottom border-primary">
              <li className="brochure">
                <a
                  href=""
                  open-sidebar="brochure-sidebar"
                  className="brochurContainer"
                >
                  <button className="btn btn-primary brochurLink">
                    Download Brochure
                  </button>
                </a>
              </li>
              <li className="project-price-and-contact-item">
                <a
                  href="tel:18003130080"
                  className="btn btn-outline-primary w-100 d-none d-md-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h44v24H0z" fill="none"></path>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  </svg>
                </a>
              </li>
              <li className="project-price-and-contact-item">
                <a
                  href="tel:18003130080"
                  className="btn btn-outline-secondary w-100 d-block d-md-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h44v24H0z" fill="none"></path>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  </svg>
                </a>
              </li>
              <li className="project-price-and-contact-item">
                <a
                  className="btn btn-outline-success w-100"
                  href="https://maps.google.com/?cid=13971216255020941300"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-map-pin"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h44v24H0z" fill="none"></path>
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <a
              href="Javascript:void(0);"
              className="btn btn-outline-info w-100 mt-3 d-none"
              id="environmental-clearance-link"
            >
              Environmental Clearance
            </a>
          </div>

          <div className="request-callback-form-detail text-sm-start">
            <div className="mb-4">
              <h5 className="text-uppercase font-weight-bold ">
                Request a Callback
              </h5>
            </div>

            <form
              className="form"
              id="request_call_back_frm"
              noValidate="noValidate"
            >
              <div className="row">
                <div className="col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="your_name" className="form-label">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      name="your_name"
                      className="form-control inputElement"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="mobile_callback" className="form-label">
                      Mobile*
                    </label>
                    <input
                      type="text"
                      id="mobile_callback"
                      name="mobile_callback"
                      className="form-control inputElement"
                      placeholder="Your Mobile"
                    />
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="email_callback" className="form-label">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      id="email_callback"
                      name="email_callback"
                      className="form-control inputElement"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="schedule_date" className="form-label">
                      Schedule Date
                    </label>
                    <input
                      type="text"
                      name="schedule_date"
                      id="schedule_date"
                      className="form-control inputElement"
                      placeholder="Enter Schedule Date"
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="form-group">
                    <label
                      htmlFor="requestcallback_time"
                      className="form-label"
                    >
                      Schedule Time
                    </label>
                    <input
                      type="text"
                      className="form-control inputElement"
                      placeholder="Select Time"
                      id="requestcallback_time"
                      name="requestcallback_time"
                      readOnly
                    />
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="agree_to_be_contacted"
                      id="agree_to_be_contacted"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="agree_to_be_contacted"
                    >
                      Yes, I want to stay informed and receive newsletters and
                      marketing updates.
                    </label>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Send OTP
                  </button>
                </div>
              </div>
            </form>

            <form className="form" id="otp_verify_frm" noValidate="noValidate">
              <div className="row">
                <div className="col-12 mb-3">
                  <div className="form-group">
                    <label htmlFor="otp_dd" className="form-label">
                      OTP*
                    </label>
                    <input
                      type="text"
                      name="otp_dd"
                      id="otp_dd"
                      className="form-control"
                      placeholder="OTP"
                      maxLength="6"
                    />
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
