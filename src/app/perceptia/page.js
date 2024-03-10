import React from "react";
import Modal from "../components/Modal";
import { pp } from "../../../public/projectInfo";

const { title, info1, info2, info3, info4 } = pp;

function ReactAppPage() {
  return (
    <>
      <Modal
        title={title}
        info1={info1}
        info2={info2}
        info3={info3}
        info4={info4}
      />
      <div>
        <iframe
          src="https://sweet-bavarois-92647e.netlify.app/"
          style={{ width: "100%", height: "100vh", border: "none" }}
        />
      </div>
    </>
  );
}

export default ReactAppPage;
