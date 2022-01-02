import React from "react";
import Form from "./Form";
import "../styles/Contact.css";

function Contact() {
    return (
        <section id="contact-me" className="scroll-snap">
            <header className="section-header">
                <h2>Contact Me</h2>
            </header>
            <div className="section-line"></div>
            <Form />
            <div className="section-body contact">
                <a className="contact-info" href="tel:425-350-1868">
                    <i className="fas fa-phone fa-2x"></i>
                    <br />
                    Phone
                </a>
                <a className="contact-info" href="mailto:jimmyz0622@gmail.com">
                    <i className="fas fa-envelope-open-text fa-2x"></i>
                    <br />
                    Email
                </a>
                <a
                    className="contact-info"
                    href="https://www.linkedin.com/in/jimmy-zheng/"
                >
                    <i className="fab fa-linkedin-in fa-2x"></i>
                    <br />
                    LinkedIn
                </a>
                <a
                    className="contact-info"
                    href="https://github.com/ByteSizeError"
                >
                    <i className="fab fa-github fa-2x"></i>
                    <br />
                    GitHub
                </a>
            </div>
        </section>
    );
}

export default Contact;
