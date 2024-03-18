import { useState, useEffect } from "react";

const GrowingCryptic = ({ isVisibleCryptic }) => {
  const [circleSize, setCircleSize] = useState(0);

  useEffect(() => {
    if (isVisibleCryptic) {
      const calculateCircleSize = () => {
        const { innerWidth, innerHeight } = window;

        if (innerHeight < 500 || innerWidth < 700) {
          setCircleSize(90);
        } else if (innerWidth >= 701 && innerWidth <= 1120) {
          setCircleSize(110);
        } else {
          setCircleSize(175);
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
  }, [isVisibleCryptic]);

  return (
    <div className={"circle"} style={{ width: circleSize, height: circleSize }}>
      <div className="content">
        <h3 style={{ display: isVisibleCryptic ? "block" : "none" }}>
          "__________ are great!"&emsp;{" "}
          <i>Weep quietly over short parasite starting to suck (8)</i>{" "}
        </h3>
      </div>
      <style jsx>{`
        .circle {
          position: absolute;

          top: 25px;
          background-color: #802621;
          overflow: hidden;
          transition: width 2.5s cubic-bezier(0.4, 0, 0.2, 1),
            height 2.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          boorder: 1px solid grey;
        }

        .content {
          padding: 1rem;
          color: black;
          font-size: 0.9rem;
          text-align: center;
        }

        @media (min-width: 701px) and (max-width: 1120px) {
          .content {
            font-size: 0.6rem;
          }
        }

        @media (max-width: 700px) {
          .content {
            font-size: 0.45rem;
          }

          .circle {
            top: 40px;
            right: -55px;
          }
        }
      `}</style>
    </div>
  );
};

export default GrowingCryptic;
