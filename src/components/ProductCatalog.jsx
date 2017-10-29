import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

import Product from "./Product";

const propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            colors: PropTypes.array.isRequired
        })
    ).isRequired,
    onDeleteProduct: PropTypes.func.isRequired
};

const ProductCatalog = ({ products, onDeleteProduct }) => {
    const productsList = products.map(product => (
        <Product
            key={product.id}
            product={product}
            onDeleteProduct={onDeleteProduct}
        />
    ));
    return (
        <Col xs={12} lg={6} lgOffset={3}>
            {productsList}
        </Col>
    );
};

ProductCatalog.propTypes = propTypes;

export default ProductCatalog;
