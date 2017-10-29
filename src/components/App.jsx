import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";

import CreateProductFormContainer from "./CreateProductFormContainer";
import ProductCatalog from "./ProductCatalog";

class App extends Component {
    state = {
        products: []
    };

    createProduct(product) {
        const products = this.state.products.concat(product);
        this.setState({
            products
        });
    }

    deleteProductWithId(id) {
        const products = this.state.products.filter(
            product => product.id !== id
        );
        this.setState({
            products
        });
    }

    render() {
        const { products } = this.state;

        return (
            <Grid>
                <Row>
                    <CreateProductFormContainer
                        onCreateProduct={product => this.createProduct(product)}
                    />
                </Row>
                <hr />
                <Row>
                    <ProductCatalog
                        products={products}
                        onDeleteProduct={id => this.deleteProductWithId(id)}
                    />
                </Row>
            </Grid>
        );
    }
}

export default App;
