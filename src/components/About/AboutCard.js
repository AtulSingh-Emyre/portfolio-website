import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I am <span className="purple">Atul Singh </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently in the 3rd year of my BTech at IIT Dharwad. Here, I have not only acquired experience on the technical domain, but also on management side. 
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Management related work (like hosting an event)
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Simplicity is the soul of efficiency!"{" "}
          </p>
          <footer className="blockquote-footer">Austin Freeman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
