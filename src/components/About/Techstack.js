import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./About.module.css";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    // DiGit,
} from "react-icons/di";
import {
    SiFirebase,
    SiHtml5,
    SiCss3,
    SiFigma,
    SiTailwindcss,
    SiBootstrap,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className={`${classes["tech-icons"]} `}>
                <p className={classes["tech-hover"]}>HTML</p>
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className={`${classes["tech-icons"]} `}>
                <p className={classes["tech-hover"]}>CSS</p>
                <SiCss3 />
            </Col>
            <Col xs={4} md={2} className={`${classes["tech-icons"]} `}>
                <p className={classes["tech-hover"]}>Javascript</p>
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className={`${classes["tech-icons"]} `}>
                <p className={classes["tech-hover"]}>ReactJS</p>
                <DiReact />
            </Col>
            <Col xs={4} md={2} className={`${classes["tech-icons"]}`}>
                <p className={classes["tech-hover"]}>TailwindCSS</p>
                <SiTailwindcss />
            </Col>
            <Col xs={4} md={2} className={`${classes["tech-icons"]}`}>
                <p className={classes["tech-hover"]}>Bootstrap</p>
                <SiBootstrap />
            </Col>

            <Col xs={4} md={2} className={`${classes["tech-icons"]} `}>
                <p className={classes["tech-hover"]}>NodeJS</p>
                <DiNodejs />
            </Col>

            <Col xs={4} md={2} className={`${classes["tech-icons"]} `}>
                <p className={classes["tech-hover"]}>MongoDB</p>
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className={`${classes["tech-icons"]} `}>
                <p className={classes["tech-hover"]}>Firebase</p>
                <SiFirebase />
            </Col>

            <Col xs={4} md={2} className={`${classes["tech-icons"]}`}>
                <p className={classes["tech-hover"]}>Figma</p>
                <SiFigma />
            </Col>
        </Row>
    );
}

export default Techstack;
