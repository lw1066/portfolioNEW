import { useState, useEffect } from "react";

const GrowingRobby = ({ isVisibleRobby }) => {
  const [circleSize, setCircleSize] = useState(0);

  useEffect(() => {
    const calculateCircleSize = () => {
      const { innerWidth, innerHeight } = window;

      if (innerHeight < 500 || innerWidth < 700) {
        setCircleSize(115);
      } else if (innerWidth >= 701 && innerWidth <= 1120) {
        setCircleSize(160);
      } else {
        setCircleSize(230);
      }
    };

    if (isVisibleRobby) {
      calculateCircleSize();
      window.addEventListener("resize", calculateCircleSize);
    } else {
      setCircleSize(0);
    }

    return () => {
      window.removeEventListener("resize", calculateCircleSize);
    };
  }, [isVisibleRobby]);

  return (
    <div
      className={`circle `}
      style={{ width: circleSize, height: circleSize }}
    >
      <div className="content">
        <p style={{ display: isVisibleRobby ? "block" : "none" }}>
          2022: began coding. 2023: 2 days a week online study. 2024: full-time
          bootcamp @Northcoders. My skills are growing. (Oh yep that's Robby the
          robot - legend!)
        </p>
      </div>
      <style jsx>{`
        .circle {
          position: absolute;
          left: -250px;
          bottom: -185px;
          // background-color: #b8912e;
          overflow: hidden;
          transition: width 2.5s cubic-bezier(0.4, 0, 0.2, 1),
            height 2.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          // border: 1px solid grey;
          font-size: 12px;
          background-color: rgba(var(--callout-rgb), 0.5);
          border: 1px solid rgba(var(--callout-border-rgb), 0.3);
        }

        .content {
          padding: 1rem;
          color: white;
          font-size: 0.9rem;
          text-align: center;
          font-weight: bold;
        }

        @media (min-width: 701px) and (max-width: 1120px) {
          .content {
            font-size: 0.7rem;
          }

          .circle {
            bottom: -90px;
            left: -215px;
          }
        }

        @media (max-width: 700px) {
          .content {
            font-size: 0.5rem;
          }

          .circle {
            bottom: -68px;
            left: -94px;
          }
        }
      `}</style>
    </div>
  );
};

export default GrowingRobby;
