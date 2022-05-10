import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./About.module.css";
import {
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiAdobephotoshop,
    SiNetlify,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* <Col xs={4} md={2} className={classes["tech-icons"]}>
        <SiLinux />
      </Col> */}
            <Col xs={4} md={2} className={classes["tech-icons"]}>
                <p className={classes["tech-hover"]}>VS Code</p>
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className={classes["tech-icons"]}>
                <p className={classes["tech-hover"]}>Postman</p>
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className={classes["tech-icons"]}>
                <p className={classes["tech-hover"]}>Heroku</p>
                <SiHeroku />
            </Col>
            <Col xs={4} md={2} className={classes["tech-icons"]}>
                <p className={classes["tech-hover"]}>Netlify</p>
                <SiNetlify />
            </Col>
            <Col xs={4} md={2} className={classes["tech-icons"]}>
                <p className={classes["tech-hover"]}>Photoshop</p>
                <SiAdobephotoshop />
            </Col>
        </Row>
    );
}

export default Toolstack;
