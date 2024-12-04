import React, { useState, useEffect } from "react";
import image1 from "./ngo-image.jpg"; // Update paths to your images
import image2 from "./ann.jpg";
import image3 from "./ann.jpg";
import image4 from "./ann.jpg";

const ImageSlider: React.FC = () => {
  const images = [image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change slide every 20 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={styles.sliderContainer}>
      <h2 style={styles.header}>Support Our Cause</h2>
      <p style={styles.text}>
        Account number of the person who's to receive donations:
        <br /> <br /> <br />
        <strong
          style={{
            fontSize: "32px",
            color: "#043424",
            fontWeight: 900,
            marginTop: 64,
            marginBottom: 64,
          }}
        >
          Zenith Bank. <br /> Isaac Ukeleghe.
          <br /> 2521739724
        </strong>{" "}
        <br /> <br /> <br />
      </p>
      <div style={styles.slider}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              ...styles.image,
              display: currentIndex === index ? "block" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  sliderContainer: {
    width: "100%",

    margin: "0 auto",
    overflow: "hidden",
    position: "relative" as const,
    backgroundColor: "#ffdb1b",
    textAlign: "center" as const,
    padding: "24px",
  },
  slider: {
    display: "flex",
    flexDirection: "row" as const,
    transition: "transform 0.5s ease-in-out",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    opacity: 0.8,
  },
  header: {
    fontSize: "64px",
    color: "#043424",
    marginBottom: "10px",
    fontWeight: 900,
    marginTop: 64,
  },
  text: {
    fontSize: "16px",
    color: "#043424",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
};

export default ImageSlider;
