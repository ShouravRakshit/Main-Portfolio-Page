/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import "./about.css";
import Zoom from 'react-reveal/Zoom';

const About = ( {color} ) => {
  
  let textColor = color === "#212935" ? "#FFFFEC" : "#212935";
  return (
    <Zoom top>
      
    <div className="container" id="about" style={{backgroundColor: color, width: "70%"}}>
      <div className="about" >
        <div className="row" >
          <div className="col-xs-12 col-xl-6 col-lg-6 about-img">
            <img
              src="https://scontent.fyyc2-1.fna.fbcdn.net/v/t1.6435-9/46390650_317764075491068_1997208660777893888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7a1959&_nc_ohc=376RnGdNuvUAX8fd8cl&_nc_ht=scontent.fyyc2-1.fna&oh=00_AfBosEa8vLlGYSQfFu6tvtvofqNSWxn9HhcYPPrGLHNLDw&oe=65F14A30"
              alt="profile_pic"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-xs-12 about-content" style={{color: textColor}} >
            <h2  style={{color: textColor}}>About me</h2>
            <p>
              I'm currently studying Computer Science at the University of
              Calgary, where I've had the opportunity to develop a strong
              foundation in various aspects of technology. My academic journey
              has been driven by a keen interest in data analytics and
              visualization, which is where I believe the future of technology
              lies. I've become proficient in SQL for data handling and Power BI
              for creating insightful visualizations, skills that I've honed
              through both academic projects and personal initiatives. In
              addition to my academic pursuits, I've gained practical experience
              working with MERN (MongoDB, Express.js, React, Node.js)
              Stack. Whether it's through data analytics, providing
              meaningful insights for business decisions, or developing
              applications that can make people's lives easier, I am passionate
              about using my skills to make a tangible impact.
            </p>
          </div>
        </div>
      </div>
    </div>
    </Zoom>
  );
};

export default About;
