import React from "react";
import Heading from "Components/Heading";
import Stars from "./stars";
import styles from "./styles.scss";

const Skills = () => (
    <div className={styles.container}>
        <Heading text="Skills" />
        <div className={styles.content}>
            <div className={styles.quote}>
                <span>&quot;If you find a path with no obstacles, it probably doesn&apos;t lead anywhere.&quot; </span>
                <a target="blank" href="https://en.wikipedia.org/wiki/Frank_Clark_(politician)">
                    - Frank Clark
                </a>
            </div>
            <hr />

            <div className={styles.table}>
                <div className={styles.column}>
                    <h3>Technical</h3>
                    <div className={styles.row}>
                        <p>Javascript</p>
                        <Stars score={5} />
                    </div>
                    <div className={styles.row}>
                        <p>React</p>
                        <Stars score={5} />
                    </div>
                    <div className={styles.row}>
                        <p>C#</p>
                        <Stars score={5} />
                    </div>
                    <div className={styles.row}>
                        <p>Unit testing</p>
                        <Stars score={5} />
                    </div>
                    <div className={styles.row}>
                        <p>Redux</p>
                        <Stars score={4} />
                    </div>
                    <div className={styles.row}>
                        <p>Web API</p>
                        <Stars score={4} />
                    </div>
                    <div className={styles.row}>
                        <p>.NET core 2.0</p>
                        <Stars score={2} />
                    </div>
                    <hr />
                </div>
                <div className={styles.column}>
                    <h3>Other Skills</h3>
                    <div className={styles.row}>
                        <p>Continuous Integration</p>
                        <Stars score={4} />
                    </div>
                    <div className={styles.row}>
                        <p>Dev Ops</p>
                        <Stars score={3} />
                    </div>
                    <div className={styles.row}>
                        <p>UX /UI design</p>
                        <Stars score={3} />
                    </div>
                    <div className={styles.row}>
                        <p>SQL - MSSQL / MySQL / PostgreSQL</p>
                        <Stars score={3} />
                    </div>
                    <div className={styles.row}>
                        <p>Mongo DB</p>
                        <Stars score={3} />
                    </div>

                    <div className={styles.row}>
                        <p>Mongo DB</p>
                        <Stars score={3} />
                    </div>

                    <div className={styles.row}>
                        <p>Mongo DB</p>
                        <Stars score={3} />
                    </div>
                </div>
            </div>
            <hr />

            <div className={styles.disclaimer}>
                Disclaimer: All the above skills are my own self critical rating, you are free to make your own
                mine up.
            </div>
        </div>
    </div>
);

export default Skills;
