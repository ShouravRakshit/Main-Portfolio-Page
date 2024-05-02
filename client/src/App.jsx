/* eslint-disable no-unused-vars */
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Footer from "./Pages/Footer/Footer";
import Projects from "./Pages/Projects/Projects";
import TechStack from "./Pages/TechStack/TechStack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import "./app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <Projects color={theme} />
        {/* <Contact color={theme} /> */}
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
