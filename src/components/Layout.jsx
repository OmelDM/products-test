import React from "react";
import { Grid, Row } from "react-bootstrap";

import Navigation from './Navigation';

const Layout = ({ children }) => (
    <Grid>
        <hr />
        <Navigation />
        <hr />
        <Row>{children}</Row>
    </Grid>
);

export default Layout;
