import "./Post.scss";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//ICONS
import { CgWebsite } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";
import { projectData } from "../Projects";
import ModalBox from "../modalBox/ModalBox";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/Darkmode";

import placeholderImg from "../../assets/icons/7423888_react_react native_icon.png";

const Post = () => {
  const { handleShowMessage } = useContext(DarkModeContext);
  const [showCard, setShowCard] = useState(null);
  const [clickedID, setClickedID] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const totalPages = Math.ceil(projectData.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProjects = projectData.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

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

      {currentProjects.map((project) => (
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
                  if (project.url && project.url.trim() !== "") {
                    window.open(project.url, "_blank");
                  } else {
                    handleShowMessage();
                  }
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
            {!loaded && <div className="loader-img"></div>}
            <LazyLoadImage
              src={project.image}
              onLoad={() => setLoaded(true)}
              alt="post"
              effect="blur"
              className="post-image"
            />
          </div>
        </motion.div>
      ))}

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          ⬅ Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Post;
