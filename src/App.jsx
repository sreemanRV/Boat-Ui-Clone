import React, { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Product from './Product.jsx'
import Productlist from './Productlist'
import Policies from './Policies.jsx'
import Blog from './Blog.jsx'
import Footer from './footer.jsx'
import Dropdown from './test.jsx'

import Categories from './daily deals.jsx'

function App() {
    
    const [count, setCount] = useState(0);
    const [isActive,setIsActive] = useState(false);
       function Change(){
        setCount(count + 1);
    }
    function DropdownMenu(){
        setIsActive(!isActive);
    }

  return (
          <React.Fragment>
       <Navbar dropdown = {DropdownMenu} cartCount = {count} />
       {isActive && <Dropdown />}

       <section className="hero-section" >
         <div>
         <h1 className='heading'>BOAT is Truly Yours!</h1>
         <p>We don't want you to just listen to music,We want you to Experience the Unparalleled Sound Quality</p>
         <button className='cta-btn' >Explore Now</button>
         </div>
            <div>
            <img className="hero-img" src="boatsuperbazzrockers.png" alt="410Headphone"/>
            </div>
       </section>
       <Product  />
       <Productlist addCart={Change}  />
       <Policies /> 
       <Blog />
       <Footer />
       </React.Fragment>
  );
  
};

export default App;
