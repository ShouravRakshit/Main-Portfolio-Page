/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";

const Education = ({ color }) => {

  let textColor = color === "#212935" ? "#FFFFEC" : "#212935";
  return (
    <>
      <div
        style={{ width: "65%", backgroundColor: color }}
        className="education container"
        id="education"
      >
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education details
        </h2>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#43766C", color: "#11e6db" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2020 - present"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Calgary
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Calgary, Alberta
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#43766C", color: "#11e6db" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date="2017 - 2019"
            iconStyle={{ background: "#138781", color: "white" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Notre Dame College
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dhaka, Bangladesh
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
