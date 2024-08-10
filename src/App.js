import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
// import { CitySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
// import { FontAwesomeIcon } from 'react-fontawesome';
import logoNav from "./images/logo-nav.png";
// import sliderImg from "./images/councelorCalling.jpg";
// import sliderImg2 from "./images/student3.jpg";
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
import alumni1 from "../src/images/alumni/New1.png";
import alumni2 from "../src/images/alumni/New2.jpg";
import alumni3 from "../src/images/alumni/New3.jpg";
import alumni4 from "../src/images/alumni/New4.jpg";
import alumni5 from "../src/images/alumni/New5.jpg";
import alumni6 from "../src/images/alumni/New6.jpg";
import alumni7 from "../src/images/alumni/New7.jpg";
import alumni8 from "../src/images/alumni/New8.jpg";
import alumni9 from "../src/images/alumni/New9.jpg";
import alumni10 from "../src/images/alumni/New10.jpg";
import alumni11 from "../src/images/alumni/New11.jpg";
import alumni12 from "../src/images/alumni/New12.jpg";
import alumni13 from "../src/images/alumni/New13.jpg";
import alumni14 from "../src/images/alumni/New14.jpg";
import alumni15 from "../src/images/alumni/New15.jpg";
import alumni16 from "../src/images/alumni/New16.jpg";
import alumni17 from "../src/images/alumni/New17.jpg";

