import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

import Header from "Components/Header";
import SectionOne from "Components/SectionOne";
import AboutMe from "Components/AboutMe";
import Skills from "Components/Skills";
import Projects from "Components/Projects";
import Footer from "Components/Footer";

const App = () => (
    <Scrollbars autoHide style={{ height: "100%" }} >
        <div className="app">
            <Header />
            <SectionOne />
            <AboutMe />
            <Skills />
            <Footer />
        </div>
    </Scrollbars>
);

export default App;
