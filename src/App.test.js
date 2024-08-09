import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




<div className="container-fluid" style = {{ marginTop: '30px' }}>
            <div className="row">


            <form class="g-3 row enquiryForm">
            <div className="header">
              <h3 className="title">Connect With Our Counsellor</h3>
              <i className="imp">
                *Please provide the information below, and our counsellor will
                get in touch with you.
              </i>
            </div>
            <div className="form-group col-lg-6 mb-1">
              <label className="form-label col-form-label-sm" name="Enter your Name">
                Enter your Name
              </label>
              <br />
              <input
                className="form-control col-form-control-sm"
                type="text"
                name="Enter your Name"
              ></input>
            </div>
            <div className="form-group col-lg-6 mb-1">
              <label className="form-label col-form-label-sm" name="Enter your Email">
                Enter your Email
              </label>
              <br />
              <input
                className="form-control col-form-control-sm"
                type="text"
                name="Enter your Email"
              ></input>
            </div>

            <div className="form-group col-lg-6 mb-1">
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
            <div className="form-group col-lg-6 mb-1">
              <label className="form-label" name="Enter your State">
                Enter your State
              </label>
              <br />
              <StateSelect
                countryid={101}
                onChange={(e) => {
                  setstateid(e.id);
                }}
                placeHolder="Select State"
                className="selectorIn"
              />
            </div>

            <div className="form-group col-lg-6 mb-1">
              <label className="form-label" name="Enter your City">
                Enter your City
              </label>
              <br />
              <CitySelect
                countryid={101}
                stateid={stateid}
                onChange={(e) => {
                  console.log(e);
                }}
                placeHolder="Select City"
              />
            </div>
            <div className="form-group col-lg-6 mb-1">
              <label className="form-label">
                Degree you are looking for *<br />
              </label>
              <select className="form-select" name="selecteddegree">
                <option value="doctorate">Doctorate</option>
                <option value="post graduation">Post Graduation</option>
                <option value="graduation">graduation</option>
                <option value="diploma">Diploma</option>
                <option value="certificate">Certificate</option>
              </select>
            </div>

            <div className="selector">
              <label className="form-label">
                Select course *<br />
              </label>
              <input className="form-control"></input>
            </div>
            <div className="checkbox">
              <input type="checkbox"></input>
              <p className="imp">
                By clicking on the above button, I authorize ISTM and/or their
                representative to contact me via Phone, SMS, WhatsApp, and/or
                email.
              </p>
            </div>
            <div className="modal-footer row">
              <button
                type="submit"
                className="btn btn-primary col-md custom-button"
              >
                Submit
              </button>
            </div>
          </form>


          <OwlCarousel
            loop
            autoplay="true"
            items={"1"}
            width={"100%"}
            className="topCarousel"
          >
            <div className="" data-bs-interval="2000">
              <img src={sliderImg} className="d-block " alt="Online Learning" />
            </div>
            <div className="" data-bs-interval="2000">
              <img
                src={sliderImg2}
                className="d-block "
                alt="Online Learning"
              />
            </div>
          </OwlCarousel>


                <div className="col-12 filter-content overflow-hidden">
                    <ul className="hover-option7 portfolio-wrapper grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-medium" style = {{ position: 'relative', height: '4576px' }}>
                        <li className="grid-sizer"></li>

                        <li className="grid-item diploma animate__fadeInUp" style = {{ position: 'absolute', left: '0%', top: '0px', animation: 'auto ease 0s 1 normal none running none' }}>
                            <div className="bg-white text-center">
                                <a href="dbm.php"><img src="images/programs/1.webp" data-no-retina="" alt=""/></a>
                                <div className="padding-45px-all md-padding-30px-all">
                                    <span className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom">Diploma in Business Management (DBM)</span>
                                    <p style = {{ marginBottom: '0px' }}>Duration: Fast Track:3 Months</p>
                                    <p>Regular:1 Year</p>
                                    <a href="dbm.php" className="btn btn-small btn-rounded btn-transparent-dark-gray">Read More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </li>

                        <li className="grid-item advanceddiploma animate__fadeInUp" style = {{ position: 'absolute', left: '0%', top: '560px', animation: 'auto ease 0s 1 normal none running none' }}>
                            <div className="bg-white text-center">
                                <a href="advance-diploma-in-hospitality-management.php"><img src="images/programs/2.webp" alt="" data-no-retina=""/></a>
                                <div className="padding-45px-all md-padding-30px-all">
                                    <span className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom">Advance Diploma in Hospitality Management</span>
                                    <p style = {{ marginBottom: '0px' }}>Duration: With Study: 3 Months</p>
                                    <p>With Study and Optional Internship: 1 Year</p>
                                    <a href="advance-diploma-in-hospitality-management.php" className="btn btn-small btn-rounded btn-transparent-dark-gray">Read More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </li>

                        <li className="grid-item advancecertificate animate__fadeInUp" style = {{ position: 'absolute', left: '0%', top: '1120px', animation: 'auto ease 0s 1 normal none running none' }}>
                            <div className="bg-white text-center">
                                <a href="professional-in-tax-consultancy.php"><img src="images/programs/3.webp" alt="" data-no-retina=""/></a>
                                <div className="padding-45px-all md-padding-30px-all">
                                    <span className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom">Professional in Tax <br/> consultancy</span>
                                    <p style={{marginBottom: '0px'}}>Duration: Fast Track : 1 Year</p>
                                    <p>Regular:3 Year</p>
                                    <a href="professional-in-tax-consultancy.php" className="btn btn-small btn-rounded btn-transparent-dark-gray">Read More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </li>

                        <li className="grid-item advancecertificate animate__fadeInUp" style = {{position: 'absolute', left: '0%', top: '1704px', animation: 'auto ease 0s 1 normal none running none'}}>
                            <div className="bg-white text-center">
                                <a href="professional-in-project-management.php"><img src="images/programs/4.webp" alt="" data-no-retina=""/></a>
                                <div className="padding-45px-all md-padding-30px-all">
                                    <span className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom"> Professional in Project <br/> Management</span>
                                    <p style = {{ marginBottom: '0px' }}>Duration: Fast Track: 1 Year</p>
                                    <p>Regular:3 Year</p>
                                    <a href="professional-in-project-management.php" className="btn btn-small btn-rounded btn-transparent-dark-gray">Read More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </li>

                        <li className="grid-item undergraduate animate__fadeInUp" style = {{ position: 'absolute', left: '0%', top: '2288px', animation: 'auto ease 0s 1 normal none running none' }}>
                            <div className="bg-white text-center">
                                <a href="fcppc.php"><img src="images/programs/5.webp" alt="" data-no-retina=""/></a>
                                <div className="padding-45px-all md-padding-30px-all">
                                    <span className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom"> The Foundation Certificate in Payroll and Payroll Compliance</span>
                                    <p style = {{ marginBottom: '0px' }}>Duration: Fast Track:2 month programme.</p>
                                    <p>Regular:3 Year</p>
                                    <a href="fcppc.php" className="btn btn-small btn-rounded btn-transparent-dark-gray">Read More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </li>

                        <li className="grid-item undergraduate animate__fadeInUp" style = {{ position: 'absolute', left: '0%', top: '2848px', animation: 'auto ease 0s 1 normal none running none' }}>
                            <div className="bg-white text-center">
                                <a href="cpm.php"><img src="images/programs/6.webp" alt="" data-no-retina=""/></a>
                                <div className="padding-45px-all md-padding-30px-all">
                                    <span className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom">Certificate in Payroll <br/> Management</span>
                                    <p style = {{ marginBottom: '0px' }}>Duration: Fast Track:15 weeks programme.</p>
                                    <p>Regular:3 Year</p>
                                    <a href="cpm.php" className="btn btn-small btn-rounded btn-transparent-dark-gray">Read More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </li>

                        <li className="grid-item postgraduate animate__fadeInUp" style = {{ position: 'absolute', left: '0%', top: '3432px', animation: 'auto ease 0s 1 normal none running none' }}>
                            <div className="bg-white text-center">
                                <a href="mdp-on-project-management.php"><img src="images/programs/7.webp" alt="" data-no-retina=""/></a>
                                <div className="padding-45px-all md-padding-30px-all">
                                    <span className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom">MDP on Project <br/> Management</span>
                                    <p style = {{ marginBottom: '0px',visibility: 'hidden' }}>Duration: Fast Track:6 Months</p>
                                    <p style = {{ visibility: 'hidden' }}>Regular:2 Year</p>
                                    <a href="mdp-on-project-management.php" className="btn btn-small btn-rounded btn-transparent-dark-gray">Read More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </li>

                        <li className="grid-item postgraduate animate__fadeInUp" style = {{ position: 'absolute', left: '0%', top: '4016px', animation: 'auto ease 0s 1 normal none running none' }}>
                            <div className="bg-white text-center">
                                <a href="mdp-on-client-communication-in-business-analytics.php"><img src="images/programs/8.webp" alt="" data-no-retina=""/></a>
                                <div className="padding-45px-all md-padding-30px-all">
                                    <span className="text-extra-dark-gray font-weight-600 d-block alt-font margin-10px-bottom">MDP on Client Communication in Business Analytics</span>
                                    <p style = {{ marginBottom: '0px', visibility: 'hidden' }}>Duration: Fast Track:6 Months</p>
                                    <p style = {{ visibility: 'hidden' }}>Regular:2 Year</p>
                                    <a href="mdp-on-client-communication-in-business-analytics.php" className="btn btn-small btn-rounded btn-transparent-dark-gray">Read More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>



