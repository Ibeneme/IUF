import "../WhyChooseUs.css"; // Import your CSS file here
import "aos/dist/aos.css";
import exampleImage1 from "../../../../assets/isoko/a.jpeg"; // Update the path to your images
import exampleImage2 from "../../../../assets/isoko/b.jpeg";
import exampleImage3 from "../../../../assets/isoko/c.jpeg";
import exampleImage4 from "../../../../assets/isoko/d.jpeg";
import exampleImage5 from "../../../../assets/isoko/e.jpeg";
import exampleImage6 from "../../../../assets/isoko/g.jpeg";

const WhyChooseUsF: React.FC = () => {
  return (
    <section className="why-choose-us-section-a">
      <div className="why-choose-us-container">
        <div className="why-choose-us-text">
          <h2>Core Focus Areas</h2>
          <ul>
            <li>
              <strong style={{ color: "#000" }}>Educational Support</strong>
              <p>
                We provide scholarships and grants to underprivileged students,
                helping them achieve their academic aspirations. Additionally,
                we organize academic competitions, such as the{" "}
                <em>Isoko Secondary Schools Competition</em>, to inspire
                excellence and showcase talents.
              </p>
            </li>
            <li>
              <strong style={{ color: "#000" }}>Youth Empowerment</strong>
              <p>
                Our skills acquisition programs and workshops equip young people
                with practical knowledge. We also run mentorship initiatives
                that connect youths with experienced professionals for guidance
                and motivation.
              </p>
            </li>
            <li>
              <strong style={{ color: "#000" }}>Community Development</strong>
              <p>
                We provide resources to improve health, sanitation, and
                infrastructure within communities. Collaborations with community
                leaders help us identify and address pressing social challenges
                effectively.
              </p>
            </li>
          </ul>
        </div>

        <div className="why-choose-us-images-grid">
          <img src={exampleImage1} alt="Educational Support" />
          <img src={exampleImage2} alt="Youth Empowerment" />
          <img src={exampleImage3} alt="Community Development" />
          <img src={exampleImage4} alt="Our Impact" />
          <img src={exampleImage5} alt="Community Development" />
          <img src={exampleImage6} alt="Our Impact" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsF;
