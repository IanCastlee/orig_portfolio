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
        <section>
          <span className="title">Backend</span>
          <ul>
            <li>Node.js</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Firebase</li>
          </ul>
        </section>

        <section>
          <span className="title">Frontend</span>
          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>Tailwind</li>
            <li>SCSS</li>
          </ul>
        </section>

        <section>
          <span className="title">Extra</span>
          <ul>
            <li>GitHub</li>
            <li>Postman</li>
            <li>PHPMailer</li>
            <li>Panoee</li>
          </ul>
        </section>

        <section>
          <span className="title">My Playground</span>
          <ul>
            <li>Next.js</li>
            <li>Laravel</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default Techskill;
