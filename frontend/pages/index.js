import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hero from "../src/assets/hero.gif";
// import book from "../src/assets/book.gif";
// import book from "../src/assets/hero.jpg";
import book from "../src/assets/hero.png";
import FeaturesCard from "../src/components/FeaturesCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <div className={styles.title}>
            <span className={`${styles.titleWord} ${styles.word1}`}>
              Scientia{" "}
            </span>
            <span className={`${styles.titleWord} ${styles.word2}`}>DAO</span>
          </div>
          <div className={styles.tagline}>
            <span className={`${styles.titleWord} ${styles.word2}`}>
              Publish & share{" "}
            </span>
            <span className={`${styles.titleWord} ${styles.word1}`}>
              your research on the
            </span>
            <span className={`${styles.titleWord} ${styles.word2}`}>
              {" "}
              world&#39;s first DAO{" "}
            </span>
            <span className={`${styles.titleWord} ${styles.word1}`}>
              community for SCIENTISTS
            </span>
          </div>
          <button className={styles.button} role="button">
            Explore DAO
          </button>
        </div>

        <div className={styles.hero}>
          {/* <Image src={hero} /> */}
          <Image src={book} />
        </div>
      </main>

      <div className={styles.features}>
        <div className={styles.title}>
          <span className={`${styles.titleWord} ${styles.word2}`}>DAO</span>
          <span className={`${styles.titleWord} ${styles.word1}`}>
            {" "}
            Features
          </span>
        </div>

        <div className={styles.wrapper}>
          <FeaturesCard />
          <FeaturesCard />
        </div>
      </div>
    </div>
  );
}
