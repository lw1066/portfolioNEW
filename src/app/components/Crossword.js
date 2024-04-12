import React, { useState, useEffect } from "react";

const Crossword = ({ src }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition + window.innerHeight >= scrollHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`card ${isFixed ? 'fixed' : ''}`}>
      <div className="image-container">
        <img src={src} alt="Crossword" className="image" />
      </div>
      <div className="circle-text">
          <p>I really enjoy the meeting of minds over a collaborative _?_ crossword! <br/><br/><i>Weep quietly over small parasite(8)</i>
        </p>
      </div>
      <style jsx>{`
        .card {
          position: relative;
          top: 44%;
          display: inline-block;
          width: 100vw;
          height: 30vh;
          margin: 20px;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          background-color: black;
          z-index: 1000;
          transition: top 0.8s ease; 
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
          margin-left:10%;
         
        
        }

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index:1000;
        }

        .circle-text {
          position: absolute;
          bottom: 10%; 
          right: 5%; 
          margin: 5px 0;
          width: 70%;
          height: 80%;
          border-radius: 10px;
          font-size: 20px;
          font-weight:700;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Crossword;
