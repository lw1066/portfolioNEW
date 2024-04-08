import React, { useState, useEffect } from "react";

const Crossword = ({ src }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition >= 45 && scrollPosition <= 55);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="card">
      <div className="image-container">
        <img src={src} alt="Crossword" className="image" />
      </div>
      <div className="circle-text">
        <p>
          I really enjoy a _?_ crossword!
          <br />
          <i>Weep quietly over small parasite(8)</i>
        </p>
      </div>
      <style jsx>{`
        .card {
          position: relative;
          display: inline-block;
          width: 20vw;
          height: 50vh;
          margin: 20px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          z-index: 1000;
          top: 40%;
        }

        .image-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .circle-text {
          position: absolute;
          bottom: 5px; /* 5px gap from the bottom */
          right: 5%; /* Adjust the right position */
          margin: 5px 0;
          width: 90%;
          height: 30%;
          border-radius: 10px;
          font-size: 14px;
          display: flex;
          align-items: center;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.8);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Crossword;
