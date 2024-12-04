import React from "react";
import "../WhyChooseUs.css"; // Import your CSS file here
import exampleImage from "./new.jpg"; // Update the path to your image

// ProgramCard component to display individual program details
const ProgramCard: React.FC<{
  title: string;
  content: string;
}> = ({ title, content }) => {
  return (
    <div
      className="program-card"
      style={{
        backgroundColor: "#fff",
        paddingTop: "20px",
        borderRadius: "8px",
        margin: "20px 0",
        boxShadow: "none", // Removed box shadow
        textAlign: "left", // Text aligned to the left
      }}
    >
      <h3 style={{ color: "#000", fontSize: "24px", fontWeight: 700 }}>
        {title}
      </h3>
      <p style={{ fontSize: "16px", color: "#555" }}>{content}</p>
    </div>
  );
};

const WhyChooseUsG: React.FC = () => {
  return (
    <section
      className="why-choose-us-section"
      style={{
        textAlign: "left", // Text aligned to the left
      }}
    >
      <div className="why-choose-us-text">
        <h2
          style={{
            fontWeight: 900,
            // color: "#7C04FC",
            // fontWeight: 900,
            fontSize: "64px",
          }}
        >
          OUR PROGRAMS
        </h2>
        <p style={{ fontSize: "18px", color: "#333" }}>
          The Isaac Ukeleghe Foundation is dedicated to uplifting lives and
          fostering growth through impactful programs that focus on empowerment,
          talent discovery, and personal development. The foundation provides a
          platform for individuals, particularly youths, to showcase their
          talents, access growth opportunities, and cultivate a passion for
          learning. By organizing healthy competitions, motivational
          initiatives, and capacity-building activities, the foundation inspires
          people to achieve their full potential and contribute positively to
          society.
        </p>

        <div className="programs-list" style={{ marginTop: "40px" }}>
          <ProgramCard
            title="ISOKO SECONDARY SCHOOLS COMPETITION FIRST EDITION"
            content="Can I have the privilege of uploading some stuff here? Texts and some pictures… then links to some YouTube videos."
          />
          <ProgramCard
            title="ISOKO SECONDARY SCHOOLS COMPETITION SECOND EDITION"
            content="Can I have the privilege of uploading some stuff here? Texts and some pictures… then links to some YouTube videos."
          />
        </div>
      </div>

      {/* Optional image section */}
      <div
        className="why-choose-us-image"
        style={{
          marginTop: "40px",
          alignItems: "flex-end",
          display: "flex",
        }}
      >
        <img
          src={exampleImage}
          alt="Isaac Ukeleghe Foundation"
          style={{
            maxWidth: "100%",
            height: "50%",
            borderRadius: "8px",
            alignItems: "flex-end",
          }}
        />
      </div>
    </section>
  );
};

export default WhyChooseUsG;
