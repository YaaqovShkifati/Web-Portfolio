import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Typist from "react-typist";

import Configs from "../editable-stuff/configurations.json";
import "../App";

export default function ComingSoonPage() {
  const icons = Configs.icons;

  // const [backgroundType, setBackgroundType] = useState(Configs.backgroundType);
  const [hoverstatus, setHoverstatus] = useState([
    "socialicon",
    "socialicon",
    "socialicon",
    "socialicon",
    "socialicon"
  ]);

  const toggleHover = data => {
    const newhoverStatus = [...hoverstatus];
    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconhover";
      return setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "socialicon";
      return setHoverstatus(newhoverStatus);
    }
  };

  return (
    <div>
      <div
        id="comingsoon"
        className="jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div className="container container-fluid text-center ">
          <h1 className="display-1">Under Construction...</h1>
          <Typist className = "lead" cursor={{ hideWhenDone: true }}>
            <span className="lead">Welcome to my site! We are currently working on this site every minute of an hour.</span>
            <p>Enter your email below and we will notify you when it's ready.</p>
            Check out and follow our social media sites.
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
          <div className="container container-fluid text-center p-5" style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
            <Link className="btn btn-outline-light btn-lg" role="button" to="/">Home</Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="btn btn-outline-light btn-lg" role="button" to="/resume">Resume</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
