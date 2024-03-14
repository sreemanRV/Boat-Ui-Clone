import './App.css'
import { FcRating } from 'react-icons/fc'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { ProductlistData } from './productlistdata.jsx'
import { useDispatch } from 'react-redux';
import { addCart } from './cartSlice.jsx';
import { IoIosSearch } from 'react-icons/io';
import {useState} from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Productlist() {
const[searchTerm,setSearchTerm]=useState("");

        const dispatch = useDispatch();
        return (
                <div>
                        <div className="product-headings">
                        <h4>Today's Killer <span className="bold">Offe<span className="underline" >rs</span></span></h4>
                        <div className="viewall">
                        <p>View All</p>
                        <IoArrowForwardCircleOutline />
                        </div>
                        </div>
                        <div className="search" style={{marginBottom:"30px"}}>
                            <div className="search-icon" > <IoIosSearch /> </div>
                            <input type="text" placeholder="Search Headphones" onChange={(e) => 
                            setSearchTerm(e.target.value)} />
                            </div>
                        <div className="container-2">
                                {
                                ProductlistData.filter((product) => {
                                        if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return product;
                                        }
                                        }).map((items) => {
                                                const notify = ()=>{
                                                        toast(`${items.title} is added to the cart`)
                                                }
                                                const handleAddtoCart = (items)=>{
                                                        dispatch(addCart(items));
                                                }
                                        return (<div key={items.id} className="products">
                                        <div>
                                        <ToastContainer />
                                        <img className="product-list-img" src={items.src} alt="alt" />
                                        <div className="battery-info">{items.batteryinfo}</div>
                                        </div>
                                        <div className="product-info-styling" >
                                                <h5 >{items.title}</h5>
                                                <div className="display-info">
                                                <p className="price"> ₹{items.price} <span className="strikeout">₹{items.strikeout}</span> <span className="discount">{items.discount}%off</span></p>
                                                <div>
                                                <button className="addtocart-btn" onClick={()=>{notify();handleAddtoCart(items)}}>Add To Cart</button>

                                                </div>
                                                </div>
                                                <div className="rating">
                                                <FcRating />
                                                <p>{items.rating}</p>
                                                </div>
                                        </div>
                                        </div>)
                                        })
                                }
                                </div>
                        </div>
                        );
                }

export default Productlist;
