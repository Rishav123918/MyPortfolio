import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/sitelogo.png";

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-md">
            <div className="container-fluid">
                <a className="navbar-brand" href="#landing">
                    <img
                        src={logo}
                        alt=""
                        width="40"
                        height="40"
                        className="d-inline-block"
                    />
                    &nbsp;&nbsp;Jimmy Zheng
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse text-center"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="#about-me">
                            About Me
                        </a>
                        <a className="nav-link" href="#projects">
                            Portfolio
                        </a>
                        <a className="nav-link" href="#contact-me">
                            Contact Me
                        </a>
                        <a
                            className="nav-link"
                            href="assets/Jimmy-Zheng-Resume.pdf"
                            target="_blank"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
