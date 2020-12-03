import React, { useState} from "react";
import { Link } from 'react-router-dom';
import Configs from "../../editable-stuff/configurations.json";
import Pdf from "../../editable-stuff/resume.pdf";
import Jpg from "../../editable-stuff/profile.jpg";

const AboutMe = () => {
  const [heading] = useState("About me");
  const [aboutDev] = useState(Configs.aboutDev);
  const [resumeURL] = useState(Pdf);

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid min-vh-auto m-0" style={{paddingTop:"80px"}}>
      <div className="container container-fluid p-5">
        <div className="row">
          {
            <div className="display-4 mb-5 text-center d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={Jpg}
                alt="profilepicture"
              />
            </div>
          }
          <div className={`col-lg`}>
            <h1 className="display-4 mb-5 text-center">{heading}</h1>
            <p className="lead text-center">{aboutDev}</p>
            {resumeURL && (
              <p className="lead text-center">
                <Link className="btn btn-outline-dark btn-lg" role="button" to="/resume"> Resume</Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
