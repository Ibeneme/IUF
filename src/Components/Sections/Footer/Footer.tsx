import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: "https://linkedin.com/company/isaac-ukeleghe-foundation",
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
    },
    {
      href: "https://instagram.com/isaacukeleghefoundation",
      icon: <FaInstagram size={24} />,
      label: "Instagram",
    },
    {
      href: "https://twitter.com/isaacukeleghe",
      icon: <FaTwitter size={24} />,
      label: "Twitter",
    },
    {
      href: "https://facebook.com/isaacukeleghefoundation",
      icon: <FaFacebook size={24} />,
      label: "Facebook",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2 style={{ fontWeight: 900 }}>Isaac Ukeleghe Foundation</h2>
          <br />
        </div>

        <div className="footer-social">
          {socialLinks.map(({ href, icon, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{ fontSize: 12, color: "#f4f4f4" }}>
          &copy; {new Date().getFullYear()} Isaac Ukeleghe Foundation. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
