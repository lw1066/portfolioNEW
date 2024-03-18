import { useState, useEffect } from "react";

const GrowingCognition = ({ isVisibleCognition }) => {
  const [circleSize, setCircleSize] = useState(0);

  useEffect(() => {
    if (isVisibleCognition) {
      const calculateCircleSize = () => {
        const { innerWidth, innerHeight } = window;
        if (innerHeight < 500 || innerWidth < 700) {
          setCircleSize(110);
        } else if (innerWidth >= 701 && innerWidth <= 1120) {
          setCircleSize(140);
        } else {
          setCircleSize(195);
        }
      };

      calculateCircleSize();
      window.addEventListener("resize", calculateCircleSize);

      return () => {
        window.removeEventListener("resize", calculateCircleSize);
      };
    } else {
      setCircleSize(0);
    }
  }, [isVisibleCognition]);

  return (
    <div
      className={`circle `}
      style={{ width: circleSize, height: circleSize }}
    >
      <div className="content">
        <p
          className="text"
          style={{ display: isVisibleCognition ? "block" : "none" }}
        >
          Cognitive Linguistics is an area I find exciting. The relation between
          language, mind and self holds endless fascination
        </p>
      </div>
      <style jsx>{`
        .circle {
          position: absolute;
          bottom: -80px;
          right: -100px;
          background-color: #b6818b;
          overflow: hidden;
          transition: width 2.5s cubic-bezier(0.4, 0, 0.2, 1),
            height 2.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid grey;
        }

        .content {
          padding: 1rem;
          color: black;
          font-size: 0.75rem;
          text-align: center;
          font-weight: bold;
        }

        @media (min-width: 701px) and (max-width: 1120px) {
          .content {
            font-size: 0.7rem;
          }

          .circle {
            bottom: -90px;
            right: -65px;
          }
        }

        @media (max-width: 700px) {
          .content {
            font-size: 0.5rem;
          }

          .circle {
            bottom: -70px;
            right: -45px;
          }
        }
      `}</style>
    </div>
  );
};

export default GrowingCognition;
