import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
      <div id={styles.detailsCard}>
        <h1>Lewis Webster</h1>
        <h2>Junior Developer</h2>
        <div id={styles.contactImagesContainer}>
          <a href='mailto:lewis_websbster@hotmail.com' alt='email address'>
            <img className={styles.contactImage} src='/icons8-email-open-50.png' />
            <span className={styles.contactText}>lewis_webster@hotmail.com<br/>Click to go to your email</span>
          </a>
          <span>
          <Link href='/'>
            <img className={styles.contactImage} src='/icons8-ringing-phone-50.png' />
            <span className={styles.contactText}>Call me on<br/>0750 000 3912</span>
          </Link>
          </span>
          <a href='https://www.linkedin.com/in/lewis-webster-lw1066/' target="_blank" rel="noopener noreferrer" alt='linkedin link'>
            <img className={styles.contactImage} src='/icons8-linkedin-50.svg' />
          </a>
          <a href='https://github.com/lw1066' target="_blank" rel="noopener noreferrer" alt='github link' >
           <img className={styles.contactImage} src='/icons8-github-50.png' />
          </a>
        </div>
      </div>
     
      <div className={`${styles.center} ${styles.circularImageContainer}`}>
        <div className={`${styles.circularImage}`}>
          <Image
            className={styles.logo}
            src="/seay.jpeg"
            alt="The sea"
            width={180}
            height={180}
            priority
          />
        </div>
      </div>

      <div>
        <h2>Projects</h2>
      </div>

      <div className={styles.grid}>
        <Link
          href="/anagrammiser"
          className={styles.card}
        >
          <h2>
            The<br/>Ana-gram-miser <span>-&gt;</span>
          </h2>
          <p>React SPA using a dictionary API.</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
        >
          <h2>
            Northcoders<br />Final&nbsp;<span>-&gt;</span>
          </h2>
          <p><b>Coming Soon!</b></p>
        </Link>

        <Link
          href="/"
          className={styles.card}
        >
          <h2>
          News site<br/> demo  <span>-&gt;</span>
          </h2>
          <p><b>Coming Soon!</b><br/>React front with a node.js backend and PSQL db.</p>
        </Link>

        <Link
          href="/perceptia"
          className={styles.card}
        >
          <h2>
            Perceptia<br/>Press <span>-&gt;</span>
          </h2>
          <p>
          Serverless Nextjs site using a NoSQL db and Firebase Auth.
          </p>
        </Link>
      </div>
    </main>
  );
}
