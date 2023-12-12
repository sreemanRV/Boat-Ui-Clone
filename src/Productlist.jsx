import './App.css'
import {FcRating} from 'react-icons/fc'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import App from './App.jsx'
import {ProductlistData} from './productlistdata.jsx'

function Productlist(props){
    let productlist = ProductlistData.map(product=>
    <div className="products">
            <div>
                <img className="product-list-img" src={product.src} alt="alt"/>
                <div className="battery-info">{product.batteryinfo}</div>
            </div>
            <div className="product-info-styling" >
            <h5 >{product.title}</h5>
            <div className="display-info">
            <p className="price"> ₹{product.price} <span className="strikeout">₹{product.strikeout}</span> <span className="discount">{product.discount}%off</span></p>
            <div>
            <button className="addtocart-btn" onClick={props.addCart}>Add To Cart</button>
            </div>
            </div>
            <div className="rating">
            <FcRating/>
            <p>{product.rating}</p>
            </div>
            </div>
            </div>
            );
    return(
            <div>
            <div className="product-headings">
            <h4>Today's Killer <span className="bold">Offe<span className="underline" >rs</span></span></h4>
            <div className="viewall">
            <p>View All</p>
            <IoArrowForwardCircleOutline />
            </div>
            </div>
            
            <div className="container-2">{productlist}</div>
    
            
    </div>
            );
};

export default Productlist;