function App() {
  // const [stateid, setstateid] = useState(0);
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
        </div>
      </nav>
      <div className="row col-12 me-1 ">
        <div className="gridDiv">
          <div className="col-4 textImg"></div>
          <div className="col-5 centerImg"></div>
          <form className="g-3 row enquiryForm">
            <div className="header">
              <h3 className="title">Enquire Now</h3>
              {/* <i className="imp">
                *Please provide the information below, and our counsellor will
                get in touch with you.
              </i> */}
            </div>
            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
              <label className="form-label " name="Enter your Name">
                Enter your Name
              </label>
              <br />
              <input
                className="form-control "
                type="text"
                name="Enter your Name"
              ></input>
            </div>
            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
              <label className="form-label " name="Enter your Email">
                Enter your Email
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="Enter your Email"
              ></input>
            </div>

            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
              <label className="form-label" name="Enter your Number">
                Enter your Number
              </label>
              <br />
              <input
                className="form-control"
                type="tel"
                name="Enter your Number"
                pattern={"[0-9]{5}-[0-9]{5}"}
              ></input>
            </div>
            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
            <label className="form-label" name="Select your state">
                Select your State
              </label>
              <select
                className="form-control state"
                id="state"
                name="state"
                required=""
              >
                <option value="Andra Pradesh">Andra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra Nagar Haveli">Dadra Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
              </select>
            </div>
            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
            <label className="form-label" name="Select your city">
                Select your City
              </label>
              <select
                className="form-control city"
                id="city"
                name="city"
                required=""
              >
                <option value="">Select City</option>
              </select>
            </div>
            <div className="form-group col-lg-6 col-md-6 mb-1 input-group-sm">
            <label className="form-label" name="Degree you are looking for">
                Degree you are looking for
              </label>
              <select
                className="form-control level"
                id="level"
                name="level"
                required=""
              >
                <option value="Doctorate">Doctorate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Post Graduate Diploma">
                  Post Graduate Diploma
                </option>
                <option value="Graduate">Graduate</option>
                <option value="Diploma">Diploma</option>
                <option value="Advance Diploma">Advance Diploma</option>
                <option value="Management Certification Courses">
                  Management Certification Courses
                </option>
                <option value="Professional Courses">
                  Professional Courses
                </option>
                <option value="Advance Certificate">Advance Certificate</option>
              </select>
            </div>
            <div className="form-group input-group-sm">
              <label className="form-label" name="Program you are looking for">
                Program you are looking for
              </label>
              <select
                className="form-control course"
                id="course"
                name="course"
                required=""
              >
                <option value="">Select course</option>
              </select>
            </div>
            <div className="checkbox">
              <input type="checkbox"></input>
              <p className="imp">
                By clicking on the above button, I authorize ISTM and/or their
                representative to contact me via Phone, SMS, WhatsApp, and/or
                email.
              </p>
            </div>
            <div className="">
              <button type="submit" className="customBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="blueSection">
        <section id="programmes">
          <div className="container py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="text-center">
              <h1 className="heading">
                <span className="impGradeint">Our Future-ready</span> Programmes
              </h1>
              <h6 className="subTitle text-center px-3">
                Preparing you for the challenges of tomorrow
              </h6>
            </div>
            <div>
              <div className="tab">
                <button
                  className={`tablinks ${activeTab === "PHD" ? "active" : ""}`}
                  onClick={() => handleClick("PHD")}
                  id="defaultOpen"
                >
                  Ph.D.
                </button>
                <button
                  className={`tablinks ${
                    activeTab === "Masters" ? "active" : ""
                  }`}
                  onClick={() => handleClick("Masters")}
                >
                  Masters
                </button>
                <button
                  className={`tablinks ${
                    activeTab === "Bachelors" ? "active" : ""
                  }`}
                  onClick={() => handleClick("Bachelors")}
                >
                  Bachelors
                </button>
                <button
                  className={`tablinks ${
                    activeTab === "Diploma" ? "active" : ""
                  }`}
                  onClick={() => handleClick("Diploma")}
                >
                  Diploma
                </button>
              </div>

              <div
                id="PHD"
                className="tabcontent"
                style={{ display: activeTab === "PHD" ? "block" : "none" }}
              >
                <div className="phd-carousel position-relative">
                  <OwlCarousel
                    loop
                    autoplay
                    className="programCarousel"
                    responsive={{
                      0: {
                        items: 1,
                        autoplayTimeout: 3000,
                      },
                      770: {
                        items: 2,
                        autoplayTimeout: 3000,
                      },
                      1000: {
                        items: 3,
                        autoplayTimeout: 3000,
                      },
                    }}
                  >
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course11}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3 border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course4}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course2}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course3}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Ph.D. Program (Arts & Huminities)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course13}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course10}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course7}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course33}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course4}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Ph.D. Program (Yoga & Naturopathy)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course14}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course24}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course34}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course5}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course15}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course25}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                    autoplay
                    className="programCarousel"
                    responsive={{
                      0: {
                        items: 1,
                        autoplayTimeout: 3000,
                      },
                      770: {
                        items: 2,
                        autoplayTimeout: 3000,
                      },
                      1000: {
                        items: 3,
                        autoplayTimeout: 3000,
                      },
                    }}
                  >
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course1}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course2}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course3}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Master of Arts In Comperitive Religion & Philosophy
                          (MA)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course4}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course5}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Master of Arts In Economics (M.A)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course6}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Master of Arts In Education (M.A)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course7}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course8}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Master of Arts In Geography (M.A)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course9}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course10}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course11}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course12}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course13}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course14}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Master of Arts In Psychology (M.A)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course15}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course16}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course17}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Master of Arts In Sociology (M.A)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course18}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course19}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course20}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course21}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course22}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course23}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course24}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course25}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course26}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course27}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Master of Science In Biology (MSc)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course28}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course29}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Master of Science In Botany (MSc)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course30}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course31}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course32}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course33}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course34}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Master of Science In Physics (MSc)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course35}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Master of Science In Zoology (MSc)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course36}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course37}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                style={{
                  display: activeTab === "Bachelors" ? "block" : "none",
                }}
              >
                <div className="phd-carousel position-relative">
                  <OwlCarousel
                    loop
                    autoplay
                    className="programCarousel"
                    responsive={{
                      0: {
                        items: 1,
                        autoplayTimeout: 3000,
                      },
                      770: {
                        items: 2,
                        autoplayTimeout: 3000,
                      },
                      1000: {
                        items: 3,
                        autoplayTimeout: 3000,
                      },
                    }}
                  >
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course10}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course20}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course30}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course29}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Bachelors in Business Administration & Bachelors of
                          Law (BBA-LLB)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course19}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course9}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course28}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course18}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course8}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course27}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course17}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Bachelor of Science in Microbiology
                          (B.Sc.-Microbiology)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course7}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course26}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course16}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course6}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Bachelor of Science in Information technology
                          (B.Sc.IT)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course25}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course15}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course5}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                    autoplay
                    className="programCarousel"
                    responsive={{
                      0: {
                        items: 1,
                        autoplayTimeout: 3000,
                      },
                      770: {
                        items: 2,
                        autoplayTimeout: 3000,
                      },
                      1000: {
                        items: 3,
                        autoplayTimeout: 3000,
                      },
                    }}
                  >
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course2}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course12}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course22}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course32}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course3}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course13}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course23}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course33}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course4}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course14}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course24}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course34}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Post Graduate Diploma in Business Administration
                          (PGDBA)
                        </p>
                      </div>
                    </div>
                    <div className="testimonial-item text-center mx-3">
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course5}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course15}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course25}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course35}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course6}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                      <div className="position-relative overflow-hidden shadowImg">
                        <img
                          className="img-fluid1"
                          src={course16}
                          loading="lazy"
                          alt=""
                        />
                        <div className="w-100 d-flex justify-content-center position-absolute    bottom-0 start-0 mb-4">
                          <a
                            href="/"
                            className="flex-shrink-0 btn btn-sm btnCustom px-3        border-end"
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
                          Post Graduate Diploma in Nutrition and Dietetics
                          (PGDND)
                        </p>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="section_our_solution">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="our_solution_category">
              <div className="solution_cards_box sol_card_top_3">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <i className="fa-solid fa-pen-ruler"></i>
                  </div>
                  <div className="solu_title">
                    <h3>Study From The Best</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      ISTM offers a wide range of distinguished professors who
                      hold distinguished positions are offering excellent
                      education in the Business and Management field. Students
                      will be getting a wide range of exposure and a sufficient
                      amount of good education.
                    </p>
                  </div>
                </div>
              </div>
              <div className="solution_cards_box sol_card_top_3">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon"></div>
                  <div className="solu_title">
                    <h3>Career Developement</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      The institution offers a great opportunity for students to
                      do full grooming for their professional life. ISTM trains
                      students in such a way that they are able to answer
                      confidently in interviews and how well to conduct. The
                      overall look, personality, and intelligence of their
                      students.
                    </p>
                  </div>
                </div>
              </div>
              <div className="solution_cards_box sol_card_top_3">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon"></div>
                  <div className="solu_title">
                    <h3>Online Learning</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      Teachers and Students can reap the benefits of learning
                      virtually. Online education has become a significant part
                      of our life and help a lot of educational professionals to
                      teach their students in a more relaxed and concrete way.
                      ISTM has taken the plunge to provide high-quality
                      education at any cost.
                    </p>
                  </div>
                </div>
              </div>
              <div className="solution_cards_box sol_card_top_3">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon"></div>
                  <div className="solu_title">
                    <h3>Coaching</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      Courses are planned to develop optimism amongst students.
                      It helps to build legitimate skills and convey a vast
                      amount of knowledge for students to have a flourishing
                      career. Because of a good team of teachers and a
                      disciplined environment, students will be able to grasp it
                      quickly and choose the right job in an appropriate
                      company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <section id="alumni">
          <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="heading">
                <span className="impGradeint">Working</span> At
              </h1>
              <h6 className="section-title bg-white text-center text-primary px-3">
                Our Alumni
              </h6>
            </div>
            <div className="row g-4 alumni-carousel">
              <OwlCarousel
                loop
                responsive={{
                  0: {
                    items: 4,
                    autoplay: true,
                    autoplayTimeout: 5000,
                  },
                  // 450: {
                  //   items: 4,
                  //   autoplay: true,
                  //   autoplayTimeout: 5000,
                  // },
                  1000: {
                    items: 4,
                    autoplay: true,
                    autoplayTimeout: 5000,
                  },
                  1200: {
                    items: 8,
                    autoplay: true,
                    autoplayTimeout: 5000,
                  },
                }}
              >
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni1}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni2}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni3}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni4}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni5}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni6}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni7}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni8}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni9}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni10}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni11}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni12}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni13}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni14}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni15}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni16}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="testimonial-item text-center mx-3 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="team-item">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid2"
                        src={alumni17}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
