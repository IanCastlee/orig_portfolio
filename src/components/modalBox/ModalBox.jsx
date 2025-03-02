import "./ModalBox.scss";
import { FaCode } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const ModalBox = ({ clicked, features, techstack }) => {
  return (
    <div className="modal-box">
      <div className="top">
        <h3>
          {clicked === "feature"
            ? "Features"
            : clicked === "techused"
            ? "Project Teck Stack"
            : ""}
        </h3>
      </div>

      <div className="content">
        <ul>
          {clicked === "feature"
            ? features.map((feature, index) => (
                <li key={index}>
                  <GoDotFill className="tech-icon" /> {feature}
                </li>
              ))
            : clicked === "techused"
            ? techstack.map((tech, index) => (
                <li key={index}>
                  <FaCode className="tech-icon" /> {tech}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default ModalBox;
