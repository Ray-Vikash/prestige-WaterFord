import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container bg-dark bg-gradient bg-opacity-75 text-warning mr-0 ml-0 pt-0 pb-0 tops">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 border-top  mr-3 ml-3">
          <div className="col mb-3 fotlink">
            <h4>Reach Us</h4>
            <ul className="nav flex-column text-white">
              <li className="nav-item mb-2 ">
                <span>
                  <b className="has-text-weight-semibold">
                    Corporate Address:{" "}
                  </b>
                  <a
                    id="anc"
                    href="https://maps.app.goo.gl/3BMxbJ8ae54hP64UA"
                    target="_blank"
                    rel="nofollow"
                  >
                    <br />
                    Prestige Falcon Towers,
                    <br /> 19, Brunton Road,
                    <br /> Bengaluru - 560025,
                    <br /> Karnataka, India
                  </a>
                </span>
              </li>
              <li className="nav-item mb-1 ">
                <span>
                  For sales enquiries:
                  <a id="anc" href="tel:18003130080">
                    <b className="">
                      {" "}
                      <br />
                      1800 313 0080
                    </b>
                  </a>
                </span>
              </li>
              <li className="nav-item mb-1 ">
                <span>
                  For other enquiries:
                  <a id="anc" href="tel:+918025591080">
                    <b className="">
                      <br /> +91 80 2559 1080
                    </b>
                  </a>
                </span>
              </li>
              <li className="nav-item mb-1 ">
                <span>
                  Email:
                  <a
                    id="anc"
                    className="email-text"
                    href="mailto:properties@prestigeconstructions.com"
                  >
                    <b className="">
                      <br />
                      properties@prestigeconstructions.com
                    </b>
                  </a>
                </span>
              </li>
              <li className="nav-item mb-1 text-white">
                <div className="mt-1">
                  <ul className="list-unstyled d-flex">
                    <li>
                      <a
                        href="https://www.facebook.com/Prestige.group"
                        target="_blank"
                        rel="nofollow"
                        className="social-icons"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/prestigeconstructions"
                        target="_blank"
                        rel="nofollow"
                        className="social-icons"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                          <path d="M16.5 7.5l0 .01"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/prestigegroup"
                        target="_blank"
                        rel="nofollow"
                        className="social-icons"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/prestige-group-bangalore"
                        target="_blank"
                        rel="nofollow"
                        className="social-icons"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                          <path d="M8 11l0 5"></path>
                          <path d="M8 8l0 .01"></path>
                          <path d="M12 16l0 -5"></path>
                          <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@prestigegroupindia/videos"
                        target="_blank"
                        rel="nofollow"
                        className="social-icons"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                          <path d="M10 9l5 3l-5 3z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="col mb-3 fotlink ">
            <h4>Quick Menu</h4>
            <ul className="nav flex-column text-white">
              <li className="nav-item mb-2 ">
                <a id="anc" href="#" className="nav-link p-0 ">
                  About US
                </a>
              </li>
              <li className="nav-item mb-2 ">
                <a id="anc" href="#" className="nav-link p-0">
                  Residential
                </a>
              </li>
              <li className="nav-item mb-2 ">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Commercial
                </a>
              </li>
              <li className="nav-item mb-2 ">
                <a id="anc" href="#" className="nav-link p-0  ">
                  Video
                </a>
              </li>
              <li className="nav-item mb-2 text-white">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Event
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3 fotlink">
            <h4>Quick Links</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Customer Portal
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Crisil Rating
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Referral
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  EMI Calculator
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Interior Design
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  NRIs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3 fotlink">
            <h4>Investors</h4>

            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Investors
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Financial Performance
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Share Holding Pattern
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  AGM Notice
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  Annual Report
                </a>
              </li>
              <li className="nav-item mb-2">
                <a id="anc" href="#" className="nav-link p-0 ">
                  ESG
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <div className="d-flex  flex-sm-row justify-content-between py-2 my-2 mr-5 ml-5 border-top copyright">
          <p className="text-white mr-5 ml-5">
            © 2025 Official Website of Prestige Estates Projects Ltd. | All
            Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
