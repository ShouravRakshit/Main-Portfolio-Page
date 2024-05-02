/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./menu.css";
import PropTypes from "prop-types";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-scroll";
import Tada from 'react-reveal/Tada';
import Slide from 'react-reveal/Slide';
import Image from '../../assets/images/Ivan.png'


// Need to shorten the code base because same code written twice.
// eslint-disable-next-line no-unused-vars
const Menu = ({ toggle, color }) => {
  let textColor = color === "#212935" ? "#FFFFEC" : "#212935";
  return (
    <>
      {toggle ? (
        <>
          <Tada>
            <div
              className="navbar-profile-pic"
              style={{ backgroundColor: color, width: "100%" }}
            >
              <img src={Image} />
            </div>
          </Tada>
          <Slide left> 
          <div className="nav-items" style={{ backgroundColor: color }}>
            
            <div className="nav-item" style={{ color: textColor }}>
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={70}
                >
                  <IoHomeOutline size={25} title="Home" />
                  <span className="text">Home</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={70}
                >
                  <FaRegUser size={25} title="About" />
                  <span className="text">About</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={70}
                >
                  <IoSchool size={25} title="Education" />
                  <span className="text">Education</span>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="tech-stack"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={70}
                >
                  <IoLogoReact size={25} title="Tech Stack" />
                  <span className="text">Tech Stack</span>
                </Link>
              </div>
              <div className="nav-link ">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={70}
                >
                  <AiFillProject size={25} title="Projects" />
                  <span className="text">Projects</span>
                </Link>
              </div>
              <div className="nav-link ">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={70}
                >
                  <IoIosContact size={25} title="Contact" />
                  <span className="text">Contact</span>
                </Link>
              </div>
            </div>
           
          </div>
          </Slide>
        </>
      ) : (
        <>
        <Slide left>
          <div className="nav-items" style={{ backgroundColor: color }}>
            
            <div className="nav-item" style={{ color: textColor }}>
              <div className="nav-link">
                <IoHomeOutline size={25} title="Home" />
                <span className="text">Home</span>
              </div>
              <div className="nav-link">
                <FaRegUser size={25} title="About" />
                <span className="text">About</span>
              </div>
              <div className="nav-link">
                <IoSchool size={25} title="Education" />
                <span className="text">Education</span>
              </div>
              <div className="nav-link">
                <IoLogoReact size={25} title="Tech Stack" />
                <span className="text">Tech Stack</span>
              </div>
              <div className="nav-link ">
                <AiFillProject size={25} title="Projects" />
                <span className="text">Projects</span>
              </div>
              <div className="nav-link ">
                <IoIosContact size={25} title="Contact" />
                <span className="text">Contact</span>
              </div>
            </div>
            
          </div>
          </Slide>
        </>
      )}
    </>
  );
};

Menu.propTypes = {
  toggle: PropTypes.bool,
};

export default Menu;
