import nykaaLogoFirst from 'Images/nykaa-logo-first.png';
import nykaaLogoRest from 'Images/nykaa-logo-rest.png';

import tailoredTechLogoFirst from 'Images/tailoredtech-logo-first.png';
import tailoredTechLogoRest from 'Images/tailoredtech-logo-rest.png';

import mitLogoFirst from 'Images/mit-logo-first.png';
import mitLogoRest from 'Images/mit-logo-rest.png';

import nykaaBackgroundImage from 'Images/background/background-image-nykaa.jpg';
import tailoredTechBackgroundImage from 'Images/background/background-image-tailoredtech.jpg';
import collegeBackgroundImage from 'Images/background/background-image-college.jpg';

export const timelineListValue = [
  {
    id: 'nykaa',
    companyName: 'Nykaa',
    link: 'https://www.nykaa.com/',
    position: 'Frontend Developer',
    duration: 'Feb 2019 - Sep 2019 (8 months)',
    location: 'Gurugram',
    roleDetail: 'In Nykaa I got to work as a React frontend developer, worked on production bugs and features like Mobile Signup flow implementation, Nykaa Pro, Recent search and search history and their AR makeup implementation with Modiface.',
    companyDetail: 'Nykaa is an e-commerce website offering beauty and wellness products from more than 500 leading brands. Nykaa follows an inventory-based model with warehouses in Mumbai, New Delhi, and Chennai as its offline presence is in 60 stores and expanding. It claims to have over 1000+ curated brands and 85,000 products.',
    firstLogo: nykaaLogoFirst,
    restLogo: nykaaLogoRest,
    restMargin: 26, // the secound image margin because logo length is different
    backgroundImage: nykaaBackgroundImage,
    projects: ['nykaa']
  },
  {
    id: 'mit',
    companyName: 'College',
    position: `IIT Dharwad | Management | Web and App`,
    duration: '2021 - 2022 (1 years)',
    location: 'Dharwad',
    roleDetail: 'In IIT Dharwad, I was able to take up several roles in Management and Full Stack Software Development.',
    companyDetail: `I was the Jr. General Secretary Technical Affairs in my first year. Following that I was the Student Mentor and Mentored my juniors in my second year. In my third year, I was elected as the General Secretary, Technical Affairs.
      In Development, I was the team lead of building the Gymkhana website that would be officially used by our college using MERN Stack (Mongo DB, Express JS, React JS, Node JS). I was selected as the senior team lead for the development of websites for several events. 
      I was selected to be the Over-all Coordinator for PARSEC (The Technical Fest of our Institute) in 2021 and the Contingent Leader for the Inter IIT Tech Team for 2 consequetive years (2020-2022).`,
    firstLogo: mitLogoFirst,
    restLogo: mitLogoRest,
    restMargin: 37,
    backgroundImage: collegeBackgroundImage,
    projects: ['Tradycoon']
  }
];

