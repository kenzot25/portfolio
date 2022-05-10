import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import face from "../../Assets/face.svg";
// import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
            <span className="blue"> INTRODUCE </span>
          </h1>
          <Row style={{ justifyContent: "space-between" }}>

            <Col md={8} className="home-about-description">
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think…
                <br />
                <br />I can create a website using
                <i>
                  <b className="blue"> HTML, CSS and JS (ReactJS).</b>
                </i>
                <br />
                Besides, i've basic knowledge of C++,Java,..
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="blue">Web Technologies and Products </b> and also
                  in areas related to <b className="blue">UX/UI design.</b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with
                <i>
                  <b className="blue">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="blue"> React.js</b> and some other cool stuff.
                </i>
              </p>
            </Col>
            <Col md={3} className="myAvtar">
              <img src={face} className="img-fluid avt" alt="avatar" />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="blue">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/kenzot25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.facebook.com/lbt258/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiFillFacebook />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/kenzodev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.instagram.com/toan__.__/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}
export default Home2;
