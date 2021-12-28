import React from "react";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img
                        src="assets/images/sitelogo.png"
                        alt=""
                        width="40"
                        height="40"
                        class="d-inline-block"
                    />
                    Jimmy Zheng
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse text-center"
                    id="navbarNavAltMarkup"
                >
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link" href="#about-me">
                            About Me
                        </a>
                        <a class="nav-link" href="#work">
                            Projects
                        </a>
                        <a class="nav-link" href="#contact-me">
                            Contact Me
                        </a>
                        <a
                            class="nav-link"
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
