import "./Home.scss";
import { motion } from "framer-motion";

//IMAGES
import bgImage from "../../assets/bgppf.png";
import ppImage from "../../assets/profileppfimge.avif";

//ICONS
import { FaGithub } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

import Post from "../../components/post/Post";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-container-bg">
          <div className="bg-image-wrapper">
            <img src={bgImage} alt="" />
          </div>

          <img src={ppImage} alt="" className="profile-img" />

          <div className="profile-info">
            <div className="name-position">
              <span className="name">Ian Castillo</span>
              <span className="position">
                <FaCode className="icon-p" /> Fullstack Web Developer
              </span>
            </div>

            <div className="socmed-button">
              <div className="socmed">
                <FaGithub className="icon" />
                <FaFacebookMessenger className="icon" />
              </div>

              <button className="btn-contact">Contact</button>
            </div>
          </div>
        </div>

        <div className="navbar">
          <ul>
            <li>Services</li>
            <li>Experience</li>
            <li>About</li>
          </ul>
        </div>

        <div className="cotent-container">
          <div className="left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="about"
            >
              <h3>
                <MdInfoOutline className="about-icon" /> About
              </h3>

              <p>
                As a renowned software development company in Bicol, our
                experienced software developers empower your buiness to
                transform digitally, opening a new door of opportunities for
                tomorrow. WordPress is highly popular partly due to its
                user-friendly interface. Its menus and settings are easy to find
                and understand, which is highly
              </p>
            </motion.div>

            <div className="other-info">
              <h3>
                <MdInfoOutline className="about-icon" /> Other Information
              </h3>

              <div className="container">
                <span>
                  <MdLocationPin className="icon-oi" /> Bulusan, Sorsogon
                  (Philippines)
                </span>
              </div>
            </div>
          </div>

          <Post />
        </div>
      </div>
    </div>
  );
};

export default Home;
