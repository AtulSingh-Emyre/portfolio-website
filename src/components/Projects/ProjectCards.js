import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import {AiFillStar} from 'react-icons/ai'
import './styles.css';
function ProjectCards(props) {
  const handleClick = () => {
    props.selectProject('snapteam')
  }
  return (
    <Card className="project-card-view whitebg">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{backgroundColor:'white'}} />
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
        {/* <Card.Text style={{ textAlign: "justify" }}>
          {props.description.map((text) => (
            <>{text}<br/><br/></>
          ))}
        </Card.Text> */}
        <Button variant="primary" onClick={handleClick} target="_blank" styles={{}}>
          <BiLinkExternal /> &nbsp;
          {'view project'}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
