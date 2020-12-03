import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Configs from "../../editable-stuff/configurations.json";
import ProjectCard from "./ProjectCard";
import "../../App.css";

const Project = () => {
  const [heading] = useState("Recent Projects");
  const [projectsArray, setProjectsArray] = useState([]);
  const [projectsLength] = useState(Configs.projectsLength);

  const handleRequest = useCallback(
    e => {
      axios
        .get(Configs.gitHubLink + Configs.gitHubUsername + Configs.gitHubQuerry)
        .then(response => {
          // handle success
          // console.log(response.data.slice(0, 4));
          return setProjectsArray(response.data.slice(0, projectsLength));
        })
        .catch(error => {
          // handle error
          return console.error(error.message);
        })
        .finally(() => {
          // always executed
        });
    },
    [projectsLength]
  );

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <div id="recentProjects" className="jumbotron jumbotron-fluid bg-transparent min-vh-100 m-0"> 
      <div className="container container-fluid p-5">
        <h1 className="display-4 pb-5">{heading}</h1>
        <div className="row">
          {projectsArray.map(project => (
            <ProjectCard key={project.id} id={project.id} value={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
