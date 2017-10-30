import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { ROUTES } from "../constants/Routes";

const style = {
    fontWeight: "bold",
    color: "red"
};

const Navigation = () => (
    <Col xs={12} lg={6} lgOffset={3}>
        <NavLink to={ROUTES.CATALOG} activeStyle={style}>
            Catalog
        </NavLink>
        {' | '}
        <NavLink to={ROUTES.CREATE} activeStyle={style}>
            Create
        </NavLink>
    </Col>
);

export default Navigation;
