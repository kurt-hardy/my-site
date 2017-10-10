import React from "react";
import Header from "Components/Header";
import SectionOne from "Components/SectionOne";
import AboutMe from "Components/AboutMe";
import Skills from "Components/Skills";
import Projects from "Components/Projects";
import Footer from "Components/Footer";

const App = () => (
    <div className="app">
        <Header />
        <SectionOne />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
    </div>
);

export default App;
