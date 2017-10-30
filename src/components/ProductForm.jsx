import React from "react";
import PropTypes from "prop-types";
import {
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Button
} from "react-bootstrap";

import ColorCheckbox from "./ColorCheckbox";

const propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onColorChange: PropTypes.func.isRequired,
    supportedColors: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            displayName: PropTypes.string
        })
    ).isRequired,
    product: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        colors: PropTypes.array.isRequired
    }).isRequired
};

const ProductForm = ({
    onFormSubmit,
    onNameChange,
    onColorChange,
    supportedColors,
    product
}) => {
    return (
        <Col xs={12} lg={6} lgOffset={3}>
            <form onSubmit={onFormSubmit}>
                <FormGroup
                    validationState={product.isValid ? "success" : "warning"}
                >
                    <ControlLabel>Name:</ControlLabel>
                    <FormControl
                        type="text"
                        value={product.name}
                        onChange={onNameChange}
                        placeholder="Enter product name"
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup>
                    {supportedColors.map(color => {
                        return (
                            <ColorCheckbox
                                key={color.id}
                                label={color.displayName}
                                value={color.id}
                                checked={product.colors.includes(color.id)}
                                onChange={onColorChange}
                            />
                        );
                    })}
                </FormGroup>
                <FormGroup>
                    <Button
                        type="submit"
                        bsStyle={product.isValid ? "success" : "default"}
                        disabled={!product.isValid}
                    >
                        Create
                    </Button>
                </FormGroup>
            </form>
        </Col>
    );
};

ProductForm.propTypes = propTypes;

export default ProductForm;
