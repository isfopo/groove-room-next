import Head from "next/head";
import styles from "../styles/App.module.css";
import { signIn, signOut, useSession } from "next-auth/client";

export default function App() {
  const [session, loading] = useSession();

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
            {" "}
            {console.log(session)}
            <h1>You are signed in as {session.user.email}</h1>
            <img src={session.user.image} />
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
