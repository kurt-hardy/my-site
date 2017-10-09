import React from "react";
import Header from "Components/Header";
import SectionOne from "Components/SectionOne";

const App = () => (
    <div className="app">
        <Header />
        <SectionOne />
        {/*  About me section */}
        <div className="center">
            {/* div column 1 */}
            <h1>About me</h1>
            <p>Some test about me and whats on my website</p>
            <img alt="small UK flag" />
            {/* div column 2 */}
            <img alt="profile pic" />
            {/* div column 2 */}
            <h1>details</h1>
            <span><strong>name</strong><p>Kurtis Hardy</p></span>
            <span><strong>Age</strong><p>28</p></span>
            <span><strong>Loction</strong><p>Keswick, Ontario, Canada</p></span>
        </div>

        {/* Skills section */}
        <div className="center">
            {/* div column 1 */}
            <h1>Skills</h1>
            <span>&quot;If you find a path with no obstacles, it probably doesn&apos;t lead anywhere.&quot;</span>
            <a href="https://en.wikipedia.org/wiki/Frank_Clark_(politician)">Frank Clark</a>
            --------------------------------------
            <h3>Technical</h3>
            list skills in 2 columns with start rating of skill level out of 5
            EG
            C# ***** Javascript *****
            SQL *** React ****

            <h3>Other</h3>
            Squash ***

            <p>disclaimer: All the above skills are my own self critical rating, you are free to make your own
                mine up.
            </p>
        </div>

        {/* Projects section */}
        <div className="center">
            {/* div column 1 */}
            <h1>Project and interests</h1>
            work project
            Gnatta.com
            AO.com (include DE and NL)
            Boots.com (powered by AO.com)
            Codeweavers.com

            Interests
            React.js
            Material UI
            Jest

            Ideas fro this section
            http://www.pascalvangemert.nl/#/projects
            http://www.adamhartwig.co.uk/work-and-play
        </div>

        {/* Contact section */}
        <div className="fullSection">
            <div className="left">
                <img alt="canada flag" />
                <p>Google maps showing Keswick Canada</p>
            </div>
            <div className="right">
                <h2>Contact me</h2>
                <p>please use one of the below ways to contact me</p>
                <img alt="facebook" />
                <img alt="linkedIn" />
                <img alt="twitter" />
                <img alt="email" />
            </div>
        </div>
        <footer>
            <section>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </section>
        </footer>
    </div>
);

export default App;
