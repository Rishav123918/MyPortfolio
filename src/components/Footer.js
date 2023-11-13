import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer ms-2 mb-2 me-2">
            <a
                className="contact-info"
                href="https://www.linkedin.com/in/rishav-jain-39144b221/"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a
                className="contact-info"
                href="https://github.com/Rishav123918"
                target="_blank"
                rel="noreferrer"
            >
                <i className="fab fa-github fa-2x"></i>
            </a>
        </div>
    );
}

export default Footer;
