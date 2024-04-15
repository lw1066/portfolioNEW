import React from "react";
import Link from "next/link";
import styles from "../page.module.css";
import { useState } from "react";

function Projects() {
  return (
    <div id={styles.gridContainer}>
      <h2 id={styles.projectText}>Projects</h2>

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
            React Native app using AR(Viro) to encourage people to go explore!
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
  );
}

export default Projects;
