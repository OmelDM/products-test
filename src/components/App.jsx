import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./Layout";
import { ROUTES } from "../constants/Routes";
import ProductCreatorContainer from "./ProductCreatorContainer";
import ProductCatalogContainer from "./ProductCatalogContainer";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Redirect exact from={ROUTES.HOME} to={ROUTES.CATALOG} />
                    <Route
                        path={ROUTES.CREATE}
                        component={ProductCreatorContainer}
                    />
                    <Route
                        path={ROUTES.CATALOG}
                        component={ProductCatalogContainer}
                    />
                </Switch>
            </Layout>
        );
    }
}

export default App;
