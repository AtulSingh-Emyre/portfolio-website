import React from 'react';
import {Row} from 'react-bootstrap';
import { projectsListValue } from '../constants/projectsConstants';
import map from 'lodash/map';
import { parseNewLine } from '../Utils';
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import {BiLinkExternal} from 'react-icons/bi'
import { AiFillStar} from "react-icons/ai";

const DetailsContainer = (props) => {
    const data = projectsListValue[props.id];
    console.log(data);
    return (
        <div>
            <Row style={{justifyContent:'space-between', alignItems:'center'}}>
                <h1> <strong >{data.name}</strong></h1>{" "} 
                </Row>
                <Row>
                <h5>{data.tech.join(" | ")}</h5> 
                </Row>
                <Row style={{justifyContent:'space-between', paddingBottom:10}}>
                
                {data.link? 
                        <Button
                        href={data.link.value}
                        target="_blank"
                        // className="fork-btn-inner"
                        style={{marginBottom:0}}>
                    <BiLinkExternal /> &nbsp;
                        {data.link.name}
                </Button>:<></>}
                {data.github? 
                        <Button
                        href={data.github.value}
                        target="_blank"
                        // className="fork-btn-inner"
                        style={{marginBottom:0}}>
                    <CgGitFork style={{ fontSize: "1em", margin:'auto' }} />{" "}
                    <AiFillStar style={{ fontSize: "0.9em" }} />
                </Button>:<></>}
                
            </Row>

            {map(data.description, (description, index) => {
                if (description.type === "text") {
                    
                    const bcg = description.highlight?{backgroundColor:'#DCE775'}:{}
                
                return <div key={index} style={{...bcg,padding:5, margin:10, borderRadius:5}} >{parseNewLine(description.value)}</div>;
                } else if (description.type === 'points') {
                return (
                    <div key={index}>
                    {description.title ? <div style={{}}><h6>{description.title}</h6></div> : null}
                    <ul >
                        {
                        map(description.value, (value, index) => (
                            <li key={index}>{value}</li>
                        ))
                        }
                    </ul>
                    </div>
                )
                } else if (description.type === 'header') {
                return (<div key={index} style={{}}><strong>{description.value}</strong></div>)
                }
                return null;
            })}
        </div>
    );
}

export default DetailsContainer;
