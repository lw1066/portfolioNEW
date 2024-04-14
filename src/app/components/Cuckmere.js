import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cuckmere = ({ src, offsetPercentage = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        setIsVisible(scrollPosition >= scrollHeight * 0.55);
        const offsetPixels = (windowHeight * offsetPercentage) / 100;
        setFixedTop(offsetPixels);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [offsetPercentage]);

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
        height: "40vh", // Adjust height as needed
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
          Living by the Sussex downs, Cuckmere Haven is my top spot for a wander
        </p>
      </div>
      <style jsx>{`
        .image-container {
          width: 100vw;
          height: 40vh;
          overflow: hidden;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .circle-text {
          position: absolute;
          top: 40%;
          right: 1%;
          width: 60%;
          height: 90%;
          padding: 1%;
          border-radius: 10px;
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          align-text: center;
          justify-content: center;
          color: white;
        }

        @media (max-width: 700px) {
          .image-container {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
          .circle-text {
            position: absolute;
            left: 5%;
            display: flex;
            align-items: center;
            width: 90%;
            height: 100%;
            top: 170%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Cuckmere;
