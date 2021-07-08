import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import './styles.css';
import Type from "./Type";
import Lottie from 'react-lottie';
import * as animationData from '../HomePageJumbAnimation.json';
import { useMediaQuery } from 'react-responsive'

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 724px)'
  })
  return (
    <section>
      <Container fluid className="home-section homepagecontentPaddingFix" id="home" style={{paddingTop:0,marginTop:0}}>
        <Particle />
        <Container className="home-content" style={{paddingTop:0,marginTop:0}}>
          <Row style={{paddingTop:0,marginTop:0}}>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Heyy! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ATUL SINGH!</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 0}}>
              {/* <img src={homeLogo} alt="home pic" className="img-fluid" /> */}
              <Lottie options={defaultOptions}
              height={isDesktopOrLaptop?450: 300}
              // width={isDesktopOrLaptop?400:320}
              isStopped={false}
              isPaused={false}/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
