import "./Post.scss";
import { motion } from "framer-motion";

//ICONS
import { CgWebsite } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";
import { projectData } from "../Projects";
import ModalBox from "../modalBox/ModalBox";
import { useState } from "react";

const Post = () => {
  const [showCard, setShowCard] = useState(null);
  const [clickedID, setClickedID] = useState(null);

  const _clickedID = (_id) => {
    setClickedID(_id);
  };

  return (
    <div className="post">
      <h3>
        <CgWebsite className="project-icon" /> Projects
      </h3>
      {projectData &&
        projectData.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="post-card"
            key={project.id}
          >
            <div className="post-card-top">
              <div className="project-name-icon">
                <h3 className="h3-project">{project.name}</h3>
                <span>Developed by : {project.developer}</span>
              </div>

              <div className="button-wrapper">
                <button
                  className={`btn-show ${
                    showCard === "feature" && clickedID === project.id
                      ? "feature"
                      : ""
                  }`}
                  onClick={() => {
                    setShowCard("feature");
                    _clickedID(project.id);
                  }}
                >
                  <IoEyeOutline className="view-icon" /> Features
                </button>
                <button
                  className={`btn-show ${
                    showCard === "techused" && clickedID === project.id
                      ? "techused"
                      : ""
                  }`}
                  onClick={() => {
                    setShowCard("techused");
                    _clickedID(project.id);
                  }}
                >
                  <IoEyeOutline className="view-icon" /> Project Tech Stack
                </button>
                <button
                  className={`btn-show ${
                    showCard === "visit" && clickedID === project.id
                      ? "visit"
                      : ""
                  }`}
                  onClick={() => {
                    setShowCard("visit");
                    _clickedID(project.id);
                  }}
                >
                  <IoEyeOutline className="view-icon" /> Visit Site
                </button>

                {showCard != "visit" && clickedID === project.id && (
                  <ModalBox
                    clicked={showCard}
                    features={project.features}
                    techstack={project.techStack}
                  />
                )}
                {showCard != "visit" && clickedID === project.id && (
                  <div
                    className="modal-box-overlay"
                    onClick={() => {
                      setShowCard(null);
                      setClickedID(null);
                    }}
                  ></div>
                )}
              </div>
            </div>

            <div className="description">
              <p>{project.description}</p>
            </div>

            <div className="post-wrapper">
              <img src={project.image} alt="" />
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default Post;
