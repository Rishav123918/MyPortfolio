import React from "react";
import Footer from "../components/Footer";
import "../styles/Landing.css";
import logo from "../assets/images/sitelogo.png";


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
                <img src={logo} alt="avatar" className="photo mb-2" />

                 
                <h5>Full Stack Developer & Programmer</h5>
                <Footer />
            </div>
        </div>
    );
}

export default Landing;
