import React from "react";
import Heading from "Components/Heading";
import styles from "./styles.scss";

const Footer = () => (
    <footer className={styles.container}>
        <Heading text="Contact" />
        <div className="left">
            <img alt="canada flag" />
            <p>Google maps showing Keswick Canada</p>
        </div>

        <div className="right">
            <p>please use one of the below ways to contact me</p>
            <img alt="facebook" />
            <img alt="linkedIn" />
            <img alt="twitter" />
            <img alt="email" />
        </div>
    </footer>
);

export default Footer;
