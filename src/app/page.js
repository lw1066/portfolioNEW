"use client";

import styles from "./page.module.css";
import { useState, useRef, useEffect } from "react";
import GrowingTextBox from "./components/GrowingPhone";
import GrowingTextBoxEmail from "./components/GrowingEmail";
import ScrollingSea from "./components/ScrollingSea";
import Projects from "./components/Projects";
import Crossword from "./components/Crossword";
import Cognition from "./components/Cognition";
import TechSkills from "./components/TechSkills";
import Cuckmere from "./components/Cuckmere";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleEmail, setIsVisibleEmail] = useState(false);
  const [showStaticProjects, setShowStaticProjects] = useState(false);
  const [renderProjects, setRenderProjects] = useState(false);
  const gridContainerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleProjectsLinkClick = () => {
    setShowStaticProjects(!showStaticProjects);
    console.log(showStaticProjects);
    if (!showStaticProjects) {
      setTimeout(() => {
        setRenderProjects(true);
      }, 1500);
    } else {
      setRenderProjects(false);
    }
  };

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
              alt="Email Icon"
            />
          </button>
          <button onClick={() => setIsVisible(!isVisible)}>
            <img
              className={styles.contactImage}
              src="/icons8-ringing-phone-50.png"
              alt="Phone Icon"
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
              alt="LinkedIn Icon"
            />
          </a>
          <a
            href="https://github.com/lw1066"
            target="_blank"
            rel="noopener noreferrer"
            alt="github link"
          >
            <img
              className={styles.contactImage}
              src="/icons8-github-50.png"
              alt="GitHub Icon"
            />
          </a>
        </div>
        <div
          id={`${styles.projectsLinkContainer}`}
          className={showStaticProjects ? styles.large : ""}
          onClick={handleProjectsLinkClick}
        >
          <p>Projects</p>
          <div className={styles.scrollArrowHorizontal}></div>
        </div>
        <div id={styles.scrollDownContainer}>
          <p>or</p>
          <p>Scroll down for a little more about me</p>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>
      {renderProjects && (
        <div className={`${styles.projectsStatic}`}>
          <div className={styles.grid}>
            <Link href="/anagrammiser" className={styles.card}>
              <h2>
                The
                <br />
                Ana-gram-miser
              </h2>
              <p>React SPA using a dictionary API</p>
            </Link>

            <Link href="/touchgrass" className={styles.card}>
              <h2>Touch Grass</h2>
              <p>
                React Native app using AR(Viro) to encourage people to go
                explore
              </p>
            </Link>

            <Link href="/thoughts" className={styles.card}>
              <h2>The Thoughts of Others</h2>
              <p>
                Mobile first full-stack news/blog app. React front with a
                Expressjs/PSQL back
              </p>
            </Link>

            <Link href="/perceptia" className={styles.card}>
              <h2>
                Perceptia
                <br />
                Press
              </h2>
              <p>Serverless Nextjs site using a NoSQL db and Firebase Auth</p>
            </Link>
          </div>
        </div>
      )}

      <div className={styles.scrollSeaContainer}>
        <ScrollingSea src={"/seay.webp"} />
      </div>
      <TechSkills src={"/robby.jpg"} />
      <Crossword src={"/cryptics-removebg-preview.png"} />
      <Cognition src={"/cognitive.jpg"} />
      <Cuckmere src={"/cuckmere.webp"} />

      <Projects />
    </main>
  );
}
