import React from 'react';
import ImageContainer from './ImageContainer';
import DetailsContainer from './DetailsContainer';
import {Row,Col} from 'react-bootstrap'
const ProjectItemDetails = ({projectId}) => {
    return (
        <div styles={{width:'100%'}}>
            <Row styles={{width:'100%'}}>
                <Col xl={12} md={12} sm={12} style={{margin:'auto'}}>
                    <DetailsContainer id={projectId}/>
                </Col> 
                <Col xl={12} md={12} sm={12} style={{margin:'auto'}}>
                 <ImageContainer projectId={projectId} />
                </Col>
            </Row>
        </div>
    );
}

export default ProjectItemDetails;
