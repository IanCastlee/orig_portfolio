import "./FeedBack.scss";
import { VscFeedback } from "react-icons/vsc";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { useRef, useState } from "react";

function Feedback() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320;

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="feedback">
      <h3 className="feedback-title">
        <VscFeedback className="project-icon" />
        Client Feedback and Collab Workmates
      </h3>

      <div className="feedback-wrapper">
        <div
          className="feedback-content"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
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
