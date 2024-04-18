import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Techskills = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);
  const [offsetPercentage, setOffsetPercentage] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setIsVisible(scrollPosition >= scrollHeight * 0.65);
      const offsetPixels = (windowHeight * offsetPercentage) / 100;
      setFixedTop(offsetPixels);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsSmallScreen(window.innerWidth < 700);
      }
    };

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        handleScroll();
        handleResize();
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: isVisible ? 0 : "-100vw" }}
      transition={{ duration: isSmallScreen ? 0.5 : 3 }}
      style={{
        position: "fixed",
        top: `${fixedTop}px`,
        left: 0,
        transform: "translateY(-50%)",
        width: "100vw",
        height: "32vh", // Adjust height as needed
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
      }}
    >
      <div className="image-container">
        <img src={src} alt="Robby the robot" className="image" />
      </div>
      <div className="circle-text">
        <p>2022: Started learning to code</p>
        <p>2023: 2 days a week online study</p>
        <p>2024: Bootcamp @Northcoders</p>
        <br />
        <p>
          My skills are growing. Take a look at some projects (keep scrolling!)
          for an idea of what I'm doing now
        </p>
        <br />
        <p>
          If you'd like to know more about my work experience take a look at
          <a
            href="https://www.linkedin.com/in/lewis-webster-lw1066/"
            className="linkedin-link"
          >
            {" "}
            Linkedin
          </a>{" "}
          or click Home to head back
        </p>
      </div>
      <style jsx>{`
        .image-container {
          position: relative;
          width: 100vw;
          height: 100vh; 
          overflow: hidden;
          background-color: #045626;
          }

        .image {
          position: absolute; 
          top: 0; 
          left: 0;
          width: 100%;
          height: 100%
          object-fit: cover;
          
        }

        .linkedin-link {
          cursor: pointer;
          color: black;
          transition: color 0.3s ease;
        }

        .linkedin-link:hover {
          color: red;
        }

        .circle-text {
          position: absolute;
          top: 35%;
          left: 1%;
          width: 30%;
          height: 90%;
          padding: 1%;
          font-size: 18px;
          font-weight: 500;         
          color: white;
          z-index:9999;
        }

        @media (max-width: 700px) {
          .image-container {
            display:flex;
            flex-direction: column;
            align-items:center;
            }

          .circle-text {
            position: absolute;
            top:175%;
          
            left: 50%; /* Center horizontally */
            transform: translateX(-50%); /* Center horizontally */
            width: 90%;
            text-align: center; /* Center text */
          }

          .circle-text p {
            font-size: 14px;
            margin: 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Techskills;
