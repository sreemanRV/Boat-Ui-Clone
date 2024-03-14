import React,{useState} from'react';
import './App.css';
import { FiChevronDown } from 'react-icons/fi';
import {IoIosSearch} from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import Slider from './imageslider'
import Cart from './cart.jsx'

function Navbar(){    
  const[showCart,setShowCart]=useState();
  function openCart(){
      setShowCart(!showCart);
  }

 return(
         <React.Fragment>
    <div className="nav">
            <div>
                <img className="logo"  src="logo.svg" alt="alt"/>
            </div>
          <ul>
          <li><a href="" >Categories</a></li>
          <li><a href="">Daily Deals</a></li>
          <li><a href="">Corporate Orders</a></li>
          <li><a href="">More </a> <FiChevronDown className="more-details" /> </li>
          </ul>
          <div className="search">
         
          <div className="search-icon" > <IoIosSearch /> </div>
          <input type="text" placeholder="Search Headphones"  />
          </div>
          <div className="rem-icons">
            <div >
            <BsPerson  />
            </div>
            <div>
            <HiOutlineShoppingBag onClick={openCart}  />
            </div> 
          </div>
          
          </div>

          <div className='hero-section'>
       <Slider />
       </div>
       {showCart && <Cart/>}
 
    </React.Fragment>
      
            );
}

export default Navbar;
