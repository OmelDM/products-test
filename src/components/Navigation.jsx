import React from "react";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { ROUTES } from "../constants/Routes";

const style = {
    fontWeight: "bold",
    color: "red"
};

const Navigation = () => (
    <Row>
        <Col xs={2} mdOffset={3}>
            <NavLink to={ROUTES.CATALOG} activeStyle={style}>
                Catalog
            </NavLink>
        </Col>
        <Col xs={2}>
            <NavLink to={ROUTES.CREATE} activeStyle={style}>
                Create
            </NavLink>
        </Col>
    </Row>
);

export default Navigation;
