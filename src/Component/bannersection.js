
import React from  'react';
import { Link } from 'react-router-dom';


function BannerSection({banerdata, showButton }) {
  return (
    <div
      className="banner-section text-white d-flex align-items-center"
      style={{
       backgroundImage: `url(${banerdata.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // adjust as needed
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 slider-content">
            <h1> {banerdata.title} </h1>
            <p>
              {banerdata.text} 
            </p>
            {showButton && (
              <Link to={banerdata.url} className="btn btn-primary">
                {banerdata.button}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;