import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/poke.png";
import emotion from "../../Assets/Projects/bib.png";
import editor from "../../Assets/Projects/tic.png";
import chatify from "../../Assets/Projects/word.png";
import suicide from "../../Assets/Projects/phar.png";
import bitsOfCode from "../../Assets/Projects/mern.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Projet de Wordpress"
              description="Un site web pour la Faculté Polydisciplinaire à Sidi Bennour"
              demoLink="https://www.youtube.com/watch?v=0blyMDPDVCA&ab_channel=zineb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Projet en MERN stack"
              description="Une Platforme d'intermédiation sociale entre les artisans et les clients"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Projet de HTML,CSS et JS "
              description="Le jeux fameux 'TicTacToe'"
              ghLink="https://github.com/ZinebELHALLA/TicTacToe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Projet de React Native"
              description="L'affichage des caractéristiques  du Pokemon souhaité"
              ghLink="https://github.com/ZinebELHALLA/Pokemon-Project"
              demoLink="https://snack.expo.dev/@shadow8/pokemon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Projet en MERN stack"
              description="Affichage des pharmacies selon la zone géographique"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Projet en JAVA"
              description="Gestion des livres et des adhérents dans une  bibliothèque"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
