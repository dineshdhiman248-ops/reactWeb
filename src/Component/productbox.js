import React from "react";
import '../style.css';
import { Link } from "react-router-dom";

function Productbox ( { prdouctdata }) {
    return (
        <div>
        
        <div className="product-grid">
                {prdouctdata.map((pitem) => (
             <div className="product-box" key={pitem.id}>
          <div className="product-data">
        <p className="product-image">
          <img src={pitem.image} alt={pitem.title} />
        </p>
        <p className="product-category">{pitem.category}</p>
        <h2 className="product-title">{pitem.title}</h2>
        <p className="product-description">{pitem.description}</p>
        <p className="product-price">${pitem.price}</p>
        <Link to={`/product/${pitem.id}`} className="p-read">
  Read More
</Link>
      </div>
    </div>
     ))}
   </div>
    

        </div>
    )
}
export default Productbox;