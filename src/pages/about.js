import React from  'react';

import Bannersection from '../Component/bannersection';
import Imagesection from '../Component/imagesection';

const bannerabout = {
  title: "About us",
  text: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.`,
  image: "http://localhost:3000/images/aboutimg.jpg",
  button: "Web Development",
  url: "/contact"
};

const sectionContent = {
  title: "About  me",
  text: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
for use in a type specimen book. It usually begins with Lorem ipsum, or lipsum as it is
sometimes known, is dummy text used in laying out print, graphic or web designs.`,
  image: "http://localhost:3000/images/carousel-1.jpg",
  altText: "Web Development"
};



function About () {
    return(

        <div className="About-section">
        <Bannersection  banerdata={bannerabout} showButton={false} />
        <Imagesection sectiondata={sectionContent} />
        </div>  
         
    )
};

export default About;