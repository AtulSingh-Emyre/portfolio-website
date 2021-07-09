import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const details = {
  leetCode : {
    rating: 1794,
    contests: 28,
    'problems solved': 311,
    Acceptance: '59.0%',
    profile: 'https://leetcode.com/Emyre/'
  },
  codeForces : {
    rating: 1239,
    contests: 5,
    'problems solved': 56,
    profile: 'https://codeforces.com/profile/190020009'
  },
  sem: {
    cpi: 9.28,
    courses: ['number theory','computer programming','Data Structures and Algorithms']
  }
}

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> */}
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Organizations</h3>
            <Resumecontent
              title="OSS | Owner"
              date="May 2021 - present"
              content={[
                "Promoted to Owner of the Open Student Society Organization on Github as on May 2021",
              ]}
            />
            <Resumecontent
              title="Coding Club | Member"
              date="September 2019 - present"
              content={[
                "Member and contributor of The Coding Club at IIT Dharwad",
              ]}
            />
            <h3 className="resume-title">Position of Responsibilities</h3>
            <Resumecontent
              title="General Secretary, Technical Affairs - IIT Dharwad"
              date={'May 2021 - present'}
              content={[
                "Responsible to oversee all the Technical Activities at our College at the lifecycle level",
                "Organizing various events on behalf of the Technical Council",
                "Interacting with Industry experts to host collaborations with the institute",
                "Allocating and Supervising fundings for the clubs"
              ]}
            />
            <Resumecontent
              title="Inter-IIT Contingent Leader, IIT Dharwad"
              date={'Jan 2021 - March 2021'}
              content={[
                "Contingent Leader of all the teams that took part in the Inter IIT 2021 at IIT Guwahati from our Insitute",
                "Managing and selecting teams for taking part in the various problem statements available",
                "Representing our Institute at the event, Managing the flow of submissions from our Insitute."
              ]}
            />
            <Resumecontent
              title="Student Mentor, IIT Dharwad"
              date= {'Aug 2020 - July 2021'}
              content={[
                "Mentoring a group of 6 freshers at our Insitute",
                "Giving a technical background and supporting the mentees in terms of academics, lifestyles as well as recommending career paths.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Indian Institute of Technology, Dharwad"
              date="2019 - Present"
              content={[`CGPA: ${details.sem.cpi} (Till 4th Sem)`,`Prominent Courses: ${details.sem.courses.join(' | ')}`]}
              courses={details.sem.courses}
            />
            <Resumecontent
              title="12TH BOARD [Bangalore International Academy, Bangalore]"
              date="2017 - 2019"
              content={["Precentage: 94%"]}
            />
            <Resumecontent
              title="10TH BOARD [The Oxford Senior Secondary School,Bangalore] "
              date="2007 - 2017"
              content={["Precentage: 10 CGPA"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title="LeetCode"
              content={[
                `Current rating: ${details.leetCode.rating}`,
                `Number of Contests: ${details.leetCode.contests}`,
                `Acceptance rate: ${details.leetCode.Acceptance}`,
                `Number of problems solved: ${details.leetCode["problems solved"]}`,
              ]}
            />
            <Resumecontent
              title="Codeforces"
              content={[
                `Current rating: ${details.codeForces.rating}`,
                `Number of Contests: ${details.codeForces.contests}`,
                `Number of problems solved: ${details.codeForces["problems solved"]}`,
              ]}
            />
            <Resumecontent
              title="Inter-IIT Tech Meet 2021"
              content={[
                `Bronze in ASTROSAT's space recognition problem statement`,
                `National level event with all IITs taking part, one team per IIT`,
                `Was the team lead and also one of the 4 presenters from our institute`,
                `Problem statement involved web development and data analysis`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
