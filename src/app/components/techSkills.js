import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cognition = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const fixedTopPercentage = 49; // Adjust as needed
      const offsetPixels = -430; // Adjust as needed

      setIsVisible(scrollPosition >= scrollHeight * 0.55);
      setFixedTop(windowHeight * (fixedTopPercentage / 100) + offsetPixels);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: isVisible ? 0 : "100vw" }}
      transition={{ duration: 3 }}
      style={{
        position: "fixed",
        top: `${fixedTop}px`,
        left: 0,
        transform: "translateY(-50%)",
        width: "100vw",
        height: "38.5vh", // Adjust height as needed
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
        2022: Started learning to code<br/>2023: 2 days a week online study<br/>2024: full-time
          bootcamp @Northcoders<br/>My skills are growing...
        </p>
      </div>
      <style jsx>{`
        .image-container {
          width: 100vw;
          height: 38.5vh; // Adjust height as needed
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
          right: 5%;
          width: 30%;
          height: 90%;
          padding: 1%;
          border-radius: 10px;
          font-size: 20px;
          font-weight:600;
          display: flex;
          align-items: center;
          align-text:center;
          justify-content: center;
        //   background-color: rgba(0, 0, 0, 0.8);
        //   border: 2px solid rgba(255, 255, 255, 0.3);
          color: black;
        }
      `}</style>
    </motion.div>
  );
};

export default Cognition;
