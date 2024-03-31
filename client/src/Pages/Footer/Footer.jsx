/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Pulse from 'react-reveal/Pulse';

const Footer = ({ color }) => {
  let textColor = color === "#212935" ? "#FFFFEC" : "#212935";
  return (
    <>
    <Pulse> 
      <div
        style={{ marginTop: "16px", width: "65%", backgroundColor: color, color: textColor }}
        className="container footer"
      >
        <div className="footer-content">
          <section className="footer-section">
            <h4>Contact</h4>
            <p>Email: shouravrakshit.ivan@ucalgary.ca</p>
          </section>
          <section className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-media-icons">
              <a
                href="https://www.facebook.com/skycold.bangladesh/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="facebook" title="Facebook">
                  <FaFacebook size={35} />
                </i>
              </a>
              <a
                href="https://www.instagram.com/shouravivan/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="instagram" title="Instagram">
                  <FaInstagramSquare size={35} />
                </i>
              </a>
            </div>
          </section>
        </div>
        <div className="footer-bottom">
          <p>
            {" "}
            <h2 className="mt-2">
              Shourav Rakshit Ivan &copy; {new Date().getFullYear()}
            </h2>{" "}
          </p>
        </div>
      </div>
      </Pulse>
    </>
  );
};

export default Footer;
