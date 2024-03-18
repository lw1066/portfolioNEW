"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import GrowingTextBox from "./components/GrowingPhone";
import { useEffect, useRef, useState } from "react";
import GrowingTextBoxEmail from "./components/GrowingEmail";
import GrowingSea from "./components/growingSea";
import GrowingCryptic from "./components/GrowingCryptic";
import GrowingCognition from "./components/GrowingCognition";
import GrowingRobby from "./components/GrowingRobby";
import GrowingCuckmere from "./components/GrowingCuckmere";
import ParallaxStars from "./components/StarsBacking";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleEmail, setIsVisibleEmail] = useState(false);
  const [isVisibleSea, setIsVisibleSea] = useState(false);
  const [isVisibleProjects, setIsVisibleProjects] = useState(false);
  const [isVisibleCryptic, setIsVisibleCryptic] = useState(false);
  const [isVisibleCognition, setIsVisibleCognition] = useState(false);
  const [isVisibleRobby, setIsVisibleRobby] = useState(false);
  const [isVisibleCuckmere, setIsVisibleCuckmere] = useState(false);
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    setIsVisible(false);
    setIsVisibleEmail(false);
    setIsVisibleSea(false);
    setIsVisibleCryptic(false);
    setIsVisibleCuckmere(false);
    setIsVisibleRobby(false);
    setIsVisibleCognition(false);
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ParallaxStars />
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
            <button
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
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
              <img
                className={styles.contactImage}
                src="/icons8-github-50.png"
              />
            </a>
          </div>
        </div>

        <grid id={styles.resourcesGrid}>
          <button
            id={styles.cuckmere}
            onClick={() => setIsVisibleCuckmere(!isVisibleCuckmere)}
          >
            <img
              id={styles.cuckmere}
              src="/cuckValley.png"
              alt="Sun rising over Cuckmere valley, Sussex"
            />
          </button>
          <div className={styles.cuckText}>
            <GrowingCuckmere isVisibleCuckmere={isVisibleCuckmere} />
          </div>

          <button className={styles.projects} onClick={scrollToProjects}>
            <p>PROJECTS</p>
          </button>

          <div id={styles.crossWordContainer}></div>

          <button
            onClick={() => setIsVisibleCryptic(!isVisibleCryptic)}
            className={styles.crossWord}
          >
            <img
              className={styles.crossWord}
              src="/cryptic-crossword-modified.png"
            />
          </button>

          <div className={styles.crypticText}>
            <GrowingCryptic isVisibleCryptic={isVisibleCryptic} />
          </div>

          <button
            onClick={() => setIsVisibleSea(!isVisibleSea)}
            className={styles.sea}
          >
            <img className={styles.sea} src="/seay.jpeg" alt="The sea" />
          </button>

          <div className={styles.seaText}>
            <GrowingSea isVisibleSea={isVisibleSea} />
          </div>

          <div className={styles.robText}>
            <GrowingRobby isVisibleRobby={isVisibleRobby} />
          </div>
          <button
            onClick={() => setIsVisibleRobby(!isVisibleRobby)}
            id={styles.robby}
          >
            <img
              id={styles.robby}
              src="/robby.png"
              alt="Robby the robot from forbidden planet"
            />
          </button>
          <div className={styles.cogText}>
            <GrowingCognition isVisibleCognition={isVisibleCognition} />
          </div>
          <button
            id={styles.cognition}
            onClick={() => setIsVisibleCognition(!isVisibleCognition)}
          >
            <img
              id={styles.cognition}
              src="cognition.png"
              alt="Aspect of cognition in six heads"
            />
          </button>
        </grid>

        <div id={styles.cogRob}></div>

        <div ref={projectsRef} id={styles.gridContainer}>
          <h2>
            Some work that reflects progress made.
            <br />
            Still a long way to go but a good start.
            <br />I hope you agree...
          </h2>

          <div className={styles.grid}>
            <Link href="/anagrammiser" className={styles.card}>
              <h2>
                The
                <br />
                Ana-gram-miser <span>-&gt;</span>
              </h2>
              <p>React SPA using a dictionary API.</p>
            </Link>

            <Link href="/" className={styles.card}>
              <h2>
                North-coders
                <br />
                Final&nbsp;<span>-&gt;</span>
              </h2>
              <p>
                <b>Coming Soon!</b>
              </p>
            </Link>

            <Link href="/thoughts" className={styles.card}>
              <h2>
                The Thoughts of Others
                <br /> <span>-&gt;</span>
              </h2>
              <p>
                Mobile first full-stack news/blog app. React front with a
                node.js/PSQL back.
              </p>
            </Link>

            <Link href="/perceptia" className={styles.card}>
              <h2>
                Perceptia
                <br />
                Press <span>-&gt;</span>
              </h2>
              <p>Serverless Nextjs site using a NoSQL db and Firebase Auth.</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
