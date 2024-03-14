import React from 'react'
import './App.css'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'

function Blog(){
    return(
            <div>
            <div className="product-headings">
            <h4> <span className="bold">Blo<span className="underline" >gs</span></span></h4>
            <div className="viewall">
            <p>View All</p>
            <IoArrowForwardCircleOutline />
            </div>
            </div>
            <div  className ="blog-container">
            <div className="blog">
            <img className="blog-img" src="custom.webp"/>
            <div className="blog-details">
            <p>23 Sep, 2023</p>
            <p className="blog-heading">The Power of Personalisation: Custom<br/> Watch Faces in Wearables</p>
            <p>Check out how with our DIY Watch Face Studio and <br/>customisable watch faces are revolusionising<span>...</span></p>
            <button className="blog-btn">Read More</button>
            </div>
            </div>
            <div className="blog">
            <img className="blog-img" src="aman.png"/>
            <div className="blog-details">
            <p>01 Nov, 2022</p>
            <p className="blog-heading">Aman Gupta boAt (Shark Tank India 2) Age,<br/> Net worth, Email ID, Education</p>
            <p>We know you keep searching for things on the internet<br/> — after all, what better source is there in<span>...</span></p>
            <button className="blog-btn">Read More</button>
            </div>
            </div>
            <div className="blog">
            <img className="blog-img" src="watch.jpg"/>
            <div className="blog-details">
            <p>23 Sep, 2022</p>
            <p className="blog-heading">One watch, different looks: Match your<br/> watch face with your outfit</p>
            <p>The iconic Coco Chanel said it best – “Every day is a<br/> fashion show, and the world is your runway”<span>...</span></p>
            <button className="blog-btn">Read More</button>
            </div>
            </div>
            <div className="blog">
            <img className="blog-img" src="noisecancellation.jpg"/>
            <div className="blog-details">
            <p>23 Mar, 2023</p>
            <p className="blog-heading">What is Active Noise Cancellation and Why<br/> is it Important?</p>
            <p>Admit it, boAt fam: There’s no greater vibe killer than outside<br/> noise leaking into your blissful,<span>...</span></p>
            <button className="blog-btn">Read More</button>
            </div>
            </div>
            <div className="blog">
            <img className="blog-img" src="noisecancellation.jpg"/>
            <div className="blog-details">
            <p>23 Mar, 2023</p>
            <p className="blog-heading">What is Active Noise Cancellation and Why<br/> is it Important?</p>
            <p>Admit it, boAt fam: There’s no greater vibe killer than outside<br/> noise leaking into your blissful,<span>...</span></p>
            <button className="blog-btn">Read More</button>
            </div>
            </div>
            </div>
      </div>
            );
}

export default Blog;