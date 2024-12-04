import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    text: "The Isaac Ukeleghe Foundation has been instrumental in helping me achieve my academic dreams through their scholarship program.",
    client: "Grace E., Scholarship Beneficiary",
  },
  {
    text: "Participating in the Isoko Secondary Schools Competition helped me showcase my talents and boosted my confidence.",
    client: "Emeka O., Competition Participant",
  },
  {
    text: "The youth empowerment workshops provided by the foundation have equipped me with valuable skills for my career.",
    client: "Anita M., Workshop Attendee",
  },
  {
    text: "Our community has greatly benefited from the foundation’s initiatives in improving sanitation and health resources.",
    client: "Chief Oba, Community Leader",
  },
  {
    text: "Mentorship programs from the foundation connected me with experienced professionals who guided my career path.",
    client: "John D., Mentee",
  },
  {
    text: "I’m proud to support the Isaac Ukeleghe Foundation in their mission to transform lives and create opportunities.",
    client: "Mr. Adebayo, Corporate Partner",
  },
  {
    text: "Thanks to the foundation's skills acquisition program, I was able to start my own small business.",
    client: "Ngozi I., Entrepreneur",
  },
  {
    text: "The academic competitions organized by the foundation are a great way to encourage learning and excellence.",
    client: "Mrs. Chinyere, Teacher",
  },
  {
    text: "The foundation’s focus on community development has significantly improved our living standards.",
    client: "Mr. Adewale, Resident",
  },
  {
    text: "As a volunteer, I’ve seen firsthand the positive impact the foundation has on the lives of many people.",
    client: "Tunde F., Volunteer",
  },
  {
    text: "The foundation's partnerships with local leaders have been effective in addressing critical community challenges.",
    client: "Chief Afolabi, Local Leader",
  },
  {
    text: "Attending the capacity-building events has helped me develop leadership skills and grow professionally.",
    client: "Linda O., Program Participant",
  },
  {
    text: "The gallery page on the website showcases the incredible work the foundation is doing across various programs.",
    client: "Nkechi A., Supporter",
  },
  {
    text: "Donating to the Isaac Ukeleghe Foundation is seamless, and I feel confident that my contributions are making a difference.",
    client: "Samuel K., Donor",
  },
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };

  return (
    <section className="testimonials">
      <h2
        className="section-header"
        style={{ color: "#ffdb1b", marginBottom: 48 }}
      >
        Testimonials
      </h2>
      <div className="testimonials-wrapper">
        <div className="testimonials-container" ref={containerRef}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <span className="testimonial-span-text">{index + 1}</span>
              <p className="testimonial-text">{testimonial.text}"</p>
              <p className="testimonial-client">- {testimonial.client}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials-buttons">
        <button onClick={scrollLeft} className="scroll-button">
          <FaChevronLeft />
        </button>
        <button onClick={scrollRight} className="scroll-button">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
