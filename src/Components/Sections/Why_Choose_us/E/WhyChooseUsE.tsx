import "../WhyChooseUs.css"; // Import your CSS file here
import "aos/dist/aos.css";
// Import your image
import exampleImage from "../../../../assets/images/e.png"; // Update the path to your image

const WhyChooseUsE: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-text">
        <h2 style={{ fontWeight: 900 }}>
          Legal Services for the
          <span
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "0px 4px",
              marginLeft: 8,
            }}
          >
            Creative Industry
          </span>
        </h2>
        <ul>
          <li>
            <strong style={{ color: "#000" }}>
              Business Formation and Management:
            </strong>{" "}
            We assist with the legal aspects of forming and incorporating your
            business, ensuring compliance with all regulatory requirements. We
            also provide business management services for our clients that make
            them outstanding as a brand.{" "}
          </li>
          <li>
            <strong style={{ color: "#000" }}>
              Copyright and Trademark Registration:
            </strong>
            We help you secure your creative works and brand identity through
            thorough copyright and trademark registration services.
          </li>
          <li>
            <strong style={{ color: "#000" }}>
              Licensing and Merchandising Agreements:
            </strong>
            Our team drafts and negotiates licensing and merchandising
            agreements to maximize the commercial potential of your creative
            assets.
          </li>
          <li>
            <strong style={{ color: "#000" }}>Talent Representation:</strong>
            We provide legal representation for talents and creatives, ensuring
            their contracts are fair and their rights are protected.
          </li>
          <li>
            <strong style={{ color: "#000" }}>
              Litigation and Dispute Resolution:
            </strong>
            Our experts handle legal disputes with professionalism and
            expertise, striving for favorable outcomes for our clients.
          </li>
        </ul>
      </div>
      <div className="why-choose-us-image">
        <img src={exampleImage} alt="Why Choose Us" />
      </div>
    </section>
  );
};

export default WhyChooseUsE;
