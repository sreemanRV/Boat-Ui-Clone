import React from 'react'
import './App.css'

function Policies(){
    return(
            <div className="policy-container">
            <div className="policy-list">
            <img src="warranty.svg"/>
            <p className="policy-heading"><span className="bold">1 Year</span> Warranty</p>
            </div>
            <div className="policy-list">
            <img src="replacement.svg"/>
            <p className="policy-heading"><span className="bold">7-Day</span> Replacement</p>
            </div>
            <div className="policy-list">
            <img src="freeshipping.svg"/>
            <p className="policy-heading"><span className="bold">Free</span> Shipping</p>
            </div>
            <div className="policy-list">
            <img src="billing.svg"/>
            <p className="policy-heading"><span className="bold">GST</span> Billing</p>
            </div>         
      </div>
            );
};

export default Policies;