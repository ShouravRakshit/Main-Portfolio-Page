/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { techStackList } from "../../utils/TechStackList";
import "./techstack.css";
import Shake from 'react-reveal/Shake';

const TechStack = ({color}) => {
  let textColor = color === "#212935" ? "#FFFFEC" : "#212935";
  return (
    <>
    
      <div style={{width: "76%", backgroundColor: color}} className="container tech" id="tech-stack">
        <div className="container text-center mt-3 tech-stack">
        <Shake>
        <h1 style={{textTransform: "uppercase"}}>Technical Skills</h1>
          <p style={{ textTransform: "capitalize" }}>
            👉 including programming Languages, frameworks, databases, data
            analytics tools, frontend and backend
          </p>
          </Shake>
          <div className="row">
            {techStackList.map((tech) => {
              return (
                <div key={tech.id} className="col-xl-3 col-lg-4 col-md-5 col-sm-6 main-card">
                  <div className="card m-2">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex justify-content-center">
                          <div className="align-self-center mx-2">
                            <tech.icon className="tech-icon" size={25} />
                          </div>
                          <div className="media-body">
                            <h5>{tech.name}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
