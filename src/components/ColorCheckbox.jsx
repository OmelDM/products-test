import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "react-bootstrap";

const propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

const ColorCheckbox = ({ label, value, checked, onChange }) => {
    return (
        <Checkbox value={value} checked={checked} onChange={onChange}>
            {label}
        </Checkbox>
    );
};

ColorCheckbox.propTypes = propTypes;

export default ColorCheckbox;
