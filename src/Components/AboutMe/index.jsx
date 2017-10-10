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
                    A software developer from Blackburn, England living in Ontario Canada who uses the .NET stack and
                    the modern Javascript world (React.js, webpack, Redux, etc). I enjoy developing, automating and
                    testing code (front and back end). I have a good knowledge of front-end techniques and unit testing
                    API&apos;s; I&apos;m a team player and don&apos;t believe in knowledge silo&apos;s.
                </p>

                <p>
                    When I&apos;m not coding or pushing pixels, I may be on a squash court or reading a crime novel
                    (A new favourite author of mine is <a target="blank" href="http://www.leechild.com">Lee Child</a>
                    and my favourite author
                    is <a target="blank" href="http://www.tessgerritsen.com">Tess gerritsen).</a>. I also love films,
                    music, dogs and cooking.
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
