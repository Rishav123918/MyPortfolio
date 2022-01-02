import React from "react";
import Footer from "./Footer";
import "../styles/AboutMe.css";

function AboutMe() {
    return (
        <section
            id="about-me"
            className="scroll-snap d-flex align-items-start flex-column"
        >
            <header className="section-header ms-3 mb-3">
                <h2>About Me</h2>
            </header>
            <div className="section-line"></div>
            <div className="section-body ms-3 mb-3">
                <p>
                    Full Stack Developer experienced in making iOS and web
                    applications with strengths in meeting deadlines,
                    creativity, organization, and problem solving. Graduated
                    from Washington State University with a degree in Computer
                    Science and am currently pursuing a Certificate in Full
                    Stack Development from the University of Washington.
                </p>
                <p>
                    Throughout my time at Washington State University, I worked
                    hard, remained organized to ensure that I met all my
                    deadlines. I relied heavily on my time management skills and
                    stayed calm when under pressure. Ultimately, it paid off. I
                    completed my bachelor's degree and graduated{" "}
                    <i>magna cum laude</i>. From my numerous team projects I
                    learned the importance of teamwork and communication. The
                    whole process showed me the benefits of hard work, teamwork,
                    and dedication with the rewards that followed.
                </p>
                <p>
                    Known for being an adaptive problem solver excited on
                    developing apps. Passionate about tackling problems from
                    different angles and breaking problems down piece by piece.
                    In each project, my goal is to create an impactful user
                    experience with responsive applications by leveraging my
                    skills.
                </p>
            </div>
            <div className="mt-auto ms-2 mb-2">
                <Footer />
            </div>
        </section>
    );
}

export default AboutMe;
