import React from 'react';
// import ResponsiveGallery from 'react-responsive-gallery'
import Gallery from 'react-grid-gallery';

import {getProjectImages} from '../constants/projectImageConstants'
const ImageContainer = ({projectId}) => {
    const projectImages = getProjectImages(projectId); 
    console.log(projectImages);
    return (
        <div styles={{backgroundColor:'white'}}>
            {/* <ResponsiveGallery 
            useLightBox={true} 
            images={projectImages}
            numOfImagesPerRow={{xs: 1,s: 1,m: 2,l: 2,xl: 2, xxl:3}}
            colsPadding={{xs: 0,s: 0,m: 0,l: 0,xl: 0, xxl:0}}
            imageMaxWidth={{xs: 100,s: 100,m: 100,l: 100,xl: 150, xxl:250}}
            />, */}
            <Gallery
            images={projectImages}
            enableImageSelection={false}
            />
        </div>
    );
}
// const projectImages = {
//     snapteam: 
//     [
//       {src:'../../Assets/images/projectImages/snapteam/2.png'},
//       {src:require('../../Assets/images/projectImages/snapteam/2.png')},
//       {src:require('../../Assets/images/projectImages/snapteam/3.png')},
//       {src:require('../../Assets/images/projectImages/snapteam/4.png')},
//       {src:require('../../Assets/images/projectImages/snapteam/5.png')},
//       {src:require('../../Assets/images/projectImages/snapteam/6.png')},
//       {src:require('../../Assets/images/projectImages/snapteam/7.png')},
//       {src:require('../../Assets/images/projectImages/snapteam/8.png')}
//     ],
//     pulse: require.context(`../../Assets/images/projectImages/pulse`, false, /.*\.png$/),
//     measure: require.context(`../../Assets/images/projectImages/measure`, false, /.*\.png$/),
//     wakency: require.context(`../../Assets/images/projectImages/wakency`, false, /.*\.png$/),
//     benefactory: require.context(`../../Assets/images/projectImages/benefactory`, false, /.*\.png$/),
//     lighthouse: require.context(`../../Assets/images/projectImages/lighthouse`, false, /.*\.png$/),
//     nykaa: require.context(`../../Assets/images/projectImages/nykaa`, false, /.*\.png$/),
//     Tradycoon: require.context(`../../Assets/images/projectImages/Tradycoon`, false, /.*\.png$/)
//   };
//   const getProjectImages = id => {
//     if (!id) return [];
  
//     const images = projectImages[id];
//     return images;
//   }; 
export default ImageContainer;
