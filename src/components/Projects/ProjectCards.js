import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  const handleClick = () => {
    props.selectProject('snapteam')
  }
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleClick} target="_blank">
          <BiLinkExternal /> &nbsp;
          {'view project'}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
