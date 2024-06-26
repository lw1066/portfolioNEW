import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cuckmere = ({ src, offsetPercentage = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsSmallScreen(window.innerWidth < 700);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      handleResize();
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [offsetPercentage]);

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: isVisible ? 0 : "100vw" }}
      transition={{ duration: isSmallScreen ? 0.5 : 3 }}
      style={{
        position: "fixed",
        top: `${fixedTop}px`,
        left: 0,
        transform: "translateY(-50%)",
        width: "100vw",
        height: "40vh",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        zIndex: isSmallScreen ? "1001" : "999",
      }}
    >
      <div className="image-container">
        <img src={src} alt="Cuckmere haven at sunrise" className="image" />
      </div>
      <div className="circle-text">
        <p>
          Mexico, Spain and Australia were beautiful places to live but Cuckmere
          Haven in the South Downs is my top spot for a wander
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
          top: 55%;
          right: 1%;
          width: 60%;
          // height: 90%;
          padding: 1%;
          // border-radius: 10px;
          font-size: 18px;
          font-weight: 600;
          // display: flex;
          // align-items: center;
          // align-text: center;
          // justify-content: center;
          color: white;
        }

        @media (max-width: 700px) {
          .image-container {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: 9999;
          }
          .circle-text {
            position: absolute;
            left: 5%;
            display: flex;
            align-items: center;
            width: 90%;
            height: 100%;
            top: 170%;
            z-index: 9999;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Cuckmere;
