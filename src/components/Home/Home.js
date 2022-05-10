import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import pdf from "../../Assets/LeBaToan_Resume_InternWeb.pdf";
import Lottie from "lottie-react";
import animationData from "../lotties/laptop-working.json";
import bg from '../../Assets/bg-1.jpg'

function Home() {
    // url(./Assets/bg-1.jpg)
  return (
      <section style={{backgroundImage:bg}}>
        <Container fluid className="home-section">
          <Particle />

          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi! I'm
                  <strong className="main-name"> Toan</strong>
                  <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                </h1>

                <div
                    style={{
                      paddingLeft: 15,
                      paddingBottom: 45,
                      textAlign: "left",
                    }}
                >
                  <Type />
                </div>
                <a
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-cv"
                >
                  Download CV
                </a>

                <p
                    style={{
                      marginLeft: 15,
                      marginTop: 13,
                      color: "e5e5e5",
                      fontSize: ".8rem",
                    }}
                >
                  I am currently open for part-time work.
                </p>
              </Col>

              <Col md={5} className="home-bg-animate">
                <Lottie
                    animationData={animationData}
                    autoPlay={true}
                    loop={true}
                    height={400}
                    width={400}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Home2 />
      </section>
  );
}

export default Home;
