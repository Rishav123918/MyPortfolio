import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import projects from "./projects";

function App() {
    return (
        <main>
            <Navbar />
            <AboutMe />
            <Projects projects={projects} />
            <Contact />
        </main>
    );
}

export default App;
