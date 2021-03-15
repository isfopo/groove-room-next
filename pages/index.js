import Head from "next/head";
import styles from "../styles/App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Groove Room</title>
      </Head>

      <main className={styles.main}>
        <h1>hi</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
