import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import animationData from "../lotties/about-animate.json";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import mainIMG from "../../Assets/bug-fixing-bro.svg";
import Toolstack from "./Toolstack";
import Lottie from "lottie-react";
function About() {
  return (
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
                lg={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className="blue">me</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col lg={4} style={{ paddingBottom: "50px" }} className=" about-img ">
              <Lottie animationData={animationData} autoPlay={true} loop={true} />
            </Col>
          </Row>
          <h1 className="project-heading">
            My <strong className="blue">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="blue">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
  );
}

export default About;
