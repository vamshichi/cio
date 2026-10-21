"use client";

import React from "react";

type ExecutiveProfileProps = {
  leftLogo?: string;
  profileImage?: string;
  rightLogo?: string;
  name?: string;
  designation?: string;
  company?: string;
};

export default function ExecutiveProfile({
  leftLogo = "/images/australia-logo.jpeg",
  profileImage = "/images/devraj-moitra.jpeg",
  rightLogo = "/images/ghostwing-tech-logo.png",
  name = "Devraj Moitra",
  designation = "OWNER & CEO",
  company = "Ghostwing Tech",
}: ExecutiveProfileProps) {
  const styles: Record<string, React.CSSProperties> = {
    section: {
      display: "grid",
      gridTemplateColumns: "180px minmax(0, 1fr) 180px",
      alignItems: "start",
      justifyItems: "center",
      gap: "32px",
      width: "calc(100% - 32px)",
      maxWidth: "1000px",
      margin: "40px auto",
      padding: "36px 28px",
      background: "linear-gradient(135deg, #ffffff, #f8fafc)",
      border: "1px solid #e2e8f0",
      borderRadius: "20px",
      boxShadow: "0 12px 40px rgba(15, 23, 42, 0.08)",
      boxSizing: "border-box",
      textAlign: "center",
    },

    imageContainer: {
      width: "100%",
      maxWidth: "180px",
      aspectRatio: "1 / 1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "#ffffff",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(15, 23, 42, 0.07)",
      boxSizing: "border-box",
    },

    logo: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "contain",
      padding: "10px",
      boxSizing: "border-box",
    },

    person: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: 0,
      width: "100%",
    },

    photo: {
      display: "block",
      width: "180px",
      height: "180px",
      maxWidth: "100%",
      aspectRatio: "1 / 1",
      objectFit: "cover",
      objectPosition: "center top",
      borderRadius: "12px",
      border: "3px solid #c9a44c",
      padding: "4px",
      backgroundColor: "#ffffff",
      boxShadow: "0 8px 24px rgba(15, 23, 42, 0.12)",
      boxSizing: "border-box",
    },

    name: {
      margin: "20px 0 8px",
      color: "#0f172a",
      fontSize: "clamp(22px, 3vw, 32px)",
      fontWeight: 700,
      lineHeight: 1.2,
      overflowWrap: "anywhere",
    },

    designation: {
      margin: "0",
      color: "#a6812d",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
    },

    company: {
      margin: "8px 0 0",
      color: "#475569",
      fontSize: "16px",
      fontWeight: 500,
      overflowWrap: "anywhere",
    },
  };

  return (
    <>
      <section className="executive-profile" style={styles.section}>
        <div className="side-image" style={styles.imageContainer}>
          <img
            src={leftLogo}
            alt="Organization logo"
            style={styles.logo}
          />
        </div>

        <div style={styles.person}>
          <img
            src={profileImage}
            alt={name}
            style={styles.photo}
          />

          <h3 style={styles.name}>{name}</h3>

          <p style={styles.designation}>{designation}</p>

          <p style={styles.company}>{company}</p>
        </div>

        <div className="side-image" style={styles.imageContainer}>
          <img
            src={rightLogo}
            alt={`${company} logo`}
            style={styles.logo}
          />
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 640px) {
          .executive-profile {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 20px 16px !important;
            padding: 24px 16px !important;
            margin: 24px auto !important;
          }

          .executive-profile > div:nth-child(2) {
            grid-column: 1 / -1;
            grid-row: 1;
          }

          .executive-profile > .side-image {
            width: 100%;
            max-width: 150px;
            justify-self: center;
          }

          .executive-profile > div:nth-child(2) > img {
            width: min(180px, 100%);
            height: auto;
            aspect-ratio: 1 / 1;
          }
        }

        @media (min-width: 641px) and (max-width: 800px) {
          .executive-profile {
            grid-template-columns: 140px minmax(0, 1fr) 140px !important;
            gap: 20px !important;
          }

          .executive-profile > .side-image {
            max-width: 140px;
          }

          .executive-profile > div:nth-child(2) > img {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>
    </>
  );
}