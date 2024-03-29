import React from "react";
import Modal from "../components/Modal";
import { thoughts } from "../../../public/projectInfo";

const { title, info1, info2, info3 } = thoughts;

function ReactAppPage() {
  return (
    <>
      <Modal title={title} info1={info1} info2={info2} info3={info3} />
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
