"use client";

import styles from "./page.module.css";
import { useState, useRef } from "react";
import GrowingTextBox from "./components/GrowingPhone";
import GrowingTextBoxEmail from "./components/GrowingEmail";
import ScrollingSea from "./components/ScrollingSea";
import Projects from "./components/Projects";
import Crossword from "./components/Crossword";
import Cognition from "./components/Cognition";
import TechSkills from "./components/techSkills";
import Cuckmere from "./components/Cuckmere";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleEmail, setIsVisibleEmail] = useState(false);
  const projectsRef = useRef(null);

  return (
    <main className={styles.main}>
      <GrowingTextBox isVisible={isVisible} setIsVisible={setIsVisible} />
      <GrowingTextBoxEmail isVisibleEmail={isVisibleEmail} />

      <div id={styles.detailsCard}>
        <h1>Lewis Webster</h1>
        <h2>Junior Developer</h2>
        <div id={styles.contactImagesContainer}>
          <button onClick={() => setIsVisibleEmail(!isVisibleEmail)}>
            <img
              className={styles.contactImage}
              src="/icons8-email-open-50.png"
            />
          </button>
          <button onClick={() => setIsVisible(!isVisible)}>
            <img
              className={styles.contactImage}
              src="/icons8-ringing-phone-50.png"
            />
          </button>
          <a
            href="https://www.linkedin.com/in/lewis-webster-lw1066/"
            target="_blank"
            rel="noopener noreferrer"
            alt="linkedin link"
          >
            <img
              className={styles.contactImage}
              src="/icons8-linkedin-50.svg"
            />
          </a>
          <a
            href="https://github.com/lw1066"
            target="_blank"
            rel="noopener noreferrer"
            alt="github link"
          >
            <img className={styles.contactImage} src="/icons8-github-50.png" />
          </a>
        </div>
      </div>

      <div className={styles.scrollSeaContainer}>
        <ScrollingSea src={"/seay.webp"} />
      </div>
      <TechSkills src={'/robby.jpg'} />
      <Crossword src={"/cryptics.png"} />
      <Cognition src={'/cognitive.jpg'} />
      <Cuckmere src={'/cuckmere.webp'} />

      <Projects />
    </main>
  );
}
