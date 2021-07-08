import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import './styles.css'
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ProjectItemDetails from "../ProjectModal/ProjectItemDetails";


function Projects() {
  const [show, setShow] = useState(false);
  const [id,setId] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSelectProject = (id) => {
    setId(id);
    handleShow();
  }  
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
              selectProject = {handleSelectProject}
              imgPath={chatify}
              isBlog={false}
              title="Tradycoon"
              description="A Trading application which I developed while in college. The Application is available for download on both - Android PlayStore and IOS AppStore."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
            selectProject = {handleSelectProject}
              imgPath={leaf}
              isBlog={false}
              title="Gymkhana Website"
              description="I led the team in making the official Gymkhana Website for our college, IIT Dharwad."
              link=""
            />
          </Col>
          </Row>
        <Modal show={show} onHide={handleClose} dialogClassName={'projectModalContainerStyles'}>
        <Modal.Body>
          <Container>
          <ProjectItemDetails projectId={id}/>
          </Container>
          </Modal.Body>
        </Modal>
      </Container>
    </Container>
  );
}

export default Projects;
