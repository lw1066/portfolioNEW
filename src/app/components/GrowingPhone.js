const SlideInTextBox = ({ isVisible, setIsVisible }) => {
  return (
    <div className={`textbox ${isVisible ? "slide-in" : ""}`}>
      <div className="content">
        <h3 style={{ display: isVisible ? "block" : "none" }}>
          Call 0750 000 3912
        </h3>
      </div>
      <style jsx>{`
        .textbox {
          position: fixed;
          top: 150px;
          left: -100%;
          transform: translateX(0);
          height: 50px;
          width: 44%;
          background-color: blue;
          overflow: hidden;
          transition: left 2.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 950;
          display: flex;
          align-items: center;
          justify-content: end;
          border-radius: 2px;
        }

        .slide-in {
          left: 0; /* Slide in from the left */
        }

        .content {
          padding: 20px;
          font-size: 25px;
        }

        @media (min-width: 701px) and (max-width: 1120px) {
          .textbox {
            width: 50%;
            height: 3.5vw;
          }

          .content {
            font-size: 2vw;
          }
        }

        @media (max-width: 700px) {
          .textbox {
            width: 55%;
            height: 4.5vw;
          }

          .content {
            font-size: 2vw;
          }
        }
      `}</style>
    </div>
  );
};

export default SlideInTextBox;
