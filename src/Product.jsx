import React from 'react'
import './App.css'
import { Productdata } from './productdata.jsx'


function Product() {

    return (
        <div>
            <div className="product-head">
                <h4>Explore <span className="bold">Bestselle<span className="underline" >rs</span></span></h4>
            </div>
            <div className="container">
                {Productdata.map(product =>
                    <div key={product.id} className="product-list">
                        <div className="product-img-wrapper">
                            <img className="product-img" src={product.src} />
                        </div>
                        <p className="product-heading">{product.title}</p>
                    </div>
                )
                }           
                </div>
        </div>

    );
}

export default Product;