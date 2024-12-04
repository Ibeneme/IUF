import React from "react";
import "./Hero.css";
import image1 from "../../Sections/Why_Choose_us/G/bill.jpg";
import CenteredTextSection from "../CenteredTextSection/CenteredTextSection";
import HeroHeader from "./HeroHeader";
import FAQPage from "../FAQPage/FAQPage";
import Testimonials from "../Testimonials/Testimonials";
import WhyChooseUsF from "../Why_Choose_us/F/WhyChooseUsF";
import WhyChooseUsG from "../Why_Choose_us/G/WhyChooseUsG";
import WhyChooseUsH from "../Why_Choose_us/G/WhyChooseUsH";
import ImageSlider from "../Why_Choose_us/G/ImageSlider";
import SupportCause from "../Why_Choose_us/G/SupportCause";

const Hero: React.FC = () => {


  return (
    <div>
      <HeroHeader />
      <div className="hero-container">
        <div
          className='hero-slide enter'
          style={{
            backgroundImage: `url(${image1})`,
            width: "100vw",
            height: "100vh",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h2 className="hero-title">Welcome to Isaac Ukeleghe <span style={{color: '#ffdb1b'}}>Foundation</span></h2>
            <br />
            <p className="hero-title-p">
              The Isaac Ukeleghe Foundation is committed to empowering youth,
              discovering talents, and fostering personal growth. We provide
              impactful programs that help individuals achieve their full
              potential and contribute positively to society. Our foundation is
              dedicated to creating opportunities for everyone to grow and
              succeed.
            </p>
            {/* <p className="hero-title-p">
              Join us in making a difference across Africa.{" "}
              <span
                style={{
                  backgroundColor: "#C4D92E",
                  color: "#000",
                  padding: `0px 5px`,
                  fontWeight: 900,
                }}
              >
                Africa
              </span>
            </p> */}
          </div>
        </div>
      </div>
      <CenteredTextSection />
      <WhyChooseUsF />
      <WhyChooseUsG />
      <WhyChooseUsH />
      <SupportCause />
      <Testimonials />
      <FAQPage />
      <ImageSlider />
    </div>
  );
};

export default Hero;
