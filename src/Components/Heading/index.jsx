import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Heading = props => (
    <h2 className={styles.heading}>{props.text}</h2>
);

Heading.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Heading;
