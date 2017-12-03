import React from "react";
import Profile from "Assets/profile.jpg";
import Heading from "Components/Heading";
import styles from "./styles.scss";

const AboutMe = () => (
    <div className={styles.container}>
        <Heading text="About Me" />
        <div className={styles.content}>
            <div className={styles.about}>
                <p>
                    A software developer from Blackburn, England living in Ontario, Canada. Someone who uses the .NET
                    stack and the modern Javascript world (React.js, webpack, Redux, etc). I enjoy developing,
                    automating and testing code (front and back end).
                    I have a good knowledge of front-end techniques, unit testing both components and API&apos;s.
                </p>
                <p>
                    I am a big team player and I do not believe in knowledge silo&apos;s. I love training people
                    and helping them learn and understand what I have learnt.
                </p>

                <p>
                    When I&apos;m not coding or at my desk, I may be on a squash court, reading or looking for a
                    new whiskey bar/craft beer bar. I also love films, music, dogs and cooking.
                </p>
            </div>

            <div className={styles.profileImage}>
                <img src={Profile} alt="profile pic" />
            </div>

            <div className={styles.details}>
                <h3>Details</h3>
                <p><strong>Name:</strong> Kurtis Hardy</p>
                <p><strong>Age:</strong> 28</p>
                <p><strong>Location:</strong> Keswick, Ontario, Canada</p>
            </div>
        </div>
    </div>
);

export default AboutMe;
