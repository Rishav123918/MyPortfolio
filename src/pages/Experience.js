import React, { useState } from "react";
import Project from "../components/Project";
import "../styles/Projects.css";

function Experience(props) {
    const [showMore, setShowMore] = useState("");

    let experience = props.experience;

    if (showMore) {
        experience = props.experience;
    } else {
        experience = props.experience.slice(0, 6);
    }

    const handlePageChange = (e) => {
        props.setPage("Portfolio");
    };

    const handleButtonChange = (e) => {
        if (showMore) {
            setShowMore(false);
        } else {
            setShowMore(true);
        }
    };

    return (
        <section
            id="experience"
            className="scroll-snap"
            onMouseEnter={handlePageChange}
        >
            <header className="section-header ms-3 mb-3">
                <h2>Experience</h2>
            </header>
            {/*  */}

            <div className="container py-5">
                <div className="main-timeline">
                    {experience.map((project, index) => (
                        <Project key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
            <div className="d-grid scroll-snap-end">
                <button
                    className="btn ms-3 mb-3 me-3"
                    onClick={handleButtonChange}
                >
                    {showMore === true ? (
                        <>
                            <i className="fas fa-minus"></i>&nbsp;&nbsp;Show
                            Less
                        </>
                    ) : (
                        <>
                            <i className="fas fa-plus"></i>&nbsp;&nbsp;Show More
                        </>
                    )}
                </button>
            </div>
        </section>
    );
}

export default Experience;
