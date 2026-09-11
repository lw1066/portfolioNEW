"use client";

import styles from "./page.module.css";
import { useState, useRef, useEffect } from "react";
import GrowingTextBoxEmail from "./components/GrowingEmail";
import ScrollingSea from "./components/ScrollingSea";
import Crossword from "./components/Crossword";
import Cognition from "./components/Cognition";
import TechSkills from "./components/TechSkills";
import Cuckmere from "./components/Cuckmere";
import Link from "next/link";

export default function Home() {
  const [isVisibleEmail, setIsVisibleEmail] = useState(false);
  const [showStaticProjects, setShowStaticProjects] = useState(false);
  const [renderProjects, setRenderProjects] = useState(false);
  const [displayDelay, setDisplayDelay] = useState(false);

  const animationRef = useRef(null);
  const autoScrollRef = useRef(false);
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      setDisplayDelay(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    let timeout;

    if (showStaticProjects) {
      timeout = setTimeout(() => {
        setRenderProjects(true);
      }, 1500);
    } else {
      setRenderProjects(false);
    }

    return () => clearTimeout(timeout);
  }, [showStaticProjects]);

  const handleProjectsLinkClick = () => {
    setShowStaticProjects((prev) => !prev);
  };

  const stopAutoScroll = () => {
    autoScrollRef.current = false;

    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    if (pauseTimeoutRef.current !== null) {
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    const handleUserScroll = () => {
      stopAutoScroll();
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        stopAutoScroll();
      }
    };

    window.addEventListener("wheel", handleUserScroll, {
      passive: true,
    });

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("keydown", handleKeyDown);
      stopAutoScroll();
    };
  }, []);

  const handleAutoScroll = () => {
    stopAutoScroll();
    autoScrollRef.current = true;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollToPercentage = (percentage, duration) => {
      return new Promise((resolve) => {
        const start = window.scrollY;
        const target = maxScroll * percentage;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
          if (!autoScrollRef.current) {
            resolve();
            return;
          }

          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easedProgress =
            progress < 0.5
              ? 2 * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          window.scrollTo(0, start + (target - start) * easedProgress);

          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animateScroll);
          } else {
            animationRef.current = null;
            resolve();
          }
        };

        animationRef.current = requestAnimationFrame(animateScroll);
      });
    };

    const pause = (duration) => {
      return new Promise((resolve) => {
        pauseTimeoutRef.current = setTimeout(() => {
          pauseTimeoutRef.current = null;
          resolve();
        }, duration);
      });
    };

    const runScrollSequence = async () => {
      await scrollToPercentage(0.25, 2500);

      if (!autoScrollRef.current) return;

      await pause(3000);

      if (!autoScrollRef.current) return;

      await scrollToPercentage(0.5, 2500);

      if (!autoScrollRef.current) return;

      await pause(3000);

      if (!autoScrollRef.current) return;

      await scrollToPercentage(0.7, 2500);

      if (!autoScrollRef.current) return;

      await pause(3000);

      if (!autoScrollRef.current) return;

      await scrollToPercentage(0.8, 2500);

      autoScrollRef.current = false;
    };

    runScrollSequence();
  };

  return (
    <main className={styles.main}>
      <GrowingTextBoxEmail isVisibleEmail={isVisibleEmail} />

      <div id={styles.detailsCard}>
        <h1>Lewis Webster</h1>
        <h2>Junior Developer</h2>

        <div id={styles.contactImagesContainer}>
          <button
            type="button"
            onClick={() => setIsVisibleEmail(!isVisibleEmail)}
          >
            <img
              className={styles.contactImage}
              src="/icons8-email-open-50.png"
              alt="Email Icon"
            />
          </button>

          <a
            href="https://www.linkedin.com/in/lewis-webster-lw1066/"
            target="_blank"
            rel="noopener noreferrer"
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
          >
            <img
              className={styles.contactImage}
              src="/icons8-github-50.png"
              alt="GitHub Icon"
            />
          </a>
        </div>

        <div
          id={styles.projectsLinkContainer}
          className={showStaticProjects ? styles.large : ""}
          onClick={handleProjectsLinkClick}
        >
          <p>
            Projects
            <span className={styles.clickHint}>
              {showStaticProjects ? "(click to close)" : "(click to open)"}
            </span>
          </p>

          <div className={styles.scrollArrowHorizontal}></div>
        </div>

        <div id={styles.scrollDownContainer}>
          <p>or</p>

          <p>
            <button
              type="button"
              onClick={handleAutoScroll}
              className={styles.scrollButton}
            >
              Scroll
              <span className={styles.scrollTooltip}>
                Can't be bothered to scroll? Click here.
              </span>
            </button>{" "}
            for more me
          </p>

          <div className={styles.arrowContainer}>
            <div className={`${styles.scrollArrow} ${styles.arrow1}`}></div>

            <div className={`${styles.scrollArrow} ${styles.arrow2}`}></div>

            <div className={`${styles.scrollArrow} ${styles.arrow3}`}></div>
          </div>
        </div>
      </div>

      {renderProjects && (
        <div className={styles.projectsStatic}>
          <div className={styles.grid}>
            <Link href="/anagrammiser" className={styles.card}>
              <h2>
                The
                <br />
                Ana-gram-miser
              </h2>
              <p>React SPA using a dictionary API</p>
            </Link>

            <Link href="/curationCreation" className={styles.card}>
              <h2>CurationCreation</h2>
              <p>Nextjs art curation website with firebase DB for database</p>
            </Link>

            <Link href="/thoughts" className={styles.card}>
              <h2>The Thoughts of Others</h2>
              <p>
                Mobile first full-stack news/blog app. React front with an
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

            <Link href="/touchgrass" className={styles.card}>
              <h2>Touch Grass</h2>
              <p>
                React Native app using AR(Viro) to encourage people to go
                explore
              </p>
            </Link>
          </div>
        </div>
      )}

      <div className={styles.scrollSeaContainer}>
        <ScrollingSea src={"/seay.webp"} />
      </div>

      {displayDelay && (
        <TechSkills
          handleProjects={handleProjectsLinkClick}
          src={"/robby.jpg"}
        />
      )}

      {displayDelay && <Crossword src={"/cryptics-removebg-preview.png"} />}

      {displayDelay && <Cognition src={"/cognitive.jpg"} />}

      {displayDelay && <Cuckmere src={"/cuckmere.webp"} />}
    </main>
  );
}
