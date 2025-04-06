import "./Techskill.scss";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Techskill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="techskill"
    >
      <h3>
        <FaCode className="about-icon" /> Tech Stack
      </h3>

      <div className="card">
        <span className="title">Backend</span>
        <ul>
          <li>Node.Js</li>
          <li>PHP</li>
          <li>MySql</li>
        </ul>

        <span className="title">Frontend</span>
        <ul>
          <li>React</li>
          <li>SCSS</li>
          <li>Tailwind</li>
        </ul>

        <span className="title">Extra</span>
        <ul>
          <li>Github</li>
          <li>Postman</li>
          <li>PHP Mailer</li>
          <li>Panoee</li>
        </ul>

        <span className="title">My Playground</span>
        <ul>
          <li>React Native</li>
          <li>Laravel</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Techskill;
