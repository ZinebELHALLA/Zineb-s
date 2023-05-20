import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiJava,
  DiWordpress,
  DiGithub,

} from "react-icons/di";
import {
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <  DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <  DiWordpress/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <  DiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <  DiJavascript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <  DiJava/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      
  
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
 
    </Row>
  );
}

export default Techstack;
