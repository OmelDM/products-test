import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const style = {
    fontWeight: "bold",
    color: "red"
};

const Layout = ({ children }) => (
    <Grid>
        <hr />
        <Row>
            <Col xs={2} mdOffset={3}>
                <NavLink to="/catalog" activeStyle={style}>
                    Catalog
                </NavLink>
            </Col>
            <Col xs={2}>
                <NavLink to="/create" activeStyle={style}>
                    Create
                </NavLink>
            </Col>
        </Row>
        <hr />
        <Row>{children}</Row>
    </Grid>
);

export default Layout;
