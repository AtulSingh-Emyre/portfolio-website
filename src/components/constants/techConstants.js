import reactIcon from 'Icons/technology/react-tech-icon.png';
import reactNativeIcon from 'Icons/technology/react-native-tech-icon.png';
import androidIcon from 'Icons/technology/android-tech-icon.png';
import laravelIcon from 'Icons/technology/laravel-tech-icon.png';
import electronIcon from 'Icons/technology/electron-tech-icon.png';

import reactBackgroundImage from 'Images/technology/react-background-image.png';
import reactNativeBackgroundImage from 'Images/technology/react-native-background-image.png';
import androidBackgroundImage from 'Images/technology/android-background-image.png';
import laravelBackgroundImage from 'Images/technology/laravel-background-image.png';
import electronBackgroundImage from 'Images/technology/electron-background-image.png';

export const techList = [
  {
    id: 'react',
    name: 'React',
    firstLogo: reactIcon,
    backgroundImage: reactBackgroundImage,
    description: `I am familiar and have worked on several recent techniques used in react as a part of MERN Stack like code-splitting, Hooks, React-Router, Redux, Redux-api-middleware,front-end architectures, css in js, Typesript, etc.<br/>`,
    projects: ['snapteam', 'nykaa', 'wakency'],
  },
  // {
  //   id: 'android',
  //   name: 'Android',
  //   firstLogo: androidIcon,
  //   backgroundImage: androidBackgroundImage, //but recently have not touched on Android development so have to freshen up a bit on it.
  //   description: `I started my development journey with Android and have the most experience in it along with React.<br/><br/>
  //   I have complete lifecycle experience on Android app developement from creating to publishing and managing, and have experience with needed android libraries which includes: Retrofit, Dagger, Picasso, ActiveAndroid, etc.`,
  //   projects: ['vc_music_player', 'measure']
  // },
  {
    id: 'react-native',
    name: 'React-Native',
    firstLogo: reactNativeIcon,
    backgroundImage: reactNativeBackgroundImage,
    description: `I have created and published a React-Native app for iOS and Android so i am familiar with its lifecycle, while working with React-Native CLI.
    `,
    projects: ['lighthouse', 'pulse']
  },
  {
    id: 'Competitive Coding',
    name: 'CP',
    firstLogo: laravelIcon,
    backgroundImage: laravelBackgroundImage,
    description: `(Competitive Programming)<br/>I have been extensively working on my competitive coding skills in order to make my algorithms more efficient and scalable.`,
    projects: ['benefactory', 'snapteam']
  },
  {
    id: 'node',
    name: 'Node JS',
    firstLogo: electronIcon,
    backgroundImage: electronBackgroundImage,
    description: `I have experience in working with Node JS and Express JS for developing backend of several projects.`,
    projects: ['snapteam']
  }
];
