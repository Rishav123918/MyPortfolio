import React, { useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

import projects from "./assets/projects.js";

function App() {
    const [page, setPage] = useState("About Me");
    return (
        <main className="scroll">
            <Landing setPage={setPage} page={page} />
            <Navbar setPage={setPage} page={page} />
            <AboutMe setPage={setPage} />
            <Projects setPage={setPage} projects={projects} />
            <Resume setPage={setPage} />
            <Contact setPage={setPage} />
        </main>
    );
}

export default App;
