import React from "react";
import Heading from "Components/Heading";
import styles from "./styles.scss";

const Skills = () => (
    <div className={styles.container}>
        <Heading text="Skills" />
        <div className={styles.content}>
            <div className={styles.quote}>
                <span>&quot;If you find a path with no obstacles, it probably doesn&apos;t lead anywhere.&quot;</span>
                <a href="https://en.wikipedia.org/wiki/Frank_Clark_(politician)">
                    - Frank Clark
                </a>
            </div>
            <h3>Technical</h3>
            <div className={styles.table}>
                <div className={styles.column}>
                    <span className={styles.item}>
                        C#
                        <span>*****</span>
                    </span>
                    <span className={styles.item}>
                        Javascript
                        <span>*****</span>
                    </span>
                </div>
                <div className={styles.column}>
                    <span className={styles.item}>
                        SQL
                        <span>***</span>
                    </span>
                    <span className={styles.item}>
                        React
                        <span>*****</span>
                    </span>
                </div>
            </div>

            <div className={styles.disclaimer}>
                Disclaimer: All the above skills are my own self critical rating, you are free to make your own
                mine up.
            </div>
        </div>
    </div>
);

export default Skills;
