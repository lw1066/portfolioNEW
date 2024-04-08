import { useState, useEffect } from "react";

const ScrollingSea = ({ src, alt }) => {
  const [scale, setScale] = useState(0.01);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  //   const [disableScroll, setDisableScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const percentage = (scrollPosition / (scrollHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);

      const maxScale = 1; // Maximum scale when fully expanded
      const minScale = 0.001; // Minimum scale (initially a small circle)
      const newScale = minScale + (percentage / 12) * (maxScale - minScale);
      setScale(Math.min(Math.max(newScale, minScale), maxScale));

      if (percentage >= 12) {
        setIsTextVisible(true);
        // setDisableScroll(true);
        setTimeout(() => {
          // setDisableScroll(false);
        }, 10000); // Re-enable scrolling after 10 seconds
      } else if (percentage < 12) {
        setIsTextVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 999,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: `${scale * 200}vw`,
          height: `${scale * 200}vw`,
          borderRadius: "50%",
          transition: "width 3s ease, height 3s ease",
        }}
      />
      {isTextVisible && (
        <div
          className="scroll-in-text"
          style={{ opacity: Math.max(0, 1 - (scrollPercentage - 30) / 10) }}
        >
          <div className="text-content">
            <span className="line1">Sea swimming is a particular joy</span>
            <br />
            <span className="line2">The water provides perspective</span>
            <br />
            <span className="line3">The repetition is meditative</span>
          </div>
        </div>
      )}
      <style jsx>{`
        .scroll-in-text {
          position: absolute;
          top: 45%;
          left: 0;
          right: 0;
          transform: translate(0, -50%);
          z-index: 990;
          text-align: center;
          color: #222222;
          font-size: 50px;
          font-weight: bold;
          font-style: italic;
          padding: 20px;
          transition: opacity 0.5s ease; /* Smooth transition for opacity */
        }

        .text-content {
          animation: fadeIn 9s forwards; /* Fade in text over 9 seconds */
        }

        .line1 {
          opacity: 0;
          animation: fadeInLine 2s forwards 0s; /* Fade in line 1 after 0s delay */
        }

        .line2 {
          opacity: 0;
          animation: fadeInLine 2s forwards 1s; /* Fade in line 2 after 3s delay */
        }

        .line3 {
          opacity: 0;
          animation: fadeInLine 2s forwards 2s; /* Fade in line 3 after 6s delay */
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInLine {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingSea;
