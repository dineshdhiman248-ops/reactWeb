
import React, {useState, useEffect } from "react";
import Productbox from "../Component/productbox";
import axios from "axios";


function Products () {

const [products, setproducts] = useState([]);
const [loading, setloading] = useState(true);
const [show, setShow] = useState (6);


useEffect ( () => {
   axios 
   .get ("https://fakestoreapi.com/products")
   .then ((res) => {
    setproducts (res.data);
    setloading (false)
     })
   .catch ((err)=> {
    console.log (err);
    setloading(false);
  });
}, []); 

  if (loading) {
    return <h2>Loading products...</h2>;
  }

 

  return (

  <div className="main-box">
    <Productbox  prdouctdata={products.slice (0, show) }/>
    {show < products.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={() => setShow(show + 6)}>
            Load More
          </button>
        </div>
      )}
     
  </div>
  
 );
};

export default Products;






 