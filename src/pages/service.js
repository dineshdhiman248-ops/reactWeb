import React from  'react';
import Bannersection from '../Component/bannersection';
import Serviceboxs from '../Component/serviceboxs';

const bannerservice= {
  title: "Our Services",
  text: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.`,
  image: "http://localhost:3000/images/aboutimg.jpg",
  button: "Web Development",
  url: "/contact"
};

const services = [
    { title: "Services 1", description: "We build awesome websites", icon: "fa-laptop" },
    { title: "Services2", description: "Mobile apps for all platforms", icon: "fa-mobile" },
    { title: "Services 3", description: "Designs that users love", icon: "fa-pencil-ruler" },
    { title: "Services 4", description: "Improve your search ranking", icon: "fa-search" },
    { title: "Services 5", description: "Grow your online presence", icon: "fa-bullhorn" },
    { title: "Services 6", description: "Online stores that sell", icon: "fa-shopping-cart" },
    { title: "Services 7", description: "Online stores that sell", icon: "fa-shopping-cart" },
    { title: "Services 8", description: "Online stores that sell", icon: "fa-shopping-cart" },
  ];


function Service () {

  return (
    <div className="service-section">
      <Bannersection banerdata={bannerservice} showButton={false} />
      <Serviceboxs servicedata={services} />
    </div>
  );
};

export default Service;
