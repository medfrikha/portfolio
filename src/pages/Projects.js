import React from "react";

const PROJECTS = [
  {
    title: "Pricing",
    description: "Princing section with 3 plans",
    url: "https://medfrikha.github.io/pricing/",
    githubId: "pricing",
  },
  {
    title: "business land",
    description: "Web page developed with only html and css",
    url: "https://medfrikha.github.io/business-land/",
    githubId: "business-land",
  },
  {
    title: "portfolio",
    description: "Web page developed with React js ",
    url: "https://mohamed-frikha-portfolio.vercel.app/",
    githubId: "portfolio",
  }
];

function Projects() {
  return (
    <div>
      {PROJECTS.map((item) => (
        <div
          key={item.githubId}
          style={{ border: "solid 1px black", margin: 10, padding:10}}
        >
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <a href={item.url} target="_blank">preview</a>
          <h6>{item.githubId}</h6>
        </div>
      ))}
    </div>
  );
}

export default Projects;
