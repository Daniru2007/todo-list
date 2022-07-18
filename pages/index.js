import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const href = "api/hello";
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo List App</title>
        <meta name="description" content="This is a Todo List App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World!</h1>
        <Link href={href}>our api</Link>
      </main>
    </div>
  );
}
