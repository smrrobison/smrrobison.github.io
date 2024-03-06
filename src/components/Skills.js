import React from "react";
import { skills } from "../skills";
import { Row, Col } from "react-bootstrap";
import { SiCplusplus, SiCsharp, SiSalesforce } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava, FaPython, FaReact } from "react-icons/fa";

const skillIcons = {
  Java: <FaJava />,
  "C++": <SiCplusplus  />,
  JavaScript: <IoLogoJavascript />, 
  Python: <FaPython  />,
  "C#": <SiCsharp  />,
  ReactJS: <FaReact  />,
  SalesForce: <SiSalesforce />,
  "MySQL": <GrMysql/> 
};

export default function Skills() {
    const column1 = [];
    const column2 = [];
  
    skills.forEach((skill, index) => {
      if (index % 2 === 0) {
        column1.push(skill);
      } else {
        column2.push(skill);
      }
    });

  return (
    <div id="Skills" className="Skills">
      <div className="container px-5 py-10">
        <div className="text-center mb-5">
          <h1>Skills &amp; Technologies</h1>
        </div>
        <Row>
          {}
          <Col md={6}>
            {column1.map((skill, index) => (
              <div key={index} className="p-2">
                <div className="bg-white rounded border border-black p-4 h-full items-center">
                  {skillIcons[skill]} {}
                  <span className="title-font font-medium text-black ">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </Col>
          {/* Column 2 */}
          <Col md={6}>
            {column2.map((skill, index) => (
              <div key={index} className="p-2">
                <div className="bg-white rounded border border-black p-4 h-full items-center">
                  {skillIcons[skill]} {}
                  <span className="title-font font-medium text-black">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}
