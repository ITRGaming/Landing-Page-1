import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import logoNav from "./images/logo-nav.png";
import sliderImg from "./images/graduation.jpg";
import course1 from "../src/images/course/1.jpg";
import course2 from "../src/images/course/2.jpg";
import course3 from "../src/images/course/3.jpg";
import course4 from "../src/images/course/4.jpg";
import course5 from "../src/images/course/5.jpg";
import course6 from "../src/images/course/6.jpg";
import course7 from "../src/images/course/7.jpg";
import course8 from "../src/images/course/8.jpg";
import course9 from "../src/images/course/9.jpg";
import course10 from "../src/images/course/10.jpg";
import course11 from "../src/images/course/11.jpg";
import course12 from "../src/images/course/12.jpg";
import course13 from "../src/images/course/13.jpg";
import course14 from "../src/images/course/14.jpg";
import course15 from "../src/images/course/15.jpg";
import course16 from "../src/images/course/16.jpg";
import course17 from "../src/images/course/17.jpg";
import course18 from "../src/images/course/18.jpg";
import course19 from "../src/images/course/19.jpg";
import course20 from "../src/images/course/20.jpg";
import course21 from "../src/images/course/21.jpg";
import course22 from "../src/images/course/22.jpg";
import course23 from "../src/images/course/23.jpg";
import course24 from "../src/images/course/24.jpg";
import course25 from "../src/images/course/25.jpg";
import course26 from "../src/images/course/26.jpg";
import course27 from "../src/images/course/27.jpg";
import course28 from "../src/images/course/28.jpg";
import course29 from "../src/images/course/29.jpg";
import course30 from "../src/images/course/30.jpg";
import course31 from "../src/images/course/31.jpg";
import course32 from "../src/images/course/32.jpg";
import course33 from "../src/images/course/33.jpg";
import course34 from "../src/images/course/34.jpg";
import course35 from "../src/images/course/35.jpg";
import course36 from "../src/images/course/36.jpg";
import course37 from "../src/images/course/37.jpg";

