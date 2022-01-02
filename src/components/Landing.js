import React from "react";
import "../styles/Landing.css";
import TypeAnimation from "react-type-animation";

function Landing() {
    return (
        <div id="landing" className="scroll-snap">
            <div className="center">
                <TypeAnimation
                    cursor={true}
                    sequence={["", 500, "Jimmy Zheng", 2000]}
                    wrapper="h1"
                    repeat={Infinity}
                />
                <h5>Software Developer</h5>
            </div>
        </div>
    );
}

export default Landing;
