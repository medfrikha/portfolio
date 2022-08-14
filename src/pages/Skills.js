import React, { useEffect, useState } from "react";
import axios from "axios";

function Skills() {
  const [skills, setSkills] = useState([
    {
      id: "1",
      name: "HTML",
      description:
        "HTML is the foundation of all web pages. Without HTML, you wouldn’t be able to organize text or add images or videos to your web pages. HTML is the beginning of everything you need to know to create engaging web pages!",
      image: "https://colabs.devmastery.tech/technologies/html.svg",
    },
  ]);

  useEffect(() => {
    axios
      .get("https://devmastery-assets.vercel.app/technologies.json")
      .then((response) => {
        setSkills(response.data);
        console.log(skills);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="row">
      {skills.map((element) => (
        <div key={element.id} className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
          <img
            src={element.image}
            className="card-img-top"
            alt={`${element.name} logo`}
          />
          <div className="card-body">
            <h5 className="card-title">{element.name}</h5>
            <p className="card-text">{element.description}</p>
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
