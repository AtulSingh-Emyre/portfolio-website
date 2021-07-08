import React from 'react';
import {Row} from 'react-bootstrap';
import { projectsListValue } from '../constants/projectsConstants';
import map from 'lodash/map';
import { parseNewLine } from '../Utils';
const DetailsContainer = (props) => {
    const data = projectsListValue[props.id];
    
    return (
        <div>
            <Row>
                <h1> <strong >{data.name}</strong></h1>
                </Row>
                <Row>
                <h5>{data.tech.join(" | ")}</h5>
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
