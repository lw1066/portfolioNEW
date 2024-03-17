import { useState, useEffect } from "react";

const GrowingRobby = ({ isVisibleRobby }) => {
  const [circleSize, setCircleSize] = useState(0);

  useEffect(() => {
    const calculateCircleSize = () => {
      const { innerWidth, innerHeight } = window;

      if (innerHeight < 500 || innerWidth < 700) {
        setCircleSize(86);
      } else if (innerWidth >= 701 && innerWidth <= 1120) {
        setCircleSize(145);
      } else {
        setCircleSize(210);
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
        <p>
          Started coding in 2022, in 2023 spent 2 days a week studying online.
          At the start of 2024 took a full-time bootcamp @Northcoders. My skills
          are growing - take a look at some projects. (Oh and yep, that's Robby
          the robot - legend!)
        </p>
      </div>
      <style jsx>{`
        .circle {
          position: absolute;
          left: -250px;
          bottom: -185px;
          background-color: #b8912e;
          overflow: hidden;
          transition: width 2.5s cubic-bezier(0.4, 0, 0.2, 1),
            height 2.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 900;
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
            font-size: 0.5rem;
          }

          .circle {
            bottom: -20px;
            left: -215px;
          }
        }

        @media (max-width: 700px) {
          .content {
            font-size: 0.3rem;
          }

          .circle {
            bottom: -58px;
            left: -64px;
          }
        }
      `}</style>
    </div>
  );
};

export default GrowingRobby;