function App() {

  const [activeTab, setActiveTab] = useState("PHD");

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    // displayProgramme(activeTab);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logoNav} alt="" height="60" />
          </a>
          <form className="d-flex">
            <button
              type="button"
              className="btn btn-primary form-contro"
              data-bs-toggle="modal"
              data-bs-target="#modal"
            >
              Apply Now
            </button>
          </form>
          <div
            className="modal fade"
            id="modal"
            tabindex="-1"
            aria-labelledby="moadalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4">.col-md-4</div>
                      <div className="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                      <div className="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
                    </div>
                    <div className="row">
                      <div className="col-sm-9">
                        Level 1: .col-sm-9
                        <div className="row">
                          <div className="col-8 col-sm-6">
                            Level 2: .col-8 .col-sm-6
                          </div>
                          <div className="col-4 col-sm-6">
                            Level 2: .col-4 .col-sm-6
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="">
        <img src={sliderImg} alt=" Students" className="img-fluid" />
      </div>

      <section id="programmes">
        <div className="container py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Preparing you for the challenges of tomorrow
            </h6>
            <h1 className="mb-5">Our Future-ready Programmes</h1>
          </div>
          <div>
            <div className="tab">
              {" "}
              <button
                className={`tablinks ${activeTab === "PHD" ? "active" : ""}`}
                onClick={() => handleClick("PHD")}
                id="defaultOpen"
              >
                Ph.D.
              </button>{" "}
              <button
                className={`tablinks ${
                  activeTab === "Masters" ? "active" : ""
                }`}
                onClick={() => handleClick("Masters")}
              >
                Masters
              </button>{" "}
              <button
                className={`tablinks ${
                  activeTab === "Bachelors" ? "active" : ""
                }`}
                onClick={() => handleClick("Bachelors")}
              >
                Bachelors
              </button>{" "}
              <button
                className={`tablinks ${
                  activeTab === "Diploma" ? "active" : ""
                }`}
                onClick={() => handleClick("Diploma")}
              >
                Diploma
              </button>{" "}
            </div>

            <div
              id="PHD"
              className="tabcontent"
              style={{ display: activeTab === "PHD" ? "block" : "none" }}
            >
              <div className="phd-carousel position-relative">
                <OwlCarousel
                  nav
                  responsive={{
                    0: {
                      items: 1,
                    },
                    770: {
                      items: 3,
                    },
                  }}
                >
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course11}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Management)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course4}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Science)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course2}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Commerce)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course3}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Arts & Huminities)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course13}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Ph.D. Program (Engineering & Technology)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course10}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Ph.D. Program (Information & Technology)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course7}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Pharmacy)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course33}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Life Science)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course4}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Yoga & Naturopathy)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course14}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Law)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course24}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Ph.D. Program (Library & Information Science)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course34}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Ph.D. Program (Journalism & Mass Communication)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course5}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Education)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course15}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Ph.D. Program (Hotel Management)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course25}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Ph.D. Program (Media & Entertainment)
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              id="Masters"
              className="tabcontent"
              style={{ display: activeTab === "Masters" ? "block" : "none" }}
            >
              <div className="phd-carousel position-relative">
                <OwlCarousel
                  loop
                  responsive={{
                    0: {
                      items: 1,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                    770: {
                      items: 3,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                  }}
                >
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course1}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Law (LLM)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course2}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Journalism & Mass Communication
                        (MAJMC)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course3}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Comperitive Religion & Philosophy (MA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course4}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Defence Studies (M.A)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course5}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Economics (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course6}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Education (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course7}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In English (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course8}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Geography (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course9}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Hindi (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course10}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In History (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course11}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Home Science [M.A]
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course12}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Marathi(M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course13}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Political Science(M.A)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course14}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Psychology (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course15}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Arts In Public Administration (M.A)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course16}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Sanskrit (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course17}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Arts In Sociology (M.A)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course18}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Masters in Business Administration (MBA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course19}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Computer Applications (MCA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course20}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Commerce (M. Com)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course21}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Library & Information Science (M. Lib.)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course22}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Pharmacy (M-Pharm)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course23}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science in Electrononics (MSc-Electrononics)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course24}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science in Information Technology (MSc-IT)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course25}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Science (MSc)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course26}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science In Bio Chemistry (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course27}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Science In Biology (MSc)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course28}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science In Biotechnology (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course29}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Science In Botany (MSc)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course30}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science in Micro Biology (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course31}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science In Chemistry (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course32}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science In Computer Science (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course33}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Master of Science In Mathematics (MSc)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course34}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Science In Physics (MSc)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course35}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Science In Zoology (MSc)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course36}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Social Work (MSW)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course37}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Master of Philosophy (M.Phil)</p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              id="Bachelors"
              className="tabcontent"
              style={{ display: activeTab === "Bachelors" ? "block" : "none" }}
            >
              <div className="phd-carousel position-relative">
                <OwlCarousel
                  loop
                  responsive={{
                    0: {
                      items: 1,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                    770: {
                      items: 3,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                  }}
                >
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course10}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Arts (BA)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course20}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelors in Business Administration (BBA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course30}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Arts In Journalism & Mass Communication
                        (BA-JMC)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course29}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelors in Business Administration & Bachelors of Law
                        (BBA-LLB)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course19}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Computer Applications (BCA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course9}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Commerce (B.Com)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course28}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Library & Information Science (B.Lib.)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course18}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Pharmacy (B-Pharma)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course8}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Science (B.Sc.)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course27}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Biotechnology
                        (B.Sc.-Biotechnology)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course17}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Microbiology (B.Sc.-Microbiology)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course7}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Computer Science (B.Sc.CS)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course26}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Fashion Designing (B.Sc.FD)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course16}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Interior Designing (B.Sc.ID)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course6}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Science in Information technology (B.Sc.IT)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course25}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Social Work (BSW)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course15}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Bachelor of Technology (B-Tech)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course5}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Bachelor of Arts Public Administration (BA)
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>

            <div
              id="Diploma"
              className="tabcontent"
              style={{ display: activeTab === "Diploma" ? "block" : "none" }}
            >
              <div className="phd-carousel position-relative">
                <OwlCarousel
                  loop
                  responsive={{
                    0: {
                      items: 1,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                    770: {
                      items: 3,
                      autoplay: true,
                      autoplayTimeout: 1000,
                    },
                  }}
                >
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course2}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Diploma in Business Administration (DBA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course12}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Nutrition (DIN)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course22}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Engineering (DE)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course32}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Diploma in Journalism and Mass Communication (D-JMC)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course3}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Interior Design (DID)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course13}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Diploma in Computer Application (DCA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course23}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Pharmacy [D.Pharm]</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course33}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Yoga (DIY)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course4}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Naturopathy (DN)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course14}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Diploma in Education</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course24}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Diploma in Hotel Management amd Catering Technology
                        (DHMCT)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course34}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Business Administration (PGDBA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course5}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Computer Applications (PGDCA)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course15}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Naturopathy (PGD)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course25}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Rural Development (PGD)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course35}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">Doctor of Philosophy (PHD)</p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course6}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Yoga Science and Naturopathy
                        (PGDYSN)
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-item text-center mx-3">
                    <div className="position-relative overflow-hidden">
                      {" "}
                      <img
                        className="img-fluid1"
                        src={course16}
                        loading="lazy"
                        alt=""
                      />
                      <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                        <a
                          href="/"
                          className="flex-shrink-0 btn btn-sm btn-primary px-3        border-end"
                          style={{
                            borderRadius: "30px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0">
                        Post Graduate Diploma in Nutrition and Dietetics (PGDND)
                      </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer></footer>
    </div>
  );
}

export default App;
