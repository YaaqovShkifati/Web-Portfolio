import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Typist from "react-typist";
import Configs from "../editable-stuff/configurations.json";
import "../App";

const NotFoundPage = () => {
  const icons = Configs.icons;

  // const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);
  const [hoverstatus, setHoverstatus] = useState([
    "socialicons",
    "socialicons",
    "socialicons",
    "socialicons",
    "socialicons"
  ]);

  const toggleHover = data => {
    const newhoverStatus = [...hoverstatus];

    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      return setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "socialicons";
      return setHoverstatus(newhoverStatus);
    }
  };

  return (
    <div>
      <div
        id="404"
        className="jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div className="container container-fluid text-center ">
          <h1 className="display-1">404: Page Not Found</h1>
          <Typist cursor={{ hideWhenDone: true }}>
            <span className="lead">Sorry the page you were looking for no longer exists. Please check out one of our other pages!</span>
             <div className="lead">
              <p>Check out and follow our social media sites.</p>
            </div>
          </Typist>
          <div className="p-6" style={{paddingTop:"40px", paddingBottom:"40px"}}>
            {icons.map(icon => (
              <a
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i
                  className={`fab ${icon.image}  fa-3x ${hoverstatus[icon.id]}`}
                  onMouseOver={() => toggleHover({ icon, event: "enter" })}
                  onMouseOut={() => toggleHover({ icon, event: "leave" })}
                />
              </a>
            ))}
          </div>
          <Link className="btn btn-outline-light btn-lg" role="button" to="/">Home</Link>
          &nbsp;&nbsp;&nbsp;
          <Link className="btn btn-outline-light btn-lg" role="button" to="/resume">Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;