import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./Layout";
import { ROUTES } from "../constants/Routes";
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
            <Layout>
                <Switch>
                    <Redirect exact from={ROUTES.HOME} to={ROUTES.CREATE} />
                    <Route
                        path={ROUTES.CREATE}
                        component={() => (
                            <CreateProductFormContainer
                                onCreateProduct={product =>
                                    this.createProduct(product)}
                            />
                        )}
                    />
                    <Route
                        path={ROUTES.CATALOG}
                        component={() => (
                            <ProductCatalog
                                products={products}
                                onDeleteProduct={id =>
                                    this.deleteProductWithId(id)}
                            />
                        )}
                    />
                </Switch>
            </Layout>
        );
    }
}

export default App;
