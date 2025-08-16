import "./Techskill.scss";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const skills = {
  Backend: [
    { name: "Node.js", level: 60 },
    { name: "PHP", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "Firebase", level: 65 },
  ],
  Frontend: [
    { name: "React", level: 85 },
    { name: "React Native", level: 78 },
    { name: "Tailwind", level: 80 },
    { name: "SCSS", level: 90 },
  ],
  Extra: [
    { name: "GitHub", level: 80 },
    { name: "Postman", level: 80 },
    { name: "PHPMailer", level: 60 },
    { name: "Panoee", level: 70 },
  ],
  "My Playground": [
    { name: "Next.js", level: 50 },
    { name: "Laravel", level: 50 },
  ],
};

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
        {Object.entries(skills).map(([category, skillList]) => (
          <section key={category}>
            <span className="title">{category}</span>
            <ul>
              {skillList.map((skill) => (
                <li key={skill.name}>
                  <div className="skill-label">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </motion.div>
  );
};

export default Techskill;
