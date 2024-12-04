import React, { useState } from "react";
import "./FAQPage.css";

const faqs = [
  {
    question: "What is the mission of the Isaac Ukeleghe Foundation?",
    answer:
      "Our mission is to bridge gaps in education, provide opportunities for personal and professional growth, and create a platform for individuals to realize their potential. We focus on fostering learning, innovation, and sustainable development.",
  },
  {
    question: "What are the core focus areas of the foundation?",
    answer:
      "The foundation focuses on Educational Support, Youth Empowerment, and Community Development. This includes scholarships, skills acquisition programs, mentorship initiatives, and community resource support.",
  },
  {
    question: "What is the Isoko Secondary Schools Competition?",
    answer:
      "The Isoko Secondary Schools Competition is an academic and literary contest aimed at highlighting talent and encouraging excellence among students. It has successfully run for two editions and will continue to inspire academic achievement.",
  },
  {
    question: "Can I contribute content to the competition pages?",
    answer:
      "Yes, you can upload texts, pictures, and links to YouTube videos for both editions of the Isoko Secondary Schools Competition. Privileges to add upcoming programs can also be granted.",
  },
  {
    question: "What type of programs does the foundation organize?",
    answer:
      "The foundation organizes competitions, motivational initiatives, and capacity-building activities that aim to empower individuals, particularly youths, and help them achieve their full potential.",
  },
  {
    question: "How can I support the foundation?",
    answer:
      "You can support us by making donations, partnering with us, or volunteering. Donations can be made using cards, direct transfers, and other secure payment options.",
  },
  {
    question: "Is there a way to view photos and videos from past events?",
    answer:
      "Yes, you can visit our Gallery page to view pictures and YouTube video links from past events and programs.",
  },
  {
    question: "How can I contact the Isaac Ukeleghe Foundation?",
    answer:
      "You can reach us via phone, social media, or the live chat feature powered by Tawk.to integrated on our Contact Us page.",
  },
  {
    question: "How do I make a donation?",
    answer:
      "Visit the Donate page on our website, where you can make donations using cards, direct bank transfers, or other supported methods.",
  },
  {
    question: "Can organizations partner with the foundation?",
    answer:
      "Yes, corporate organizations and community leaders are welcome to collaborate with us to support our initiatives and create lasting impact.",
  },
];

const FAQPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
              role="button"
              aria-expanded={activeIndex === index}
            >
              <h3>{faq.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0",

                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <p style={{ color: activeIndex === index ? "#043424" : "#666" }}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
