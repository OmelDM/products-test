import React from "react";
import PropTypes from "prop-types";
import { Panel, Button, Row, Col, Glyphicon } from "react-bootstrap";

import ColorsList from "./ColorsList";

const propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        colors: PropTypes.array.isRequired
    }).isRequired,
    onDeleteProduct: PropTypes.func.isRequired
};

const Product = ({ product, onDeleteProduct }) => {
    return (
        <Panel header={product.name}>
            <Row>
                <Col xs={12} md={10}>
                    <ColorsList colors={product.colors} />
                </Col>
                <Col xs={12} md={2}>
                    <Button
                        onClick={() => onDeleteProduct(product.id)}
                        bsStyle="danger"
                    >
                        <Glyphicon glyph="glyphicon glyphicon-remove" />
                    </Button>
                </Col>
            </Row>
        </Panel>
    );
};

Product.propTypes = propTypes;

export default Product;
