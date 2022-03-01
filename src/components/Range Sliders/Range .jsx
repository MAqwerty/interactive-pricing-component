import React from "react";
import './Range Style.css';
import { useState } from "react";

function Range() {

    const [views, setViews] = useState(1);
    
    setTimeout(FSUM,0)
    
    function FSUM(){
        let Tprises = document.getElementById('Tprises')
        let Checkbox = document.getElementById('checkbox')
        Checkbox.addEventListener('change',()=>{FSUM()})
        let SUM ;
            if(Checkbox.checked){
                SUM = (views * .75 * 12 * .75).toFixed(2);         
                Tprises.innerHTML = "$" + SUM
            }             
            else{
                SUM = (views * .75).toFixed(2);  
                Tprises.innerHTML = "$" + SUM
            }
        }

    setTimeout(Fviews,0)

    function Fviews(){
        if(views == 1000){
            document.getElementById('Tviews').innerHTML = 1 + "M"
         }
         else{
            document.getElementById('Tviews').innerHTML = views + "K"
         }
    }

    return(
        <>
            <div className="slidecontainer">
            <input type="range" min="1" max="1000" value={views} onChange={(e) => setViews(e.target.value)} className="slider" id="myRange"></input>
            </div>
        </>
    )
}

export default Range ;

