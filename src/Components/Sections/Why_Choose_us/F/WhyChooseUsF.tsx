import "../WhyChooseUs.css"; // Import your CSS file here
import "aos/dist/aos.css";
// Import your image
import exampleImage from "../G/bill.jpg"; // Update the path to your image

const WhyChooseUsF: React.FC = () => {
  return (
    <section className="why-choose-us-section-a">
      <div className="why-choose-us-text">
        <h2
          style={{
            fontWeight: 900,
            // color: "#7C04FC",
            // fontWeight: 900,
            fontSize: "64px",
            textTransform: "uppercase",
          }}
        >
          Core Focus Areas
          <br />
        </h2>

        <ul>
          <li>
            <strong style={{ color: "#000" }}>Educational Support </strong>
            We Scholarships and grants for underprivileged students.
            <br />
            Organizing academic competitions to encourage excellence, such as
            our Isoko Secondary Schools Competition, which highlights academic
            and literary talent.
          </li>
          <li>
            <strong style={{ color: "#000" }}>Youth Empowerment</strong> We
            Skills acquisition programs and workshops. <br />
            Mentorship initiatives connecting young people with experienced
            professionals.{" "}
          </li>
          <li>
            <strong style={{ color: "#000" }}>Community Development</strong>
            <br />
            We Providing resources to support health, sanitation, and
            infrastructural needs in local communities. <br />
            Partnerships with community leaders to identify and address pressing
            social challenges.{" "}
          </li>
        </ul>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Film Industry Services" />
      </div>
    </section>
  );
};

export default WhyChooseUsF;
