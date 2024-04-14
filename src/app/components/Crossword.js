import React, { useState, useEffect } from "react";

const Crossword = ({ src }) => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const threshold = scrollHeight / 2;

      if (scrollPosition + windowHeight >= threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Ensure this code only runs in the browser
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
        /* Your CSS styles */
      `}</style>
    </div>
  );
};

export default Crossword;
