/* eslint-disable no-unused-vars */
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Footer from "./Pages/Footer/Footer";
// import Projects from "./Pages/Projects/Projects";
import TechStack from "./Pages/TechStack/TechStack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import "./Pages/Projects/projects.css";

import "./app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Summarify from "../src/assets/images/Summarify.png";
import Tokyo from "../src/assets/images/Tokyo Olympic 2021 Analysis.png";
import Atliq from "../src/assets/images/Atliq Sales Analysis.png";
import Jump from 'react-reveal/Jump';

function App() {
  const [theme] = useTheme();
  const toastColor = theme === "#212935" ? "light" : "dark";

  return (
    <>
      <div style={{ backgroundColor: theme }}>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={toastColor}
        />
        <Layout color={theme} />
        <About color={theme} />
        <Education color={theme} />
        <TechStack color={theme} />
        <div style={{  textAlign: "center" }}>
        <Jump > 
      <div style={{ width: "75%" }} className="container" id="projects">
        <div className="container text-center mt-3 project">
          <h1 style={{ textTransform: "uppercase",  }}>My Projects</h1>
          <h2>Stupid</h2>
          <Jump>
        
        <div style={{ width: "75%" }} className="container" id="projects">
          
          
          <div className="col-md-12">
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
          <div className="col-md-12">
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
          <div className="col-md-12">
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
        </Jump>
        </div>
        <div className="row" id="ads">
        
        </div>
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
          
        </div>
      </div>
      </Jump>
        </div>

        {/* <Projects color={theme} /> */}
        <Contact color={theme} />
        <Footer color={theme} />
      </div>
      <ScrollToTop
        className="scroll-top"
        color="#f29f67"
        smooth
        style={{ backgroundColor: "#1f1f2f", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
