import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiMacos,
  SiNotion,
  SiGoogleanalytics,
  SiAdobe,
  SiXcode,
  SiAndroidstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="macOS">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Notion">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Vercel">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Xcode">
        <SiXcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Android Studio">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Google Analytics">
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-tooltip="Adobe Creative Suite">
        <SiAdobe />
      </Col>
    </Row>
  );
}

export default Toolstack;
