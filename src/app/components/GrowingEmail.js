import { useState, useEffect } from "react";

const GrowingLine = ({ isVisibleEmail }) => {
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (isVisibleEmail) {
      // Calculate the height of the line based on the window height
      const windowHeight = window.innerHeight;
      const lineHeight = windowHeight * 0.45; // Adjust as needed
      setLineHeight(lineHeight);
    } else {
      // Reset the line height to 0 when isVisibleEmail is false
      setLineHeight(0);
    }
  }, [isVisibleEmail]);

  return (
    <div
      className={`line ${isVisibleEmail ? "expand" : ""}`}
      style={{ height: `${lineHeight}px` }}
    >
      <div className="content">
        <h3
          className="text"
          style={{ display: isVisibleEmail ? "block" : "none" }}
        >
          Lewis_webster@hotmail.com
        </h3>
      </div>
      <style jsx>{`
        .line {
          position: fixed;
          top: -5px;
          left: 15%;
          width: 25px;
          background-color: yellow;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          transition: height 2.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          border-radius: 2px;
        }

        .content {
          margin-bottom: 160px;
        }

        .text {
          transform: rotate(-90deg); /* Rotate text in opposite direction */
          color: black;
          font-size: 18px;
          padding-left: 15px;
        }

        .expand {
          height: 50%;
        }
        @media (max-width: 700px) {
          //   .line {
          //     width: 15px;
          //   }

          .content {
            margin-bottom: 120px;
          }
        }

        @media (min-width: 701px) and (max-width: 1120px) {
          .text {
            font-size: 16px;
          }

          .content {
            margin-bottom: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default GrowingLine;
