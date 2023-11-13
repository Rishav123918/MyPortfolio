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
                  Hello, I am Rishav Kumar Jain hailing from Odisha. My intermediate
                  education took place in Odisha, and I concluded my undergraduate studies
                   in Chhattisgarh. At present, I am pursuing MCA at NIT Jamshedpur.
                </p>
                <p>
                  Throughout my educational journey, I have cultivated a robust 
                  technical skill set, encompassing programming languages such as
                  C, C++, and JavaScript. Additionally, I have delved into various
                  web technologies, including React.js, Node.js, Express, and databases 
                  like MySQL, MongoDB, and Firebase.
                </p>
                <p>
                 I have accomplished two significant projects. The initial project involved 
                 creating a Hotel Booking System using the MERN stack. In this endeavor,
                 I placed considerable emphasis on the security system, employing MongoDB 
                 for data storage, and utilized Express on the backend for server-side operations.
                </p>
                <p>
                  The second project revolves around a Real-Time Chat Application, crafted using React.js and Firebase. 
                </p>

                <p>
                   In addition to these, I have successfully implemented a custom k-nearest neighbors algorithm 
                   in Python for the "Finding k-Nearest-Neighbors" project, showcasing my proficiency in machine learning and Python.   
                </p>
                
                <p>
                Beyond my academic and technical proficiency, I harbor a keen interest in problem-solving, gaming, music, and 
                aspects of spirituality and divinity. During my graduation, I actively participated in event management.
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
