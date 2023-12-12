import React from 'react'
import './App.css'
import { FaYoutube  } from 'react-icons/fa'
import { RiTwitterXFill  } from 'react-icons/ri'
import { TiSocialFacebook   } from 'react-icons/ti'
import { SlSocialInstagram   } from 'react-icons/sl'
import { FaLinkedin   } from 'react-icons/fa'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

function Footer(){
    return(
            <footer>
            <div className="footer-row">
            <div className="footer-col-sub">
           <img className="footer-logo" src="logo.svg" alt="alt"/> 
           <h3 className="subscribe">Subscribe to our email alerts!</h3>
           <div className="subscribe-input">
           <input  type="text" className="subscribe-input" placeholder="Enter your email address"    />
           <IoArrowForwardCircleOutline className="subscribe-icon" />
           </div>
           </div>
           <div className="footer-col">
           <h5>Shop</h5>
           <p className="footer-text">Wireless Earbuds<br/><br/>
           Wireless Headphones<br/><br/>
           Wired Headphones<br/><br/>
           Wireless Speakers<br/><br/>
           Smart Watches
          </p>
           </div>
           <div className="footer-col">
           <h5>Help</h5>
           <p className="footer-text">Track Your Order<br/><br/>
           Warranty & Support <br/><br/>
           Return Policy<br/><br/>
           Service Centers<br/><br/>
           Bulk Orders<br/><br/>
           FAQs<br/><br/>
           Why Buy Direct
          </p>
           </div>
           <div className="footer-col">
           <h5>Company</h5>
           <p className="footer-text">About boAt<br/><br/>
           News<br/><br/>
           Read Our Blog<br/><br/>
           Careers<br/><br/>
           Security<br/><br/>
           Investor Relations<br/><br/>
           Social Responsibilities<br/><br/>
           Warrant Policy
          </p> 
          </div>
     </div>
     <div className='footer-details'>
            <div className='connect'>
            <p>Let's get social</p>
            <div>
            <TiSocialFacebook className='footer-icons fb' />
            <RiTwitterXFill className='footer-icons'  />
            <SlSocialInstagram className='footer-icons' />
            <FaYoutube className='footer-icons' />
            <FaLinkedin className='footer-icons' />
            </div>
            </div>
            <ul className='footer-policy'>
            <li><a href="">
            Privacy Policy
            </a></li>
            <li><a href="">
            Terms & Conditions
            </a></li>
            </ul>
            <hr/>
            <p className='copyrights'>© Imagine Marketing Limited. All Rights Reserved.</p>
     </div>
     </footer>
            );
}

export default Footer;