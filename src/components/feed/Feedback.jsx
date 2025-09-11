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
      name: "Luis Alvin Hermo",
      role: "Workmate",
      message:
        "I had the pleasure of working with Ian on a recent project. His expertise in web development and clean code really helped us deliver on time.",
    },
    {
      name: "Jasmine De Vera",
      role: "Client - Startup Founder",
      message:
        "Ian was instrumental in launching our MVP. He communicates clearly, delivers on time, and exceeds expectations!",
    },
    {
      name: "Carlos Tan",
      role: "Workmate",
      message:
        "Collaborating with Ian is always smooth. His React skills are sharp, and he always brings innovative solutions to the table.",
    },
    {
      name: "Maria Santos",
      role: "Client - E-commerce Owner",
      message:
        "Ian revamped our entire online store, and our conversion rates increased significantly. Professional and detail-oriented!",
    },
    {
      name: "Kevin Mercado",
      role: "Project Manager",
      message:
        "Ian is the kind of developer every team wants. Reliable, fast, and great at solving complex problems under pressure.",
    },
    {
      name: "Aira Lim",
      role: "UX Designer",
      message:
        "Working with Ian was a breeze. He translated my Figma designs pixel-perfectly and even improved the responsive behavior.",
    },
    {
      name: "John Reyes",
      role: "Client - NGO Director",
      message:
        "Ian helped build our organization’s website, and it’s now much easier for donors to reach and support us. Amazing job!",
    },
    {
      name: "Stephanie Uy",
      role: "Collab Developer",
      message:
        "Code reviews with Ian are insightful and helpful. He pushes the team to follow best practices and clean architecture.",
    },
    {
      name: "Albert Dela Cruz",
      role: "Freelance Collaborator",
      message:
        "We collaborated on a portfolio site, and Ian's front-end wizardry brought everything to life beautifully!",
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
