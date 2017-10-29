import React from "react";
import PropTypes from "prop-types";

import ColorPalette from "./ColorPalette";

const propTypes = {
    colors: PropTypes.array.isRequired
};

const style = {
    display: "flex"
};

const ColorsList = ({ colors }) => {
    return (
        <div style={style}>
            {colors.map((color, index) => (
                <ColorPalette key={index} color={color} />
            ))}
        </div>
    );
};

ColorsList.propTypes = propTypes;

export default ColorsList;
