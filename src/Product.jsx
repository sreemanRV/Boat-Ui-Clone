import React from 'react'
import './App.css'
import {Productdata} from './productdata.jsx'

function Product(){
    let list = Productdata.map(product=>

             <div className="product-list">
             <div className="product-img-wrapper">
            <img className="product-img" src={product.src} />
            </div>
            <p className="product-heading">{product.title}</p>
            </div>
   );
    return(
            <div>
            <div className="product-headings">
            <h4>Explore <span className="bold">Bestselle<span className="underline" >rs</span></span></h4>
            </div>
        <div className="container">{list}</div>
        </div>
      
   );
};

export default Product;