import React from "react";
import Modal from "../components/Modal";
// import { anagrammiser } from "../../../public/projectInfo";

// const { title, info1, info2, info3 } = anagrammiser;

function ReactAppPage() {
  return (
    <>
      {/* <Modal title={title} info1={info1} info2={info2} info3={info3} /> */}
      <div>
        <iframe
          src="https://thoughts-thoughts.netlify.app/"
          style={{ width: "100%", height: "100vh", border: "none" }}
        />
      </div>
    </>
  );
}

export default ReactAppPage;
