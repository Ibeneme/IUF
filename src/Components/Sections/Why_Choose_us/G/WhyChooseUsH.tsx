import React from "react";
import "../WhyChooseUs.css"; // Import your CSS file here
import exampleImage1 from "../../../../assets/impact/aa.jpeg"; // Update the path to your images
import exampleImage2 from "../../../../assets/impact/ab.jpeg";
import exampleImage3 from "../../../../assets/impact/ac.jpeg";
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

const WhyChooseUsH: React.FC = () => {
  // const images = [image1, image2]; // Array of image imports

  // const imagesContainerStyle: React.CSSProperties = {
  //   display: "flex",
  //   gap: "10px",
  //   flexDirection: "column",
  // };

  // const imageStyle: React.CSSProperties = {
  //   maxWidth: "100%",
  //   borderRadius: "8px",
  //   height: "auto",
  //   width: "100%",
  // };

  // const desktopImageStyle: React.CSSProperties = {
  //   maxWidth: "100%",
  // };

  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2 style={{ fontWeight: 900, fontSize: "64px" }}>OUR IMPACT</h2>
        <p style={{ fontSize: "18px", color: "#333" }}>
          At Our Foundation we are committed to creating sustainable change in
          Nigeria by empowering vulnerable communities. Through our diverse
          programs, we address critical issues like education, healthcare, and
          poverty alleviation. Our goal is to provide opportunities and
          resources that enable individuals to thrive and contribute positively
          to society.
        </p>

        <div style={{ marginTop: "40px" }}>
          <ProgramCard
            title="COMMUNITY HEALTH OUTREACH"
            content="Providing free medical checkups, treatments, and health education to underprivileged communities in rural areas."
          />
          <ProgramCard
            title="EDUCATION EMPOWERMENT PROGRAM"
            content="Offering scholarships, learning materials, and mentorship to students from low-income families to help them achieve their academic dreams."
          />
          <ProgramCard
            title="WOMEN SKILLS DEVELOPMENT INITIATIVE"
            content="Training women in vocational skills like tailoring, catering, and digital literacy to promote financial independence and self-sufficiency."
          />
        </div>
      </div>

      <div className="why-choose-us-images-grid">
        <img src={exampleImage1} alt="Educational Support" />
        <img src={exampleImage2} alt="Youth Empowerment" />
        <img src={exampleImage3} alt="Community Development" />
        <img src={exampleImage4} alt="Our Impact" />
        <img src={exampleImage5} alt="Community Development" />
        <img src={exampleImage6} alt="Our Impact" />
      </div>
    </section>
  );
};

export default WhyChooseUsH;
