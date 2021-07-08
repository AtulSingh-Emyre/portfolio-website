import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import './styles.css'
import Gymkhana from "../../Assets/Projects/Gymkhana.png";
import Tradycoon from "../../Assets/Projects/Tradycoon.png";
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
              techStack={[' react-native ',' NodeJS ',' TypeScript ']}
              role={[' Owner ']}
              featured={true}
              selectProject = {handleSelectProject}
              imgPath={Tradycoon}
              isBlog={false}
              title="Tradycoon"
              description={["A Trading application which I developed while in college."," The Application is available for download on both - Android and IOS.","The application aims to provide a platform to the Analysts and Traders in our country to easen their business and also aims to educate those who are new to trading."]}
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              techStack={['ReactJS','NodeJS','TypeScript']}
              featured={true}
              selectProject = {handleSelectProject}
              imgPath={Gymkhana}
              role={['Full Stack Developer','Team Lead']}
              isBlog={false}
              title="Gymkhana Website"
              description={["The website is the Official Website of the Student Activity Center (Gymkhana) of IIT Dharwad","As the lead of a team of 6, I was responsible to work over the entire lifecycle of the website, from its illustrations in design tools to its final deployment over the official domain in our college."]}
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
