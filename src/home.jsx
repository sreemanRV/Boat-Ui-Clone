import React from 'react'
import Navbar from './Navbar.jsx'
import Product from './Product.jsx'
import Productlist from './Productlist'
import Policies from './Policies.jsx'
import Blog from './Blog.jsx'
import Footer from './footer.jsx'


const Home = () => {

  return (
    <div>
       <Navbar/>

       <Product  />
       <Productlist/>
       <Policies /> 
       <Blog />
       <Footer />
    </div>
  )
}

export default Home;
