import "./Footer.scss";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <span>{`© ${year} Ian Castillo. All rights reserved.`}</span>
    </div>
  );
};

export default Footer;
