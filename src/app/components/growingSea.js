import { useState, useEffect } from "react";

const GrowingSea = ({ isVisibleSea }) => {
  const [circleSize, setCircleSize] = useState(0);

  useEffect(() => {
    if (isVisibleSea) {
      const calculateCircleSize = () => {
        const { innerWidth, innerHeight } = window;

        if (innerHeight < 500 || innerWidth < 700) {
          setCircleSize(100);
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
  }, [isVisibleSea]);

  return (
    <div
      className={`circle `}
      style={{ width: circleSize, height: circleSize }}
    >
      <div
        className="content"
        style={{ display: isVisibleSea ? "block" : "none" }}
      >
        <h3>Sea swimming is a particular joy</h3>
        <h3>The water provides perspective </h3>
        <h3>The repetition is meditative</h3>
      </div>
      <style jsx>{`
        .circle {
          position: absolute;
          right: -40px;
          bottom: 30px;
          background-color: #c7622b;
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
        }

        @media (min-width: 701px) and (max-width: 1120px) {
          .content {
            font-size: 0.6rem;
          }

          .circle {
            bottom: 0px;
          }
        }

        @media (max-width: 700px) {
          .content {
            font-size: 0.45rem;
          }

          .circle {
            bottom: 5px;
            right: -50px;
          }
        }
      `}</style>
    </div>
  );
};

export default GrowingSea;
