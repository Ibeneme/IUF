import React from "react";
import "../WhyChooseUs.css"; // Import your CSS file here
import exampleImage3 from "../../../../assets/impact/aa.jpeg";
import exampleImage4 from "../../../../assets/impact/d.jpeg";
import exampleImage5 from "../../../../assets/impact/e.jpeg";
import exampleImage6 from "../../../../assets/impact/g.jpeg";

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
    <section className="why-choose-us-section-a">
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
            content="Celebrating academic excellence and creativity in secondary schools across the Isoko region. Check out pictures and videos below."
          />
          <ProgramCard
            title="ISOKO SECONDARY SCHOOLS COMPETITION SECOND EDITION"
            content="Expanding the competition with more schools and exciting events. View photos and videos of the second edition."
          />
        </div>
      </div>
      <div className="why-choose-us-images-grid">
        <img src={exampleImage4} alt="Our Impact" />
        <img src={exampleImage5} alt="Community Development" />
        <img src={exampleImage6} alt="Our Impact" />
        <img src={exampleImage3} alt="Our Impact" />
      </div>
    </section>
  );
};

export default WhyChooseUsG;
