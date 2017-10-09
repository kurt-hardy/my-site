import React from "react";
import logo from "Assets/logo.png";
import styles from "./styles.scss";

const Header = () => (
    <header className={styles.container}>
        <img src={logo} className={styles.logo} alt="kh" />
        <h1>Kurtis Hardy</h1>
    </header>
);

export default Header;
