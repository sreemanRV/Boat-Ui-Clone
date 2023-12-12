import React, { useState } from'react';
import './App.css';
import { FiChevronDown } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import App from './App.jsx'
import Categories from './daily deals.jsx'

function Navbar(props){    
    
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
          <li><a href="">More </a> <FiChevronDown className="more-details"  onClick={props.dropdown} /> </li>
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
            {props.cartCount}
            <HiOutlineShoppingBag  />
            </div>
          </div>
          </div>
 
    </React.Fragment>
      
            );
};

export default Navbar;
