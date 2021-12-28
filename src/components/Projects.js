import React from "react";
import projects from "../projects";
import Project from "./Project";

function Projects(props) {
    return (
        <section id="work">
            <header className="section-header">
                <h2>Projects</h2>
            </header>
            <div className="section-line"></div>
            <div
                id="projects"
                className="
                        section-body
                        projects
                        row row-cols-1 row-cols-lg-2
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
