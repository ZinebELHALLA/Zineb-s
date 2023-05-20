import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import pngImage1 from "./html1.png";
import pngImage2 from "./html2.png";
import pngImage3 from "./Mern.png";
import pngImage4 from "./python.png";
import pngImage5 from "./wordpress.png";

function CertifNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <Col xs={12} md={2}>
            <img src={pngImage1} alt="Image 1" className="image" />
          </Col>
        </Row>
        <Row className="resume">
          <Col xs={12} md={2}>
            <img src={pngImage2} alt="Image 2" className="image" />
          </Col>
        </Row>
        <Row className="resume">
          <Col xs={12} md={2}>
            <img src={pngImage3} alt="Image 3" className="image" />
          </Col>
        </Row>
        <Row className="resume">
          <Col xs={12} md={2}>
            <img src={pngImage4} alt="Image 4" className="image" />
          </Col>
        </Row>
        <Row className="resume">
          <Col xs={12} md={2}>
            <img src={pngImage5} alt="Image 5" className="image" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>
      </Container>
    </div>
  );
}

export default CertifNew;
