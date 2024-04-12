import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="section section_primary footer">
      <div className="social_info">
        <h4>GET IN TOUCH</h4>
        <a href="https://www.linkedin.com/in/prakarti-goel-2404/">
          <img src="/icons/linkedin.png" alt="" />
        </a>
        <a href="mailto:prakartigoel24@outlook.com">
          <img src="/icons/email.png" alt="" />
        </a>
        <a href="https://github.com/prakartigoel24">
          <img src="/icons/github.png" alt="" />
        </a>
      </div>
      <div className="divider"></div>
      <p>&copy; Prakarti Goel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
