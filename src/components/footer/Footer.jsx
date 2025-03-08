import "./Footer.scss";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="footer">
      <span>{`© ${year} Ian Castillo. All rights reserved.`}</span>

      <IoIosArrowDropupCircle
        className="up-icon"
        onClick={() => scrollToSection("home")}
      />
    </div>
  );
};

export default Footer;
