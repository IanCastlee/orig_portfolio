import "./FeedBack.scss";
import { VscFeedback } from "react-icons/vsc";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { useRef } from "react";

function Feedback() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320; // Adjust based on card width + gap

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="feedback">
      <h3 className="feedback-title">
        <VscFeedback className="project-icon" />
        Client Feedback and Collab Workmates
      </h3>

      <div className="feedback-wrapper">
        <div className="feedback-content" ref={scrollRef}>
          {Array.from({ length: 9 }).map((_, index) => (
            <div className="card" key={index}>
              <div className="name-owner">
                <span>Luis Alvin Hermo</span>
                <p>Workmate</p>
              </div>
              <p>
                I had the pleasure of working with Eyhan on a recent project,
                and I must say, his expertise in web development is truly
                impressive.
              </p>
            </div>
          ))}
        </div>

        <div className="scroll-btn left" onClick={() => handleScroll("left")}>
          <CiCircleChevLeft className="next-icon" />
        </div>
        <div className="scroll-btn right" onClick={() => handleScroll("right")}>
          <CiCircleChevRight className="next-icon" />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
