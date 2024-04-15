import React, { useState, useEffect } from "react";

const SlideInTextBox = ({ isVisible, setIsVisible }) => {
  const [isContentVisible, setIsContentVisible] = useState(isVisible);

  useEffect(() => {
    setIsContentVisible(isVisible);
  }, [isVisible]);

  return (
    <div className={`textbox ${isVisible ? "slide-in" : ""}`}>
      <div className="content" style={{ opacity: isContentVisible ? 1 : 0 }}>
        <h3>Call 0750 000 3912</h3>
      </div>
      <style jsx>{`
        .textbox {
          position: fixed;
          top: 32%;
          left: -100%;
          transform: translateX(0);
          height: 40px;
          width: 39%;
          overflow: hidden;
          transition: left 2.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: end;
          border-radius: 2px;
          background-color: rgba(var(--callout-rgb), 0.5);
          border: 1px solid rgba(var(--callout-border-rgb), 0.3);
          color: white;
        }

        .slide-in {
          left: 0;
        }

        .content {
          padding: 20px;
          font-size: 25px;
          transition: opacity 5s ease;
        }

        @media (min-width: 701px) and (max-width: 1120px) {
          .textbox {
            width: 40%;
            height: 3.5vw;
          }

          .content {
            font-size: 2vw;
          }
        }

        @media (max-width: 700px) {
          .textbox {
            width: 59%;
            height: 25px;
            top: 15%;
          }

          .content {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default SlideInTextBox;
