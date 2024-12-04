import React from "react";
import "./CenteredTextSection.css"; // Import your CSS file here

const CenteredTextSection: React.FC = () => {
  //const navigate = useNavigate();

  return (
    <section
      className="centered-text-section"
      style={{ backgroundColor: "#043424" }}
    >
      <br />
      <br />
      <h3 className="section-header" style={{ color: "#ffdb1b" }}>
        Our Mission
      </h3>{" "}
      <br />
      <p className="section-paragraph" style={{ color: "#ffdb1b" }}>
        Our mission is to bridge gaps in education, provide opportunities for
        personal and professional growth, and create a platform for individuals
        to realize their potential. Through targeted programs and initiatives,
        we aim to foster a culture of learning, innovation, and sustainable
        development.
      </p>
      <br />
      <br />
      <br />
    </section>
  );
};

export default CenteredTextSection;
