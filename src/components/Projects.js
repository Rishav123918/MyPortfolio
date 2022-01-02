import React from "react";
import Project from "./Project";
import "../styles/Projects.css";

function Projects(props) {
    return (
        <section id="projects" className="scroll-snap">
            <header className="section-header">
                <h2>Portfolio</h2>
            </header>
            <div className="section-line"></div>
            <div
                id="scroll-projects"
                className="
                        section-body
                        g-4
                        ms-1
                        me-1
                    "
            >
                {props.projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
