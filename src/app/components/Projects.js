import React from "react";
import Link from "next/link";
import styles from "../page.module.css";
import { useState, useRef } from "react";

function Projects() {
  return (
    <div id={styles.gridContainer}>
      <h2 id={styles.projectText}>
        Projects reflecting progress made.
        <br />A long way to go but a good start...
      </h2>

      <div className={styles.grid}>
        <Link href="/anagrammiser" className={styles.card}>
          <h2>
            The
            <br />
            Ana-gram-miser <span>-&gt;</span>
          </h2>
          <p>React SPA using a dictionary API</p>
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
            Expressjs/PSQL back
          </p>
        </Link>

        <Link href="/perceptia" className={styles.card}>
          <h2>
            Perceptia
            <br />
            Press <span>-&gt;</span>
          </h2>
          <p>Serverless Nextjs site using a NoSQL db and Firebase Auth</p>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
