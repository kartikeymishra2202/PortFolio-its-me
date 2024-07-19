import React from "react";
import "../App.css";

const projects = [
  {
    id: 1,
    title: "Project User Authentication ",
    description:
      "Full Stack Project in which user can login, register, updatepost, create comment, likes etc.",
    imageUrl: `${process.env.PUBLIC_URL}/image/project-1.png`,
  },
  {
    id: 2,
    title: "Dice Game",
    description: "Two Players Dice Game .",
    imageUrl: `${process.env.PUBLIC_URL}/image/pie project.png`,
  },
  {
    id: 3,
    title: "Password Generator",
    description: "Generating Password from medium to High Security",
    imageUrl: `${process.env.PUBLIC_URL}/image/project pass.PNG`,
  },
  {
    id: 4,
    title: "Weather Website",
    description: "Display Weather of anyplace along with other details",
    imageUrl: `${process.env.PUBLIC_URL}/image/project weath.PNG`,
  },

  // Add more projects as needed
];

const Projects = () => {
  const headingStyle = {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontSize: "36px",
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
  };
  return (
    <section className="projects">
      <h2 style={headingStyle}>Projects</h2>
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div>
              {" "}
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
