import React from "react";
import PropTypes from "prop-types";

import CreateProductForm from "./CreateProductForm";
import { SUPPORTED_COLORS } from "../constants/SupportedColors";

const INITIAL_STATE = {
    name: "",
    colors: [],
    isValid: false
};

const propTypes = {
    onCreateProduct: PropTypes.func.isRequired
};

class CreateProductFormContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    state = INITIAL_STATE;

    handleNameChange(event) {
        const name = event.target.value;
        const isValid = /^[a-zA-Z0-9]{4,8}$/.test(name);

        this.setState({
            name,
            isValid
        });
    }

    handleColorChange(event) {
        const colorValue = event.target.value;

        if (this.state.colors.includes(colorValue)) {
            this.setState({
                colors: this.state.colors.filter(color => color !== colorValue)
            });
        } else {
            this.setState({
                colors: this.state.colors.concat(colorValue)
            });
        }
    }

    handleFormSubmit(event) {
        const { onCreateProduct } = this.props;
        const id = new Date().getTime();
        const product = Object.assign({ id }, this.state);

        event.preventDefault();
        onCreateProduct(product);
        this.setState(INITIAL_STATE);
    }

    render() {
        return (
            <CreateProductForm
                onFormSubmit={this.handleFormSubmit}
                onNameChange={this.handleNameChange}
                onColorChange={this.handleColorChange}
                supportedColors={SUPPORTED_COLORS}
                product={this.state}
            />
        );
    }
}

CreateProductFormContainer.propTypes = propTypes;

export default CreateProductFormContainer;
