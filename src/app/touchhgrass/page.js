import React from "react";
import Modal from "../components/Modal";
import { touchgrass } from "../../../public/projectInfo";

const { title, info1, info2, info3 } = touchgrass;

function ReactAppPage() {
  return (
    <>
      <Modal title={title} info1={info1} info2={info2} info3={info3} />
      <div>
        {/* <iframe
          src="https://lw1066.co.uk/"
          style={{ width: "100%", height: "100vh", border: "none" }}
        /> */}
        <h1>
          <br />
          <br />
          &emsp; &emsp; &emsp; &emsp; More info coming soon
        </h1>
      </div>
    </>
  );
}

export default ReactAppPage;
