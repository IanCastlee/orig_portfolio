import "./Home.scss";
import { motion } from "framer-motion";

//IMAGES
import ppImage from "../../assets/project_images/profile.jpg";
import aiMessageIcon from "../../assets/icons/text.png";

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
import Techskill from "../../components/tech_skill/Techskill";
import { DarkModeContext } from "../../context/Darkmode";
import { WiMoonWaxingCrescent4 } from "react-icons/wi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Feedback from "../../components/feed/Feedback";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Chatbot from "../../components/chatbot/Chatbot";
import { PiDownload } from "react-icons/pi";

const Home = () => {
  const { toggleTheme, theme } = useContext(DarkModeContext);
  const [viewProfile, setViewProfie] = useState(false);
  const [hoverTech, setHover] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  const handleSendEmail = () => {
    const email = "castillo321ian@gmail.com";
    const subject = encodeURIComponent("Question About Your Services");
    const body = encodeURIComponent("Hello, I would like to ask about...");

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../../public/CASTILLO_RESUME_4.0.pdf";
    link.download = "CASTILLO_IAN.pdf";
    link.click();
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

              <button onClick={handleDownload} className="btn-dl-cv">
                <PiDownload className="dlIcon" />
                Download CV
              </button>
            </div>

            <div className="profile-img-wrapper">
              <LazyLoadImage
                src={ppImage}
                alt=""
                className="profile-img"
                onClick={() => setViewProfie(true)}
              />
            </div>

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
                  Web and Mobile App Developer
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="socmed-button"
              >
                <div className="socmed">
                  <FaGithub className="icon" />
                  <FaFacebookMessenger className="icon" />
                </div>
                <button className="btn-contact" onClick={handleSendEmail}>
                  Send Email <LuSquareArrowOutUpRight className="email-icon" />
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

          <div className="cotent-container">
            <div className="left">
              <Experience />
              <Techskill />

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
                  I am a fresh graduate with a Bachelor's degree in Information
                  Technology, specializing in Full Stack Web Development. I have
                  a solid foundation in creating fully functional web
                  applications from the ground up. During college, I gained
                  hands-on experience as a freelancer, working on capstone
                  projects, personal portfolios, and simple websites for
                  clients. These opportunities helped me strengthen both my
                  technical skills and my ability to meet diverse requirements
                  and deadlines. I am passionate about turning ideas into
                  efficient, user-friendly web solutions and excited to grow and
                  learn continuously in the fast-paced tech industry.
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
            </div>

            <Post />
          </div>
        </div>
        <Feedback />

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

      {!showChatbot && (
        <div className="btn-chatbot-wrapper">
          <img
            onClick={() => setShowChatbot(true)}
            src={aiMessageIcon}
            alt="ChatBot"
            className="buttonAi"
          />

          <span>Ask About Ian</span>
        </div>
      )}

      {showChatbot && <Chatbot close={() => setShowChatbot(false)} />}
    </>
  );
};

export default Home;
