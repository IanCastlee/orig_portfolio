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
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Random feedback data
  const feedbacks = [
    {
      name: "John Doe",
      role: "Colleague",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.",
    },
    {
      name: "Jane Smith",
      role: "Client",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      name: "Mark Johnson",
      role: "Team Member",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.",
    },
    {
      name: "Emily Davis",
      role: "Project Partner",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh.",
    },
    {
      name: "Michael Brown",
      role: "Manager",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    },
    {
      name: "Olivia Wilson",
      role: "Designer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat.",
    },
    {
      name: "William Martinez",
      role: "Client",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada.",
    },
    {
      name: "Sophia Anderson",
      role: "Developer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    },
    {
      name: "James Taylor",
      role: "Freelancer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    },
  ];

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
          {feedbacks.map((fb, index) => (
            <div className="card" key={index}>
              <div className="name-owner">
                <span>{fb.name}</span>
                <p>{fb.role}</p>
              </div>
              <p>{fb.message}</p>
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
