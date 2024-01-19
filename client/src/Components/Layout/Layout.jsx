/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Home from "../../Pages/Home/Home";
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";

import "./layout.css";
import { useState } from "react";
import Menu from "../Menu/Menu";

const Layout = ({ color }) => {
  const [toggle, setToggle] = useState(true);
  let textColor = color === "#212935" ? "#FFFFEC" : "#212935";

  // change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section" style={{backgroundColor: color, width: "100%"}} >
        <div className={toggle ? "sidebar" : "sidebar sidebar-toggle"} style={{backgroundColor: color}}>
          <div className="sidebar-toggle-icons" style={{backgroundColor: color}}>
            {/* The toggle thing on the top left feature. */}
            <p onClick={handleToggle}>
              {toggle ? (
                <PiToggleRightFill size={35} />
              ) : (
                <PiToggleLeftFill size={35} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} color={color} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
