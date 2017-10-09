import React from "react";
import Main from "Assets/main.jpg";
import styles from "./styles.scss";

const SectionOne = () => (
    <div className={styles.container}>
        <img src={Main} className={styles.image} alt="Niagara Falls" />
        <div className={styles.modal} />
    </div>
);

export default SectionOne;
