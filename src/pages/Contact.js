import React from "react";
import Form from "../components/Form";
import "../styles/Contact.css";

function Contact(props) {
    const handlePageChange = (e) => {
        props.setPage("Contact");
    };

    return (
        <section
            id="contact-me"
            className="scroll-snap d-flex flex-column"
            onMouseEnter={handlePageChange}
        >
            <header className="section-header ms-3 mb-3">
                <h2>Contact Me</h2>
            </header>
            <Form />
            <div className="section-body contact mt-auto">
                <a
                    className="contact-info"
                    href="tel:9692053101"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fas fa-phone fa-2x"></i>
                </a>
                <a
                    className="contact-info"
                    href="mailto:rishavkumarjain2000@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fas fa-envelope-open-text fa-2x"></i>
                </a>
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
        </section>
    );
}

export default Contact;
