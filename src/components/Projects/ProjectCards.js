import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal, BiCodeAlt } from "react-icons/bi";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text style={{ fontSize: "14px", whiteSpace: "pre-wrap" }}>
                        {props.description}
                    </Card.Text>
                    <Card.Text style={{ fontSize: "14px", whiteSpace: "pre-wrap" }}>
                        {props.feature}
                    </Card.Text>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        whiteSpace: "nowrap",
                        width: "100%",
                    }}
                >
                    <Button
                        href={props.link}
                        target="_blank"
                        style={{ marginTop: "1rem", fontSize: "14px" }}
                    >
                        <BiLinkExternal /> &nbsp; Open Website
                    </Button>
                    <Button
                        href={props.source}
                        target="_blank"
                        style={{ marginTop: "1rem", fontSize: "14px" }}
                    >
                        <BiCodeAlt /> &nbsp; View Code
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
