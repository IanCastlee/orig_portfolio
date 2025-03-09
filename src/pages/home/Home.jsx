import "./Home.scss";
import { motion } from "framer-motion";

//IMAGES
import ppImage from "../../assets/481679951_1560361091339380_5946198632888596042_n.jpg";

//ICONS
import { FaGithub } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMaleSharp } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";

import Post from "../../components/post/Post";
import Experience from "../../components/experience/Experience";
import Footer from "../../components/footer/Footer";
import { useContext, useState } from "react";

//ICONS
import nodeJS from "../../assets/icons/1012818_code_development_logo_nodejs_icon.png";
import php from "../../assets/icons/4375039_logo_php_icon.png";
import reactJs from "../../assets/icons/7423888_react_react native_icon.png";
import mysql from "../../assets/icons/1012821_code_development_logo_mysql_icon.png";
import tailwind from "../../assets/icons/tailwind-removebg-preview.png";
import scss from "../../assets/icons/4375066_logo_sass_icon.png";
import html from "../../assets/icons/317755_badge_html_html5_achievement_award_icon.png";
import Techskill from "../../components/tech_skill/Techskill";
import { DarkModeContext } from "../../context/Darkmode";
import { WiMoonWaxingCrescent4 } from "react-icons/wi";

const Home = () => {
  const { toggleTheme, theme, handleShowMessage } = useContext(DarkModeContext);
  const [viewProfile, setViewProfie] = useState(false);
  const [hoverTech, setHover] = useState("");

  const handleSendEmail = () => {
    const email = "castillo321ian@gmail.com";
    const subject = encodeURIComponent("Question About Your Services");
    const body = encodeURIComponent("Hello, I would like to ask about...");

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <div className="home" id="home">
        <div className="home-container">
          <div className="home-container-bg">
            <div className="bg-image-wrapper">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="tech-skill"
              >
                <img
                  onMouseEnter={() => setHover("nodejs")}
                  onMouseLeave={() => setHover("")}
                  src={nodeJS}
                  alt=""
                />
                <img
                  onMouseEnter={() => setHover("php")}
                  onMouseLeave={() => setHover("")}
                  src={php}
                  alt=""
                />
                <img
                  onMouseEnter={() => setHover("mysql")}
                  onMouseLeave={() => setHover("")}
                  src={mysql}
                  alt=""
                />
                <img
                  onMouseEnter={() => setHover("reactjs")}
                  onMouseLeave={() => setHover("")}
                  src={reactJs}
                  alt=""
                />
                <img
                  onMouseEnter={() => setHover("scss")}
                  onMouseLeave={() => setHover("")}
                  src={scss}
                  alt=""
                />
                <img
                  onMouseEnter={() => setHover("tailwind")}
                  onMouseLeave={() => setHover("")}
                  src={tailwind}
                  alt=""
                />
                <img
                  onMouseEnter={() => setHover("html")}
                  onMouseLeave={() => setHover("")}
                  src={html}
                  alt=""
                />
              </motion.div>

              <div className="togglebutton-wrapper" onClick={toggleTheme}>
                {theme === "light" ? (
                  <WiMoonWaxingCrescent4
                    className="icon-mode-moon"
                    onClick={toggleTheme}
                  />
                ) : (
                  <MdLightMode
                    className="icon-mode-sun"
                    onClick={toggleTheme}
                  />
                )}
              </div>
            </div>

            <img
              src={ppImage}
              alt=""
              className="profile-img"
              onClick={() => setViewProfie(true)}
            />

            <div className="profile-info">
              <div className="name-position">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="name"
                >
                  Ian Castillo
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="position"
                >
                  Aspiring Fullstack Web Developer
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="socmed-button"
              >
                <div className="socmed">
                  <FaGithub className="icon" onClick={handleShowMessage} />
                  <FaFacebookMessenger
                    className="icon"
                    onClick={handleShowMessage}
                  />
                </div>
                <button className="btn-contact" onClick={handleSendEmail}>
                  Send Email
                </button>
                <div className="togglebutton-wrapper" onClick={toggleTheme}>
                  {theme === "light" ? (
                    <WiMoonWaxingCrescent4
                      className="icon-mode-moon"
                      onClick={toggleTheme}
                    />
                  ) : (
                    <MdLightMode
                      className="icon-mode-sun"
                      onClick={toggleTheme}
                    />
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="navbar">
            <ul>
              <li onClick={() => scrollToSection("stack")}>Tech Stack</li>
              <li onClick={() => scrollToSection("experience")}>Experience</li>
              <li onClick={() => scrollToSection("project")}>Projects</li>
            </ul>
          </div>

          <div className="cotent-container">
            <div className="left">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="about"
              >
                <h3>
                  <MdInfoOutline className="about-icon" /> About
                </h3>

                <p>
                  I am a fourth-year college student graduating with a
                  Bachelor's degree in Information Technology, specializing in
                  Full Stack Web Development. I have a strong foundation in
                  building fully functional web applications from scratch.
                  Throughout my college years, I gained hands-on experience as a
                  freelancer, developing capstone projects, simple websites, and
                  portfolios for clients. These experiences have enhanced my
                  technical skills and strengthened my ability to meet diverse
                  requirements and deadlines. I am passionate about transforming
                  ideas into efficient and scalable web solutions, and I am
                  eager to continue learning and growing in the ever-evolving
                  tech industry.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="other-info"
                id="experience"
              >
                <h3>
                  <MdInfoOutline className="about-icon" /> Other Information
                </h3>

                <div className="container">
                  <span>
                    <MdOutlineLocationOn className="icon-oi" /> Bulusan,
                    Sorsogon (Philippines)
                  </span>
                  <span>
                    <IoMaleSharp className="icon-oi" />
                    Male
                  </span>
                </div>
              </motion.div>

              <Experience />
              <Techskill />
            </div>

            <Post />
          </div>
        </div>

        <Footer />
      </div>

      {viewProfile && (
        <div
          className="view-profile-image"
          onClick={() => setViewProfie(false)}
        >
          <img src={ppImage} alt="" />
        </div>
      )}
    </>
  );
};

export default Home;
