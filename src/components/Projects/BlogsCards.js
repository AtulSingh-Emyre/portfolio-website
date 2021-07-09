import React from "react";
import Card from "react-bootstrap/Card";
import {AiFillStar} from 'react-icons/ai'
import './styles.css';
function BlogsCards(props) {
  const handleClick = () => {
    props.selectProject(props.title);
  }
  return (
      <Card className="blog-card-view" onClick={handleClick} style={{cursor:'pointer', maxWidth:300}}>
        <Card.Img variant="top" src={props.imgPath} className="blog-img" style={{maxWidth:300}} />
        <Card.Body style={{marginBottom:0, paddingBottom:0}}>
        <Card.Title >
          <strong className="main-name">
            {props.title} 
          </strong>
          {' '} 
          {props.featured?
              <AiFillStar 
                color={'yellow'} 
                style={{ marginLeft:10, marginBottom:5}}
              />:<></>}
        </Card.Title>
        <Card.Subtitle style={{ textAlign: "center", marginTop:3 }}>
          <span className="purple">
            <strong>
            {props.role.join('  |  ')}
            </strong>
          </span>
        </Card.Subtitle>
        <Card.Subtitle style={{ textAlign: "center", marginTop:5 }}>
          <span className="purple">{props.desc.join('  |  ')}</span>  
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "center", marginTop:5 }}>
          <span className="purple">{props.sub.join('  |  ')}</span>  
        </Card.Text>
        <br/>
      </Card.Body>
      </Card>
  );
}

export default BlogsCards;
