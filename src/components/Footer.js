import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <a
                className="contact-info"
                href="https://www.linkedin.com/in/jimmy-zheng/"
            >
                <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a className="contact-info" href="https://github.com/ByteSizeError">
                <i className="fab fa-github fa-2x"></i>
            </a>
        </div>
    );
}

export default Footer;
