import React from "react";
import AOS from 'aos';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './main.css';
import './aos.css';

AOS.init();

const Education = () => {
    return (
      <div>
        <div className="page-content" id="education"> 
          <div className="jumbotron jumbotron-fluid bg-transparent min-vh-100 m-0">
            <div className="container cc-education">
              <h5 className="display-4 mb-5 text-center">Education</h5>
              <div className="card mb-3" style={{maxWidth: "1138px"}} data-aos="fade-right" data-aos-offset={0} data-aos-duration={500}>
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <img src={require('./Images/BC.jpg')} style={{paddingTop: "70px"}}width="80%" height="80%" className="card-img" alt="..."/>
                    <div className="card-img-overlay cc-education-header d-flex">
                      <div className="my-auto mx-auto text-center">
                        <p>2019 - 2020</p>
                        <div className="h5">B.S. - Computer Engineering Candidate</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9" data-aos="fade-left" data-aos-offset={50} data-aos-duration={500}>
                    <div className="card-body">
                    <div className="h5">City University of New York - Brooklyn College (CUNY)</div>
                      <p className="category">3.678 GPA</p>
                      <ul style={{paddingLeft: "25px"}}>
                        <li>Major: Computer Engineering - BC/NYU Articulation Program</li>
                        <li>Honors: Dean's List, Hillel Leadership Award, Engineering Honors</li>
                        <li> Relevent Coursework:
                          <ul style={{paddingLeft: "25px"}}>
                            <li>Computer Science & Engineering: 
                              <ul style={{paddingLeft: "25px"}}>
                                <li>  Computer Applications, Java Programming, Object Oriented Programming, Data Structures
                                </li>
                              </ul>
                            </li>
                            <li>Mathematics: 
                              <ul style={{paddingLeft: "25px"}}>
                                <li>Precalculus Mathematics 1 & 2, Calculus 1 & 2, Multivariable Calculus, Linear Algebra</li>
                              </ul>
                            </li>
                            <li>Physics/Electrical Engineering: 
                              <ul style={{paddingLeft: "25px"}}>
                                <li>General Chemistry, Calculus-Based General Physics 1 & 2, Vector Mechanics</li>
                              </ul>
                            </li>
                            <li>Other: 
                              <ul style={{paddingLeft: "25px"}}>
                                <li>English Composition 1 & 2, Macroeconomics, Psychology</li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </div>
</div>
    );
  }
export default Education;