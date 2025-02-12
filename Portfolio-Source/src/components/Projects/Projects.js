import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="autoPrivateGPT"
              description="Auto train using a website link to create chat bot using LLM."
              ghLink="https://github.com/manishshanker/autoPrivateGPT"
              demoLink="https://github.com/manishshanker/autoPrivateGPT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="tempalate-flutter (extended)"
              description="Extended template for flutter running on Gitpod"
              ghLink="https://github.com/manishshanker/template-flutter"
              demoLink="https://github.com/manishshanker/template-flutter"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
