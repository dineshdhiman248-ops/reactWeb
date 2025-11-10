

import React from 'react';
import '../style.css';

function ImageSection({ sectiondata }) {
  return (
    <div className="container image-section">
      <div className="row py-5 justify-content-center align-items-center">
        <div className="col-md-6 text-start">
          <h2>{sectiondata.title}</h2>
          <p>{sectiondata.text}</p>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={sectiondata.image}
            alt={sectiondata.title}
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSection;