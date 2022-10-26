import React from "react";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import resume from "../assets/Jimmy-Zheng-Resume.pdf";

function Resume(props) {
    const handlePageChange = (e) => {
        props.setPage("Resume");
    };

    props.skills.sort((a, b) => {
        let na = a.name.toLowerCase(),
            nb = b.name.toLowerCase();

        if (na < nb) {
            return -1;
        }
        if (na > nb) {
            return 1;
        }
        return 0;
    });

    return (
        <section
            id="resume"
            className="scroll-snap d-flex align-items-start flex-column"
            onMouseEnter={handlePageChange}
        >
            <header className="section-header ms-3 mb-3">
                <h2>Resume</h2>
            </header>
            <div className="ms-3 me-3">
                <div className="d-grid">
                    {/* <a
                        className="btn "
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fas fa-file-download"></i>&nbsp;&nbsp;View
                        Resume
                    </a> */}
                    <iframe
                        src={resume}
                        title="JimmyZhengResume"
                        width="100%"
                        height="650px"
                        frameBorder="0"
                        allowFullScreen=""
                    />
                </div>
                <h4 className="mt-3">Languages</h4>
                <div className="row justify-content-space-between">
                    {props.language.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>

                <h4 className="mt-3">Frameworks</h4>
                <div className="row justify-content-space-between">
                    {props.framework.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>

                <h4 className="mt-3">Databases</h4>
                <div className="row justify-content-space-between">
                    {props.database.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>

                <h4 className="mt-3">Tools</h4>
                <div className="row justify-content-space-between">
                    {props.tool.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>

                <h4 className="mt-3">All Skills</h4>
                <div className="row justify-content-space-between">
                    {props.skills.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>
            </div>
            <div className="mt-auto scroll-snap-end">
                <Footer />
            </div>
        </section>
    );
}

export default Resume;
