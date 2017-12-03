import React from "react";
import PropTypes from "prop-types";
import StarIcon from "material-ui-icons/Star";
import styles from "./styles.scss";

const Stars = (props) => {
    const filledStars = [1, 2, 3, 4, 5];
    return (
        <div className={styles.stars}>
            {filledStars.map(i => (
                <StarIcon key={i} className={i <= props.score ? styles.filled : ""} />
            ))}
        </div>
    );
};

Stars.propTypes = {
    score: PropTypes.number,
};

export default Stars;
