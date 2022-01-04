import React from "react";
import Footer from "../components/Footer";
import "../styles/Landing.css";
import TypeAnimation from "react-type-animation";

function Landing(props) {
    const handlePageChange = (e) => {
        props.setPage("About Me");
    };

    return (
        <div
            id="landing"
            className="scroll-snap d-flex flex-column"
            onMouseEnter={handlePageChange}
        >
            <div className="center">
                <TypeAnimation
                    cursor={true}
                    sequence={["", 500, "Jimmy Zheng", 2000]}
                    wrapper="h1"
                    repeat={6}
                />
                <h5>Software Developer</h5>
                <Footer />
                {props.page === "About Me" ? (
                    <i className="fas fa-angle-double-down fa-2x arrow"></i>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Landing;
