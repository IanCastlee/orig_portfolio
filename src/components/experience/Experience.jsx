import "./Experience.scss";
import { motion } from "framer-motion";

import { FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="experience"
      id="experience"
    >
      <h3>
        <FaLaptopCode className="about-icon" /> Career Timeline
      </h3>

      <div className="container">
        <div className="line">
          <div className="section">
            <button
              style={{ backgroundColor: "blue", color: "#fff" }}
              className="year"
            >
              2025
            </button>
            <span>{`Completed my OJT at DevOpt as a Website Designer. I am now preparing to seek job opportunities at companies that align with my skills.
`}</span>
          </div>
          <div className="section">
            <button className="year">2024</button>
            <span>{`Worked on my capstone project while also taking on commission work from fellow students (Node.js, PHP, MySQL, ReactJS, SCSS).`}</span>
          </div>
          <div className="section" id="stack">
            <button className="year">2023</button>
            <span>{`Started my web development journey and began taking web development commissions using Laravel, MySQL, and CSS.`}</span>
          </div>
          <div className="section">
            <button className="year">2022</button>
            <span>{`Developed a fully functional calculator and management system using Java and Visual Basic.
`}</span>
          </div>
          <div className="section">
            <button style={{ alignSelf: "end" }} className="year">
              2021
            </button>
            <span>{`Wrote my first C++ program: "Hello, World!"`}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
