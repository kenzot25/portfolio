import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import instaclone from "../../Assets/Projects/instaclone.png";

import filmlau from "../../Assets/Projects/filmlau.png";
import todoapp from "../../Assets/Projects/todoapp.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="blue">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={filmlau}
                  title="Film Lau"
                  description={`Movie streaming app using API from themoviedb`}
                  feature={`⬤ Provides information about trending movies.
⬤ Auto search and streaming torrents or iframe. 
⬤ Auto seach and add subtitles to video streams. 
⬤ Show infomation about trailers movies. 
⬤ View the optimal layout for the app depending on their device's screen size.
              `}
                  link="https://filmlau.ml/"
                  source="https://github.com/kenzot25/filmlau.ml"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={instaclone}
                  title="Instagram Clone"
                  description={`Backend: Sanity.io for database,Firebase for authentication.
Frontend: ReactJS and TailwindCSS.Feature:`}
                  feature={`⬤ Create a post and Delete the post if is the author.
⬤ Save and unsave post. 
⬤ Like and comment on the post.   
⬤ Delete the comment if is the author. 
⬤ Edit profile: fullname, username, gender,...
⬤ Change password.
⬤ View the optimal layout for the app depending on their device's screen size.
⬤ And much more...`}
                  link="https://instagrampro.netlify.app/"
                  source="https://github.com/kenzot25"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={todoapp}
                  title="Todo App"
                  description="Using React(useState,React Context,...) and TaiwindCSS.Feature:"
                  feature={`⬤ View the optimal layout for the app depending on their device's screen size.
⬤ See hover states for all interactive elements on the page.
⬤ Add new todos to the list. 
⬤ Mark todos as complete. 
⬤ Delete todos from the list.
⬤ Filter by all/active/complete todos. 
⬤ Clear all completed todos.
⬤ Toggle light and dark mode.`}
                  link="https://creativetodo.netlify.app/"
                  source="https://github.com/kenzot25"
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
