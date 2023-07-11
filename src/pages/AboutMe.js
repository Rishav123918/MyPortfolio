import React from "react";
import Footer from "../components/Footer";
import "../styles/AboutMe.css";

function AboutMe(props) {
    const handlePageChange = (e) => {
        props.setPage("About Me");
    };

    return (
        <section
            id="about-me"
            className="scroll-snap d-flex align-items-start flex-column"
            onMouseEnter={handlePageChange}
        >
            <header className="section-header ms-3 mb-3">
                <h2>About Me</h2>
            </header>
            <div className="section-body ms-3 mb-3">
                <p>
                    Hello! I'm Jimmy Zheng, a passionate software engineer with
                    a focus on creating innovative solutions that drive user
                    engagement and improve overall system performance. With a
                    strong background in full-stack development and a knack for
                    problem-solving, I strive to deliver high-quality products
                    that exceed user expectations.
                </p>
                <p>
                    During my time at Medici, I developed an NFT generator using
                    TypeScript, allowing users to create and customize thousands
                    of tokens simultaneously. By collaborating closely with the
                    design team, I ensured a visually appealing and
                    user-friendly UI, resulting in a remarkable 35% boost in
                    user engagement. I also integrated web3 functionality,
                    enabling seamless wallet connection and artwork minting.
                </p>
                <p>
                    As a Software Engineer and Mentor at SCALE Pathways, I
                    improved front-end usability by implementing React and Ant
                    Design, leading to a significant 20% increase in user
                    engagement. By leveraging technologies such as Node.js and
                    Express.js, I enhanced overall performance and
                    functionality, reducing the average response time by 30%.
                    Additionally, I mentored senior design students, providing
                    guidance and support in their development.
                </p>
                <p>
                    At Mr. Sushi, I created an efficient ordering system for
                    tabletop kiosks and QR scans, resulting in a 30% increase in
                    restaurant efficiency. By collaborating closely with
                    restaurant staff, I optimized the system based on
                    operational requirements, achieving a seamless adoption rate
                    of 95% among the staff.
                </p>
                <p>
                    With a Certificate in Full-Stack Development from the
                    University of Washington and a Bachelor's degree in Computer
                    Science <i>(magna cum laude)</i> from Washington State
                    University, I bring a solid foundation and a drive for
                    excellence to every project I undertake. I'm also the proud
                    recipient of awards such as the STARS Scholarship, EECS
                    Scholarship, and 3rd Place in Senior Design Competition.
                </p>
                <p>
                    Please take a look at my React Portfolio to explore some of
                    the projects I've worked on and see my skills in action.
                </p>
                <p>
                    I'm passionate about leveraging my skills and experience to
                    create impactful software solutions. If you have a project
                    or an opportunity you'd like to discuss, I'd love to hear
                    from you. Let's connect and make a difference together!
                </p>
            </div>
            <div className="mt-auto scroll-snap-end">
                <Footer />
            </div>
        </section>
    );
}

export default AboutMe;
