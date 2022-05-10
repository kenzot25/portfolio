import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Kenzo's Portfolio Website</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} by Toan</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                    href="https://github.com/kenzot25"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.facebook.com/lbt258/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/kenzodev/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.instagram.com/toan__.__/"
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;
