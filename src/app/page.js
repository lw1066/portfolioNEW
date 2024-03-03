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
          <a>
            <img className={styles.contactImage} src='/icons8-email-open-50.png' />
          </a>
          <span>
          <Link href='/'>
            <img className={styles.contactImage} src='/icons8-ringing-phone-50.png' />
          </Link>
          </span>
          <a href='https://linkedin.com/in/lewis-webster-lw1066' target="_blank" rel="noopener noreferrer" ></a>
            <img className={styles.contactImage} src='/icons8-linkedin-50.svg' />
          <a/>
          <a href='https://github.com/lw1066' target="_blank" rel="noopener noreferrer" >
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
            The<br/>Anagrammiser <span>-&gt;</span>
          </h2>
          <p>Single page React app using a couple of dictionary APIs.</p>
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
