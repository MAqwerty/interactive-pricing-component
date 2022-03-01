import React, { useState, useEffect } from "react";
import "./dark.css";
import { ReactComponent as MoonIcon } from "../../assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/svg/sun.svg";

const updateTheme = (isDarkEnabled) => {
  // Get CSS variables for background/foreground
  const styles = getComputedStyle(document.body);
  const black = styles.getPropertyValue("--black");
  const white = styles.getPropertyValue("--white");
  const docEl = document.documentElement;
    let pstyle =document.getElementsByTagName('p')
    let container = document.getElementById("container")
    let body =document.getElementById('body')
    let discount =document.getElementById('discount')
    let span =document.getElementsByTagName('span')
    let pheader =document.getElementById('pheader')
    let discountT = document.getElementById('discountT')

  if (isDarkEnabled) {
    docEl.style.setProperty("--background", black);
    docEl.style.setProperty("--foreground", white);
       for(let i=0 ; i < pstyle.length ; i++){
        pstyle[i].style.color= "#fff";
    }
        body.style.backgroundColor="black";
        container.style.backgroundColor="black";
        discount.style.backgroundColor = 'rgba(0, 255, 229, 0.2)';
    for(let i=0 ; i < span.length ; i++){
        span[i].style.color= "rgb(0, 206, 206)"
    }
        pheader.style.color= 'rgb(24, 24, 24)';
        discount.style.color = '#00f7ff';
        discountT.style.color = '#00f7ff';
  } 
  else {
    docEl.style.setProperty("--background", white);
    docEl.style.setProperty("--foreground", black);
    for(let i=0 ; i < pstyle.length ; i++){
        pstyle[i].style.color= "black";
    }
        body.style.backgroundColor="#fff";
        container.style.backgroundColor="#fff";
        discount.style.backgroundColor = 'rgba(255, 209, 149, 0.5)';
    for(let i=0 ; i < span.length ; i++){
        span[i].style.color= "black"
    }
        pheader.style.color= 'black';
        discount.style.color = '#ff8400';
        discountT.style.color = '#ff8400';
  }
};

function ThemeToggle() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    updateTheme(isEnabled);
  }, [isEnabled]);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isEnabled}
          onClick={toggleState}
        />
      </div>
    </label>
  );
}
export default ThemeToggle ;