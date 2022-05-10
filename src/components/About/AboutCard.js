import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hey guy!. It's me, <span className="blue">Toan </span>
              from <span className="blue"> Hanoi, Vietnam.</span>
              <br />I am a freshman at Hanoi Open University.
              <br />
              <br />
              Apart from coding and learning, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Reading book
              </li>
              <li className="about-activity">
                <ImPointRight /> Running
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>

            <p style={{ marginBlockEnd: 0, color: "#48cae4" }}>
              "It only has to work once!"{" "}
            </p>
            <footer className="blockquote-footer">Amelia Brand</footer>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
