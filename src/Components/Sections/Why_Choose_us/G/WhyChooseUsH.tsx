import React from "react";
import "../WhyChooseUs.css"; // Import your CSS file here
import image1 from "./ngo-image.jpg"; // Update paths to your images
import image2 from "./ann.jpg";

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
  const images = [image1, image2]; // Array of image imports

  const imagesContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: "100%",
    borderRadius: "8px",
    height: "auto",
    width: "100%",
  };

  const desktopImageStyle: React.CSSProperties = {
    maxWidth: "100%",
  };

  return (
    <section className="why-choose-us-section-a">
      <div>
        <h2 style={{ fontWeight: 900, fontSize: '64px' }}>OUR IMPACT</h2>
        <p style={{ fontSize: "18px", color: "#333" }}>
          At *Hope For Tomorrow Foundation*, we are committed to creating
          sustainable change in Nigeria by empowering vulnerable communities.
          Through our diverse programs, we address critical issues like
          education, healthcare, and poverty alleviation. Our goal is to provide
          opportunities and resources that enable individuals to thrive and
          contribute positively to society.
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

      {/* Multiple images section */}
      <div style={imagesContainerStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Program Image ${index + 1}`}
            style={{
              ...imageStyle,
              ...(window.innerWidth >= 1024 ? desktopImageStyle : {}),
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsH;
