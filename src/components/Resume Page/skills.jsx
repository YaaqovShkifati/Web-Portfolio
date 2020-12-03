import React from "react";
import AOS from 'aos';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './main.css';
import './aos.css';
import './aboutStyleCSS.css';
import './bootstrap.min.css';

AOS.init();
const Skills = () => {
    return (
      <div>
        <div className="page-content">
          <div className="jumbotron jumbotron-fluid min-vh-100 m-0" id="skill" style={{overflowX:"hidden", }}>
            <div className="container">
              <h5 className="display-4 mb-5 text-center">Technical Skills</h5>
              
              <div className="card-deck" data-aos="fade-right" style={{display: "flex", justifyContent: "center", paddingLeft:"20px", paddingRight:"20px"}}>
                <div className="row">
                  <div className="card">
                    <img src={require('./Images/Programming Languages.jpg')} alt=""/>  
                    <div className="card-body">
                      <h5 className="card-title">Programming Languages:</h5>
                      <ul className="list-group list-group-flush" data-aos="fade-down">
                        <li className="list-group-item">Java</li>
                        <li className="list-group-item">Python (Intermediate)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card">
                    <img src={require('./Images/web.png')} alt=""/> 
                    <div className="card-body ">
                      <h5 className="card-title">Web Development:</h5>
                      <ul className="list-group list-group-flush" data-aos="fade-down">
                        <li className="list-group-item">ReactJS</li>
                        <li className="list-group-item">CSS/JS</li>
                        <li className="list-group-item">HTML</li>
                      </ul>
                    </div>
                  </div>
                </div>              
              </div>
              
              <div className="card-deck" data-aos="fade-right" style={{display: "flex", justifyContent: "center", paddingLeft:"20px", paddingRight:"20px"}}>
                <div className="row">
                  <div className="card">
                    <img src={require('./Images/Operating Systems.jpg')} alt=""/> 
                    <div className="card-body ">
                      <h5 className="card-title">Operating Systems:</h5>
                      <ul className="list-group list-group-flush" data-aos="fade-down">
                        <li className="list-group-item">Mac OS</li>
                        <li className="list-group-item">Windows</li>
                        <li className="list-group-item">Ubuntu/UNIX/Linux</li>
                        <li className="list-group-item">Raspbian</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card">
                    <img src={require('./Images/tools.png')} alt=""/> 
                    <div className="card-body">
                      <h5 className="card-title">Engineering Tools:</h5>
                      <ul className="list-group list-group-flush" data-aos="fade-up">
                        <li className="list-group-item">Visual Studio, ClearCase/Git</li>
                        <li className="list-group-item">Microsoft Office, Visio</li>
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
export default Skills;
