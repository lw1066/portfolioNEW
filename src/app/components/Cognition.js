import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cognition = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);
  const [offsetPercentage, setOffsetPercentage] = useState(67);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const scroll =
          windowHeight < 700 ? scrollHeight * 0.45 : scrollHeight * 0.45;

        if (window.innerWidth < 700) {
          setOffsetPercentage(0);
        } else {
          setOffsetPercentage(67);
        }
        setIsVisible(scrollPosition >= scroll);
        const offsetPixels = (windowHeight * offsetPercentage) / 100;
        setFixedTop(offsetPixels);
      }
    };

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsSmallScreen(window.innerWidth < 700);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      handleScroll(); // Initial setup

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [offsetPercentage]); // Re-run effect when offsetPercentage changes

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: isVisible ? 0 : "-100vw" }}
      transition={{ duration: 3 }}
      style={{
        position: "fixed",
        top: `${fixedTop}px`,
        transform: "translateY(-50%)",
        width: "100vw",
        height: isSmallScreen && isVisible ? "100%" : "33vh",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
      }}
    >
      <div className="image-container">
        <img src={src} alt="Cognition" className="image" />
      </div>
      <div className="circle-text">
        <p>
          The relationship between language, mind and self is fascinating.
          Cognitive Linguistics provides exciting perspectives to explore it.
        </p>
      </div>
      <style jsx>{`
        .image-container {
          width: 100vw;
          height: 100%;
          overflow: hidden;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .circle-text {
          position: absolute;
          bottom: 5%;
          left: 1%;
          width: 20%;
          height: 90%;
          padding: 1%;
          font-size: 18px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        @media (max-width: 700px) {
          .circle-text {
            position: absolute;
            width: 90%;
            text-align: center;
            left: 5%;
          }

          .image-container {
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #88ab93;
          }

          .image {
            margin-top: 35%;
            width: 100%;
            height: 20%;
            object-fit: cover;
            top: 85%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Cognition;
