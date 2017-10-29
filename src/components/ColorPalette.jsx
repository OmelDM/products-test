import React from "react";
import PropTypes from "prop-types";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import { rgbFromColorId } from "../utils";

const propTypes = {
    color: PropTypes.string.isRequired
};

const ColorPalette = ({ color }) => {
    const style = {
        width: "40px",
        height: "40px",
        margin: "0 10px",
        background: rgbFromColorId(color)
    };

    const tooltip = <Tooltip id={color}>{color}</Tooltip>;

    return (
        <OverlayTrigger placement="top" overlay={tooltip}>
            <div style={style} />
        </OverlayTrigger>
    );
};

ColorPalette.propTypes = propTypes;

export default ColorPalette;
