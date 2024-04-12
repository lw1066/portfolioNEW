import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cuckmere = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const fixedTopPercentage = 49; // Adjust as needed
      const offsetPixels = -430; // Adjust as needed

      setIsVisible(scrollPosition >= scrollHeight * 0.65 && scrollPosition <= scrollHeight * 0.80);
      setFixedTop(windowHeight * (fixedTopPercentage / 100) + offsetPixels);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: isVisible ? 0 : "-100vw" }}
      transition={{ duration: 3 }}
      style={{
        position: "fixed",
        top: `${fixedTop}px`,
        left: 0,
        transform: "translateY(-50%)",
        width: "100vw",
        height: "32vh", // Adjust height as needed
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
        The relation between language, mind and self is fascinating - I enjoy
          exploring it through the perspectives of Cognitive Linguistics
        </p>
      </div>
      <style jsx>{`
        .image-container {
          width: 100vw;
          height: 100vh;
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
          font-size: 20px;
          font-weight:600;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
        }
      `}</style>
    </motion.div>
  );
};

export default Cuckmere;
