import React from  'react';
import Bannersection from '../Component/bannersection';

const bannercontact= {
  title: "Contact us",
  text: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.`,
  image: "http://localhost:3000/images/aboutimg.jpg",
  button: "Web Development",
  url: "/contact"
};

function Contact () {
    return(

        <div className="contact-section">
        <Bannersection  banerdata={bannercontact} showButton={false} />

        <div> <h1>welcome to About page </h1> 
        <p>This this the About page </p> </div>
        </div>
    )
};

export default Contact;