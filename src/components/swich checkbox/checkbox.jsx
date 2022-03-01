import React from "react";
import './checkboxStyle.css';

function Checkbox() {
    return(
        <>
            <label className="switch">
                <input id="checkbox" type="checkbox"></input>
                <span className="sliderCHECK round" id="sliderCHECK"></span>
            </label>
        </>
    )
}

export default Checkbox ;