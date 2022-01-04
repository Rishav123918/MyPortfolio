import React from "react";

function Resume(props) {
    const handlePageChange = (e) => {
        props.setPage("Resume");
    };

    return (
        <section
            id="resume"
            className="scroll-snap"
            onMouseEnter={handlePageChange}
        >
            <a href="">Download my resume</a>
            <h5>Front-End</h5>
            <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <h5>Back-End</h5>
            <ul>
                <li>Node</li>
                <li>Express</li>
                <li>APIs</li>
                <li>GraphQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>REST</li>
            </ul>
        </section>
    );
}

export default Resume;
