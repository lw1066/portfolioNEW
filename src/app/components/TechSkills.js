import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Techskills = ({ src }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);
  const [offsetPercentage, setOffsetPercentage] = useState(0);

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

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
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
          font-size: 20px;
          font-weight: 600;
          display: flex;
          // align-items: center;
          // justify-content: center;
          color: white;
          display:flex;
          flex-direction:column;
          z-index:9999;
        }

        @media (max-width: 700px) {
          .circle-text {
            position: absolute;
            top: 180%;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 5%;
            font-size: 18px;         
            left: 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Techskills;
