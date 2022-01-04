import React from "react";
import Project from "../components/Project";
import "../styles/Projects.css";

function Projects(props) {
    const handlePageChange = (e) => {
        props.setPage("Portfolio");
    };

    return (
        <section
            id="projects"
            className="scroll-snap"
            onMouseEnter={handlePageChange}
        >
            <header className="section-header ms-3 mb-3">
                <h2>Portfolio</h2>
            </header>
            <div
                className="
                        section-body
                        row
                        row-cols-1
                        g-4
                        ms-1
                        me-1
                        mb-3
                        scroll-snap-end
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
