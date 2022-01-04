import React from "react";
import Footer from "../components/Footer";
import resume from "../assets/Jimmy-Zheng-Resume.pdf";

function Resume(props) {
    const handlePageChange = (e) => {
        props.setPage("Resume");
    };

    return (
        <section
            id="resume"
            className="scroll-snap d-flex align-items-start flex-column"
            onMouseEnter={handlePageChange}
        >
            <header className="section-header ms-3 mb-3">
                <h2>Resume</h2>
            </header>
            <div className="ms-3">
                <a
                    className="btn"
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fas fa-file-download"></i>&nbsp;&nbsp;View
                    Resume
                </a>
                <h5 className="mt-3">Front-End</h5>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Handlebars</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Responsive Design</li>
                </ul>
                <h5>Back-End</h5>
                <ul>
                    <li>Node</li>
                    <li>Express</li>
                    <li>APIs</li>
                    <li>GraphQL</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB/Mongoose</li>
                    <li>REST</li>
                </ul>
            </div>
            <div className="mt-auto ms-2 mb-2">
                <Footer />
            </div>
        </section>
    );
}

export default Resume;
