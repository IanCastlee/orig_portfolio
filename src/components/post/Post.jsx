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
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const _clickedID = (_id) => {
    setClickedID(_id);
  };

  return (
    <div className="post" id="project">
      <h3>
        <CgWebsite className="project-icon" />
        Some of My Projects
      </h3>
      {projectData &&
        projectData.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                  <IoEyeOutline className="view-icon" /> Tech Stack & Tools
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
              {/* By default, `isExpand` is set to `false`.  
   First, it checks `isExpand ?` (meaning, if `isExpand` is `true`),  
   if YES, it displays `project.description`.  
   However, since the default state of `isExpand` is `false`,  
   it moves to the ELSE (`:`) condition.  

   In the ELSE condition, `project.description` is sliced from index `0` to `maxLength`,  
   and `"..."` is added at the end **only if** `project.description.length` is greater than `maxLength`.  
   Otherwise, an empty string (`""`) is added.  

   In the `toggle` function, when the user clicks the button,  
   it switches `isExpand` between `true` and `false`.  
   If `isExpand` is `true`, it displays "READ LESS".  
   If `isExpand` is `false`, it displays "READ MORE".  
*/}

              {/* NOTE FOR MY FRIEND hahahhahahahhhhhhhhhhhhhhhhhhhhhhhh */}

              <p>
                {isExpanded
                  ? project.description
                  : project.description.slice(0, maxLength) +
                    (project.description.length > maxLength ? "..." : "")}
              </p>
              {project.description.length > maxLength && (
                <p onClick={toggleReadMore} className="read-more-btn">
                  {isExpanded ? "Read Less" : "Read More"}
                </p>
              )}
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
