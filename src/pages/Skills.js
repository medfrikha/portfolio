import React, { useEffect, useState } from "react";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState( [] );

  useEffect(() => {
    axios
      .get("https://devmastery-assets.vercel.app/technologies.json")
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row">
      {skills.map((element) => (
        <div key={element.id} className="card col-12 col-sm-6 col-md-4 col-lg-3 p-3">
          <img
            src={element.image}
            className="card-img-top"
            alt={`${element.name} logo`}
          />
          <div className="card-body">
            <h5 className="card-title">{element.name}</h5>
            {/* <p className="card-text">{element.description}</p> */}
            <a href="#" className="btn btn-primary">
              Learn about
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
