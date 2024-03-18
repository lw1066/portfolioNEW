import { useState, useEffect } from "react";

const GrowingCuckmere = ({ isVisibleCuckmere }) => {
  const [circleSize, setCircleSize] = useState(0);

  useEffect(() => {
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

    if (isVisibleCuckmere) {
      calculateCircleSize();
      window.addEventListener("resize", calculateCircleSize);
    } else {
      setCircleSize(0);
    }

    return () => {
      window.removeEventListener("resize", calculateCircleSize);
    };
  }, [isVisibleCuckmere]);

  return (
    <div className="circle" style={{ width: circleSize, height: circleSize }}>
      <div className="content">
        <h3 style={{ display: isVisibleCuckmere ? "block" : "none" }}>
          The Sussex Downs give good green. Cuckmere Valley is my highlight
        </h3>
      </div>
      <style jsx>{`
        .circle {
          position: absolute;
          bottom: -50px;
          left: -200px;

          background-color: #57bbbc;
          overflow: hidden;
          transition: width 2.5s cubic-bezier(0.4, 0, 0.2, 1),
            height 2.5s cubic-bezier(0.4, 0, 0.2, 1),
            left 2.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid grey;
        }

        .content {
          padding: 1rem;
          font-size: 0.75rem;
          color: black;
          text-align: center;
        }

        @media (min-width: 701px) and (max-width: 1120px) {
          .content {
            font-size: 0.7rem;
          }
          .circle {
            top: -200px;
            left: -80px;
          }
        }

        @media (max-width: 700px) {
          .content {
            font-size: 0.5rem;
          }
          .circle {
            top: -40px;
            left: -60px;
          }
        }
      `}</style>
    </div>
  );
};

export default GrowingCuckmere;
