import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import {AiFillStar} from 'react-icons/ai'
import './styles.css';
function ProjectCards(props) {
  const handleClick = () => {
    props.selectProject(props.title)
  }
  return (
    <Card className="project-card-view whitebg" onClick={handleClick} style={{cursor:'pointer'}}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{backgroundColor:'white', maxWidth:300, margin:'auto'}} />
      <Card.Body>
        <Card.Title><strong className="main-name"> {props.title} </strong>{' '} {props.featured?<AiFillStar color={'yellow'} style={{ marginLeft:10, marginBottom:5}}/>:<></>}</Card.Title>
        <Card.Subtitle style={{ textAlign: "center", marginTop:3 }}>
        <span className="purple">
          <strong>
          {props.techStack.join('  |  ')}
          </strong>
        </span>
        </Card.Subtitle>
        <Card.Subtitle style={{ textAlign: "center", marginTop:5 }}>
        <span className="purple">{props.role.join('  |  ')}</span>  
        </Card.Subtitle>
        <br/>
        {/* <Button variant="primary" onClick={handleClick} target="_blank" styles={{}}>
          <BiLinkExternal /> &nbsp;
          {'view project'}
        </Button> */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
