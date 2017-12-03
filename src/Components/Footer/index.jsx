import React from "react";
import FacebookIcon from "Assets/Icons/Facebook";
import TwitterIcon from "Assets/Icons/Twitter";
import LinkedInIcon from "Assets/Icons/LinkedIn";
import GitHubIcon from "Assets/Icons/Github";
import CAFlagIcon from "Assets/Icons/CAFlag";
import Heading from "Components/Heading";
import GoogleMapsContainer from "./googleMap";
import styles from "./styles.scss";

const Footer = () => (
    <footer className={`${styles.container} ${styles.column}`}>
        <Heading text="Contact" />
        <div className={styles.content}>

            <div className={`${styles.location} ${styles.column}`}>
                <div className={styles.flagContainer}>
                    <h4>My current location</h4>
                    <CAFlagIcon />
                </div>

                <div className={styles.mapContainer}>
                    <GoogleMapsContainer />
                </div>
            </div>
            <hr />

            <div className={styles.iconsContainer}>
                <a target="blank" href="https://www.facebook.com/kurt.hardy">
                    <FacebookIcon /> <span className={styles.text}>Facebook</span>
                </a>
                <a target="blank" href="https://twitter.com/kurtishardy">
                    <TwitterIcon /> <span className={styles.text}>Twitter</span>
                </a>
                <a target="blank" href="https://www.linkedin.com/in/kurtis-hardy-4a0840a5//">
                    <LinkedInIcon /> <span className={styles.text}>Linked In</span>
                </a>
                <a target="blank" href="https://github.com/kurt-hardy">
                    <GitHubIcon /> <span className={styles.text}>GitHub</span>
                </a>
            </div>
        </div>
        <hr />

        <div className={styles.copyright}>
            <p>
                Handcrafted and homemade.
                <br />
                © Kurtis Hardy 2017. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;
