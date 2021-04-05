import Head from "next/head";
import styles from "../styles/App.module.css";
import { signIn, signOut, useSession } from "next-auth/client";

import { Home } from "../components/home";

export default function App() {
  const [session] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Groove Room</title>
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            <h1>You are not logged in</h1>
            <button onClick={signIn}>Sign In</button>
          </>
        )}

        {session && (
          <>
            <Home session={session} />
          </>
        )}
      </main>

      <footer className={styles.footer}>
        {session && (
          <>
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </footer>
    </div>
  );
}
