import React from "react";
import './style.css'
import Checkbox from "./swich checkbox/checkbox";
import Range from "./Range Sliders/Range ";
import Cheack from "../assets/images/icon-check.svg"
import ThemeToggle from "./Dark mode/BTN"

 const Price = () => {
   
    return(
        <>        
            <div className="container" id="container">     
               <ThemeToggle />
                <p className="Pageviews"><span className="views" id="Tviews" >00K</span>Pageviews</p> 
                <p className="priceNUM"><span className="prises" id="Tprises">$00</span>/ month</p> 
                <Range />
                <div className="dateCHECK">
                    <p className="Billing">Monthly Billing
                        <Checkbox />
                        Yearly Billing
                    </p>
                    <p className="discount" id="discount">25%<span className="SpanDis" id="discountT">discount</span></p>
                </div>
                <div className="line"></div>
                <ul>                    
                    <li><img className="cheack" src={Cheack}/><p>Unlimited websites</p></li>
                    <li><img className="cheack" src={Cheack}/><p>100% data ownership</p></li>
                    <li><img className="cheack" src={Cheack}/><p>Email reports</p></li>     
                </ul>
                <a href="" className="start">Start my trial</a> 
            </div>   
        </>
    )   
}

export default Price ;