import React from 'react';
import Bannersection from '../Component/bannersection';
import Imagesection from '../Component/imagesection';
import Serviceboxs from '../Component/serviceboxs';


const bannerContent = {
  title: "Welcome to My website",
  text: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.`,
  image: "http://localhost:3000/images/carousel-1.jpg",
  button: "Web Development",
  url: "/contact"
};

const sectionContent = {
  title: "Wordpress Developer",
  text: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
for use in a type specimen book. It usually begins with Lorem ipsum, or lipsum as it is
sometimes known, is dummy text used in laying out print, graphic or web designs.`,
  image: "http://localhost:3000/images/carousel-1.jpg",
  altText: "Web Development"
};

const services = [
    { title: "Web Development", description: "We build awesome websites", icon: "fa-laptop" },
    { title: "App Development", description: "Mobile apps for all platforms", icon: "fa-mobile" },
    { title: "UI/UX Design", description: "Designs that users love", icon: "fa-pencil-ruler" },
    { title: "SEO Services", description: "Improve your search ranking", icon: "fa-search" },
    { title: "Digital Marketing", description: "Grow your online presence", icon: "fa-bullhorn" },
    { title: "E-commerce Solutions", description: "Online stores that sell", icon: "fa-shopping-cart" },
  ];


function Home() {
  return (
    <div>
       <Bannersection  banerdata={bannerContent} showButton={true}/>
       <Imagesection   sectiondata={sectionContent}/>
        <Serviceboxs  servicedata={services} />
       
    </div>
  );
}

export default Home;
