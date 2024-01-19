/* eslint-disable no-unused-vars */
import "./projects.css";
import Summarify from "../../assets/images/Summarify.png";
import Tokyo from "../../assets/images/Tokyo Olympic 2021 Analysis.png";
import Atliq from "../../assets/images/Atliq Sales Analysis.png";
import Jump from 'react-reveal/Jump';

const Projects = () => {
  
  return (
    <>
    <Jump> 
      <div style={{ width: "75%" }} className="container" id="projects">
        <div className="container text-center mt-3 project">
          <h1 style={{ textTransform: "uppercase",  }}>My Projects</h1>
        </div>
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-6">
            <div className="card rounded">
              <div className="card-image">
                <a
                  href="https://github.com/the-sin14/seng-513-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Summarify} alt="Summarify" />
                </a>
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Typescript</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge mb-2">MongoDB</span>
                <span className="card-detail-badge">Docker</span>
                <span className="card-detail-badge">Material-UI</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Summarify</h5>
                </div>
                <a
                  className="ad-btn"
                  target="_black"
                  href="https://github.com/the-sin14/seng-513-project?tab=readme-ov-file"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card rounded">
              <div className="card-image">
                <a
                  href="https://github.com/ShouravRakshit/Tokyo-Olympic-2021"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Tokyo} alt="Tokyo Olympic" />
                </a>
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Microsoft Azure</span>
                <span className="card-detail-badge">SQL</span>
                <span className="card-detail-badge mb-2">Apache Spark</span>
                <span className="card-detail-badge">Power BI</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Tokyo Olympic 2021 Data Analysis
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  target="_black"
                  href="https://github.com/ShouravRakshit/Tokyo-Olympic-2021"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card rounded">
              <div className="card-image">
                <a
                  href="https://github.com/ShouravRakshit/Atliq-Company-Sales-Analysis"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Atliq} alt="Atliq Sales" />
                </a>
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">MySQL</span>
                <span className="card-detail-badge">Kaggle</span>
                <span className="card-detail-badge mb-5">Power BI</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Atliq Company Sales Analysis
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  target="_black"
                  href="https://github.com/ShouravRakshit/Atliq-Company-Sales-Analysis"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Jump>
    </>
  );
};

export default Projects;
