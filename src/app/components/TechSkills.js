import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const techItems = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Cypress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
  },
  {
    name: "Jest",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Bitbucket",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
  },

  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
];

const Techskills = ({ src, handleProjects }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fixedTop, setFixedTop] = useState(0);
  const [offsetPercentage, setOffsetPercentage] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      setIsVisible(scrollPosition >= scrollHeight * 0.65);

      const offsetPixels = (window.innerHeight * offsetPercentage) / 100;
      setFixedTop(offsetPixels);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Set the initial values when the component loads
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [offsetPercentage]);

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: isVisible ? 0 : "-100vw" }}
      transition={{ duration: isSmallScreen ? 0.5 : 3 }}
      style={{
        position: "fixed",
        top: `${fixedTop}px`,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
      }}
    >
      <div className="image-container">
        <img src={src} alt="Robby the robot" className="image" />

        <div className="circle-text">
          <p>
            <strong>2019 Started coding</strong>
            <span className="extra-text">
              <br />
              - began tinkering, after analysis of large collections of text in
              corpus linguistics raised the question of automation
              <br />
              <br />
            </span>
          </p>
          <p>
            <strong>2022 Widened learning</strong>
            <span className="extra-text">
              <br />
              - started to learn web-development and began to explore how
              front/back ends work together
              <br />
              <br />
            </span>
          </p>

          <p>
            <strong>2024 Bootcamp @Northcoders</strong>
            <span className="extra-text">
              <br />
              - 3 month intensive full-stack development bootcamp
              <br />
              <br />
            </span>
          </p>

          <p>
            <strong>2025 React Engineer</strong>
            <span className="extra-text">
              <br />- built health intelligence displays, updated payment flow,
              implemented a subscription model
            </span>
          </p>
          <br />
          <p>
            I have significant experience delivering business English
            communication skills to diverse professionals and ever growing
            technical skills, take a look at some{" "}
            <a
              href="#"
              className="linkedin-link"
              onClick={(event) => {
                event.preventDefault();

                const start = Date.now();

                const forceTop = () => {
                  window.scrollTo(0, 0);

                  if (Date.now() - start < 5000) {
                    requestAnimationFrame(forceTop);
                  }
                };

                forceTop();

                setTimeout(() => {
                  handleProjects();
                }, 1500);
              }}
            >
              {" "}
              Projects
            </a>{" "}
          </p>
        </div>

        <div className="tech-box">
          <p>
            The most recent tech stack I worked with was for a health
            intelligence company from 2024 to 2026. It included:
          </p>
          <div className="tech-grid">
            {techItems.map((item) => (
              <div key={item.name} className="tech-item">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="tech-logo"
                />
                <span className="tech-name">{item.name}</span>
              </div>
            ))}
          </div>
          <p>
            If you'd like to know more about my work experience take a look at
            <a
              href="https://www.linkedin.com/in/lewis-webster-lw1066/"
              className="linkedin-link"
            >
              {" "}
              Linkedin
            </a>{" "}
          </p>
        </div>
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
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .circle-text,
        .tech-box {
          font-family: Arial, sans-serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.5;
          color: white;
        }

        .circle-text {
          position: absolute;
          top: 10%;
          left: 1%;
          width: 35%;
          height: 90%;
          padding: 3%;
          z-index: 9999;
        }

        .tech-box {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          top: 10%;
          right: 1%;
          width: 30%;
          padding: 3%;

          z-index: 9999;
        }

        .tech-title {
          text-align: center;
          font-size: 20px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .tech-grid {
          width: 50%;
          margin: 10px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .tech-logo {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }

        .tech-name {
          color: white;
          font-size: 10px;
          text-align: center;
          font-weight: 500;
        }

        .linkedin-link {
          cursor: pointer;
          color: red;
          transition: transform 0.3s ease;
        }

        .linkedin-link:hover {
          font-weight: bold;
          text-decoration: underline;
        }

        .extra-text {
          display: inline;
        }

        @media (max-width: 700px) {
          .tech-box {
            position: absolute;
            top: auto;
            bottom: 25px;
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            width: 90%;
            padding: 12px;
            text-align: center;
            font-size: 14px;
            background-color: rgba(4, 86, 38, 0.9);
            border-radius: 20px;
          }

          .circle-text {
            position: absolute;
            top: auto;
            bottom: 275px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            height: auto;
            text-align: center;
            background-color: rgba(4, 86, 38, 0.9);
            border-radius: 20px;
          }

          .circle-text p {
            font-size: 14px;
            margin: 0;
          }

          .tech-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 8px;
            width: 80%;
          }

          .tech-logo {
            width: 28px;
            height: 28px;
          }

          .tech-name {
            font-size: 9px;
          }

          .extra-text {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Techskills;
