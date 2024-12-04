import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Modal from "../../../Modal/Modal";

const CenteredTextSectionContact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="centered-text-section"
      style={{
        backgroundColor: "#043424",
        marginBottom: -120,
        paddingBottom: 360,
        padding: "20px",
      }}
    >
      <h3 className="section-header" style={{ color: "#ffdb1b" }}>
        Contact Us
      </h3>
      <p className="section-paragraph" style={{ color: "#ffdb1b" }}>
        Have questions or need assistance? Fill out our contact form, and our
        team will get back to you promptly.
      </p>
      <div className="contact-details-div">
        <ContactDetail
          icon={<FaMapMarkerAlt style={{ color: "#ffdb1b" }} />}
          text="9 Kwali close, off Ilorin street. Garki, Area 8."
        />
        <ContactDetail
          icon={<FaMapMarkerAlt style={{ color: "#ffdb1b" }} />}
          text="121a Queensway. Milton Keynes. MK2 2DH."
        />
        <ContactDetail
          icon={<FaEnvelope style={{ color: "#ffdb1b" }} />}
          text={
            <a
              href="mailto:info@isacculekele.com"
              style={{ fontWeight: 900, color: "#ffdb1b" }}
            >
              info@isacculekele.com
            </a>
          }
        />
        <ContactDetail
          icon={<FaEnvelope style={{ color: "#ffdb1b" }} />}
          text={
            <>
              <a
                href="mailto:isaac@iufng.org"
                style={{ fontWeight: 900, color: "#ffdb1b" }}
              >
                isaac@iufng.org
              </a>
              || &nbsp;
              <a
                href="mailto:dan@iufng.org"
                style={{ fontWeight: 900, color: "#ffdb1b" }}
              >
                dan@iufng.org
              </a>
              || &nbsp;
              <a
                href="mailto:julius@iufng.org"
                style={{ fontWeight: 900, color: "#ffdb1b" }}
              >
                julius@iufng.org
              </a>
              || &nbsp;
              <a
                href="mailto:ejuma@iufng.org"
                style={{ fontWeight: 900, color: "#ffdb1b" }}
              >
                ejuma@iufng.org
              </a>
            </>
          }
        />
        <ContactDetail
          icon={<FaPhone style={{ color: "#ffdb1b" }} />}
          text={
            <a
              href="tel:+2348039415693"
              style={{ fontWeight: 900, color: "#ffdb1b" }}
            >
              +2348039415693
            </a>
          }
        />
      </div>

      <a href="mailto:isaac@iufng.org">
        <button
          className="cta-button"
          style={{ backgroundColor: "#ffdb1b", border: `1px solid #ffdb1b` }}
        >
          Contact Us
        </button>
      </a>

      {isModalOpen && <Modal onClose={closeModal}></Modal>}
    </section>
  );
};

const ContactDetail: React.FC<{
  icon: React.ReactNode;
  text: React.ReactNode;
}> = ({ icon, text }) => (
  <p
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
      color: "#ffdb1b",
      flexWrap: "wrap", // Ensure text wraps on small screens
    }}
  >
    <div
      style={{
        backgroundColor: "#ffdb1b24",
        padding: 12,
        borderRadius: 4,
        width: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon}
    </div>
    <span style={{ wordBreak: "break-word" }}>{text}</span> {/* Break long words if necessary */}
  </p>
);

export default CenteredTextSectionContact;