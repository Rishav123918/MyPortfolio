import React from "react";
import Footer from "./Footer";
import "../styles/Landing.css";
import TypeAnimation from "react-type-animation";

function Landing(props) {
    const handlePageChange = (e) => {
        props.setPage("About Me");
    };

    return (
        <div
            id="landing"
            className="scroll-snap"
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
            </div>
        </div>
    );
}

export default Landing;
