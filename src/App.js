import React, { useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import projects from "./assets/projects.js";

function App() {
    const [page, setPage] = useState("About Me");
    return (
        <main className="scroll">
            <Landing setPage={setPage} />
            <Navbar setPage={setPage} page={page} />
            <AboutMe setPage={setPage} />
            <Projects setPage={setPage} projects={projects} />
            <Contact setPage={setPage} />
        </main>
    );
}

export default App;
