import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import { scroller} from 'react-scroll'
import Typist from "react-typist";
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import IconButton from '@material-ui/core/IconButton';
import Configs from "../../editable-stuff/configurations.json";
import "../../App";

const MainHeader = () => {
  const icons = Configs.icons;

  const [devInfo] = useState(Configs.devIntro);
  const [devDesc] = useState(Configs.devDesc);
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
        id="mainHeader"
        className="jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap"
        style={{marginBottom:0}}
     >
        <div style={{marginTop:"25px"}} className="container container-fluid text-center">
          <h1 className="display-1">{devInfo}</h1>
          <Typist className="lead"> {devDesc}</Typist>
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
          <Link className="btn btn-outline-light btn-lg" role="button" to="/resume">Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;