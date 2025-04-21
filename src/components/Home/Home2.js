import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
       <Container> 
        <Row>
          
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Currently having 2 years of experience in <b className="purple">Software Engineering</b> at <b className="purple">6D Technologies, Bangalore</b>, I have worked on various technologies like AWS, Linux, ReactJS, Kubectl. <br/>
              Having done my B-Tech at <b className="purple">Indian Institute of Technology, Dharwad</b>, I am a coding enthusiast who loves to <b className="purple">develop polished and scalable products</b> which can be used in real-time. 
              <br />
              <br />I am fluent in classics like{' '}
              <i>
                <b className="purple">Javascript, Python and Java. </b>
              </i>
              <br />
              <br />
              My love to code brought my interest in &nbsp;
              <i>
                <b className="purple">Competitive Programming </b>, <b className="purple">Cloud Computing using AWS </b> and
                also in{" "}
                <b className="purple">
                  Full Stack Development.
                </b>
              </i>
              <br />
              </p>
          </Col>
          
        <Col md={5} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{height:280, width:280, borderRadius:140}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AtulSingh-Emyre"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/atul-singh-457610195/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/atulsingh.pks/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    </Container>
  );
}
export default Home2;
