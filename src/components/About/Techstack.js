import React, { useRef } from "react";
import { Col, Row, Overlay, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";

function Techstack() {
  const target = {
    java:useRef(null),
    js:useRef(null),
    ns:useRef(null),
    rc:useRef(null),
    mg:useRef(null),
    py:useRef(null),
    git: useRef(null),
    fb: useRef(null)
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" ref={target.java}>
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons" ref={target.js}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" ref={target.ns}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" ref={target.rc}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" ref={target.mg}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" ref={target.py}>
        <DiPython />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons" ref={target.git}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" ref={target.fb}>
        <SiFirebase />

      </Col>
    </Row>
  );
}

export default Techstack;
