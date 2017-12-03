import React from "react";
import PropTypes from "prop-types";
import { Map, GoogleApiWrapper } from "google-maps-react";

const GoogleMapsContainer = props => (
    <Map
        google={props.google}
        zoom={8}
        style={{ width: "100%", height: "100%", position: "relative" }}
        initialCenter={{
            lat: 44.234455,
            lng: -79.448871,
        }}
    />
);

GoogleMapsContainer.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    google: PropTypes.object,
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyAePfWSJDJP1I7q6uB8ZBa3n4eC51XLoTg",
})(GoogleMapsContainer);
