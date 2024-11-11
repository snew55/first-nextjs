import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {

  const [count, setCount] = useState(0);

  const countIncriment = () => {
    setCount(count + 1)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Sean Newsome welcomes <a href="https://nextjs.org">Next.js!</a>
        </h1>
      <p>Count: {count}</p>
      <button onClick={countIncriment}>Incriment</button>
    </div>
  );
};
