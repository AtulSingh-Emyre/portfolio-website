import snapTeam1 from '../../Assets/images/projectImages/snapteam/1.png';
import snapTeam2 from '../../Assets/images/projectImages/snapteam/2.png';
import snapTeam3 from '../../Assets/images/projectImages/snapteam/3.png';
import snapTeam4 from '../../Assets/images/projectImages/snapteam/4.png';
import snapTeam5 from '../../Assets/images/projectImages/snapteam/5.png';
import snapTeam6 from '../../Assets/images/projectImages/snapteam/6.png';
import snapTeam7 from '../../Assets/images/projectImages/snapteam/7.png';
import snapTeam8 from '../../Assets/images/projectImages/snapteam/8.png';


const projectImages = {
  snapteam: 
  [
    {
      src:snapTeam1, 
      thumbnail: snapTeam1,
      thumbnailWidth: 220,
      thumbnailHeight:100
    },
    {
      src:snapTeam2,
      thumbnail: snapTeam2,
      thumbnailWidth: 120,
      thumbnailHeight: 150
    },
    {
      src:snapTeam3,
      thumbnail: snapTeam3,
      thumbnailWidth: 220,
      thumbnailHeight: 200
    },
    {
      src:snapTeam4,
      thumbnail: snapTeam4,
      thumbnailWidth: 120,
      thumbnailHeight: 150
    },
    {
      src:snapTeam5,
      thumbnail: snapTeam5,
      thumbnailWidth: 120,
      thumbnailHeight: 150
    },
    {
      src:snapTeam6,
      thumbnail: snapTeam6,
      thumbnailWidth: 120,
      thumbnailHeight: 150
    },
    {
      src:snapTeam7,
      thumbnail: snapTeam7,
      thumbnailWidth: 120,
      thumbnailHeight: 150
    },
    {
      src:snapTeam8,
      thumbnail: snapTeam8,
      thumbnailWidth: 120,
      thumbnailHeight: 150
    },
  ],
  pulse: require.context(`../../Assets/images/projectImages/pulse`, false, /.*\.png$/),
  measure: require.context(`../../Assets/images/projectImages/measure`, false, /.*\.png$/),
  wakency: require.context(`../../Assets/images/projectImages/wakency`, false, /.*\.png$/),
  benefactory: require.context(`../../Assets/images/projectImages/benefactory`, false, /.*\.png$/),
  lighthouse: require.context(`../../Assets/images/projectImages/lighthouse`, false, /.*\.png$/),
  nykaa: require.context(`../../Assets/images/projectImages/nykaa`, false, /.*\.png$/),
  Tradycoon: require.context(`../../Assets/images/projectImages/Tradycoon`, false, /.*\.png$/)
};

export const getProjectImages = id => {
  if (!id) return [];

  const images = projectImages[id];
  return images;
};

// used to explicitly specify a image ratio to be show in grid
export const imageSpecificRatio = {
  wakency: [{ id: "1", ratioWidth: 3, ratioHeight: 1 }],
  benefactory: [{ id: '1', ratioWidth: 2, ratioHeight: 1 }],
  nykaa: [
     {id: '1', ratioWidth: 3, ratioHeight: 1},
     {id: '5', ratioWidth: 3, ratioHeight: 1},
  ]
};
