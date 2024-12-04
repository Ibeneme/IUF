import React from "react";

const SupportCause: React.FC = () => {
  const styles = {
    header: {
      fontSize: "40px",
      color: "#ffdb1b",
      fontWeight: 900,
      textAlign: "center" as const,
      marginTop: 48
    },
    text: {
      fontSize: "18px",
      color: "#ffdb1b",
      lineHeight: "1.6",
      textAlign: "center" as const,
    },
  };

  return (
    <section
      style={{
        backgroundColor: "#043424",
        paddingTop: 49,
        marginBottom: "-12px",
        borderBottom: `42px solid #ffdb1b`
      }}
    >
      <h2 style={styles.header}>Support Our Cause</h2>
      <p style={styles.text}>
        Account number of the person who's to receive donations:
        <br /> <br /> <br />
        <strong
          style={{
            fontSize: "48px",
            color: "#ffdb1b",
            fontWeight: 900,
            marginTop: 64,
            marginBottom: 64,
          }}
        >
          Zenith Bank. <br /> Isaac Ukeleghe. <br /> 2521739724
        </strong>{" "}
        <br /> <br /> <br />
      </p>
    </section>
  );
};

export default SupportCause;
