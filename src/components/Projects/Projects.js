import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import './styles.css'
import Gymkhana from "../../Assets/Projects/Gymkhana.png";
import Tradycoon from "../../Assets/Projects/Tradycoon.png";
import ProjectItemDetails from "../ProjectModal/ProjectItemDetails";
import REST from "../../Assets/Projects/REST.png";
import BlogsCards from "./BlogsCards";
import PARSEC from "../../Assets/Projects/PARSEC2019.jpg";
import SOI2021 from "../../Assets/Projects/SOI2021.jpg";
import Codeathon from "../../Assets/Projects/Codethon1.2.jpg";
const ProjectConstants = [
  {
  techStack:[' react-native ',' NodeJS ',' TypeScript '],
  role:[' Owner '],
  featured:true,
  imgPath:Tradycoon,
  title:"Tradycoon"
  },
  {
    techStack:['ReactJS','NodeJS','TypeScript'],
    role:['Full Stack Developer','Team Lead'],
    featured:true,
    imgPath:Gymkhana,
    title:"Gymkhana Website"
  },
  {
    techStack:['NodeJS','TypeScript','MongoDB'],
    role:['Owner'],
    featured:true,
    imgPath:REST,
    title:"REST API"
  },
];
const ManagementConstants = [
  {
    desc:['Annual Tech Fest'],
    sub:['IIT Dharwad','2019'],
    role:['Marketing Team'],
    featured:true,
    imgPath:PARSEC,
    title:"PARSEC"
  },{
    desc:['Freshers Coding Event'],
    sub:['IIT Dharwad','2019'],
    role:['Organizer'],
    featured:false,
    imgPath:Codeathon,
    title:"Codeathon"
  },{
    desc:['Technical Event Marathon'],
    sub:['IIT Dharwad','2021'],
    role:['Organizer'],
    featured:true,
    imgPath:SOI2021,
    title:"Summer of Innovation"
  },{
    desc:['Collaborative Event between IITs'],
    sub:['Inter - IIT Event','2021'],
    role:['Organizer'],
    featured:true,
    imgPath:SOI2021,
    title:"Inter IIT Tech Collaboration"
  },
]

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
          My Recent <strong className="purple">Tech Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            ProjectConstants.map(item => (<Col md={4} className="project-card">
            <ProjectCard
              {...item}
              selectProject = {handleSelectProject}
            />
          </Col>
          ))
          }
          </Row>
        <h1 className="project-heading">
          My{' '} <strong className="purple"> Management </strong> {' '}Related Work
        </h1>
        <p style={{ color: "white" }}>
          Here are a few events which I have hosted/been a part of the organizing team.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            ManagementConstants.map(item => (<Col md={4} className="project-card">
              <BlogsCards
                {...item}
                selectProject = {handleSelectProject}
              />
            </Col>
            ))
          }
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
