/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from '../../assets/docs/ShouravRakshitIvan.pdf';
import Transcript from '../../assets/docs/Transcript.pdf';

import { useTheme } from "../../Context/ThemeContext";
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';


const Home = () => {

  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === '#212935' ? "#F1E4C3" : "#212935"))
  }
  
  return (
    <>
      <div className="container-fluid home-container" id="home" style={{backgroundColor: theme}}>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === '#212935' ? (<IoSunnyOutline size={30}/>):(<FaMoon size={30}/>)}
        </div>
        
     
        <div className="container home-content" >
        <LightSpeed right>
          <h1>Hi I'm a </h1>
          <h2>
          <Typewriter
            options={{
              strings: ["MERN Stack Developer", "Data Analyst"],
              autoStart: true,
              loop: true,
            }}
          />
          </h2>
          </LightSpeed>
          <Fade bottom> 
          <div className="home-buttons">
            <button className="btn btn-primary btn-hire">Hire Me</button>
            <a className="btn btn-success btn-cv" href={Resume} download="your_name.pdf">My Resume</a>
            <a className="btn btn-danger btn-transcript" href={Transcript} download="your_name.pdf">Transcript</a>
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;