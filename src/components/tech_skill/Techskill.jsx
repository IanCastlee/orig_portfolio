import "./Techskill.scss";
import { motion } from "framer-motion";
import { DiMysql } from "react-icons/di";
import { FaCode, FaLaravel, FaPhp, FaReact, FaSass } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoLogoNodejs } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiFirebase, SiPostman } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const IconComponent = ({ icon: Icon, color }) => {
  return <Icon color={color} />;
};

const skills = {
  Backend: [
    {
      name: "Node.js",
      yearExp: "3 months+",
      icon: <IconComponent icon={IoLogoNodejs} color="green" />,
    },
    {
      name: "PHP",
      yearExp: "2 years+",
      icon: <IconComponent icon={FaPhp} color="blue" />,
    },
    {
      name: "MySQL",
      yearExp: "3 years+",
      icon: <IconComponent icon={DiMysql} color="blue" />,
    },
    {
      name: "Firebase",
      yearExp: "2 months",
      icon: <IconComponent icon={SiFirebase} color="gold" />,
    },
  ],
  Frontend: [
    {
      name: "React",
      yearExp: "2 years+",
      icon: <IconComponent icon={FaReact} color="teal" />,
    },
    {
      name: "React Native",
      yearExp: "8 months",
      icon: <IconComponent icon={TbBrandReactNative} color="teal" />,
    },
    {
      name: "Tailwind",
      yearExp: "3 months",
      icon: <IconComponent icon={RiTailwindCssLine} color="blue" />,
    },
    {
      name: "SCSS",
      yearExp: "1.5 years+",
      icon: <IconComponent icon={FaSass} color="pink" />,
    },
  ],
  Extra: [
    {
      name: "GitHub",
      yearExp: "1 year+",
      icon: <IconComponent icon={FiGithub} color="violet" />,
    },
    {
      name: "Postman",
      yearExp: "3 year+",
      icon: <IconComponent icon={SiPostman} color="red" />,
    },
    {
      name: "PHPMailer",
      yearExp: "1 year+",
    },
    {
      name: "Panoee",
      yearExp: "5 months",
    },
  ],
  "My Playground": [
    {
      name: "Next.js",
      yearExp: "2 months",
      icon: <IconComponent icon={RiNextjsLine} color="blue" />,
    },
    {
      name: "Laravel",
      yearExp: "1 month",
      icon: <IconComponent icon={FaLaravel} color="red" />,
    },
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
            <div className="skill-card">
              {skillList.map((skill) => (
                <div className="skill-capsule">
                  <div className="name-icon">
                    {skill.icon} <span>{skill.name}</span>
                  </div>

                  <span className="exp">({skill.yearExp})</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </motion.div>
  );
};

export default Techskill;
