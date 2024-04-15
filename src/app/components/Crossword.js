import React, { useState, useEffect } from "react";

const Crossword = ({ src }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const scrollPosition = window.scrollY;

        const threshold = scrollHeight * 0.46;

        if (scrollPosition + windowHeight >= threshold) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={`card ${isFixed ? "fixed" : ""}`}>
      <div className="image-container">
        <img src={src} alt="Crossword" className="image" />
      </div>
      <div className="circle-text">
        <p>
          I really enjoy a meeting of minds over a collaborative _?_ crossword!
        </p>
        <br />
        <i>_?_ = Weep quietly over small parasite(8)</i>
      </div>
      <style jsx>{`
        .card {
          display: ${isFixed ? "block" : "none"};
          position: relative;
          top: 45%;
          display: inline-block;
          width: 100vw;
          height: 30vh;
          margin: 20px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #11258c;
          z-index: 1000;
        }

        .fixed {
          position: fixed;
          top: 36%;
          transition: none;
        }

        .image-container {
          width: 15%;
          height: 100%;
          overflow: hidden;
          margin-left: 10%;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1000;
        }

        .circle-text {
          position: absolute;
          bottom: 10%;
          right: 5%;
          margin: 5px 0;
          width: 70%;
          height: 80%;
          font-size: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 700px) {
          .card {
            display: block;

            height: ${isFixed ? "100%" : "12%"};
            margin: 0;
            top: 45%;
          }

          .image-container {
            width: 100%;
            height: 48%;
            overflow: hidden;
          }

          .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1000;
          }

          .circle-text {
            position: absolute;

            margin: 0px auto;
            width: 80%;
            height: 40%;
            font-size: 20px;
            font-weight: 600;
            color: white;
          }

          .fixed {
            position: fixed;
            top: 0%;
            transition: top 3s ease;
          }
        }
      `}</style>
    </div>
  );
};

export default Crossword;
