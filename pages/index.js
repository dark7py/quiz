import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Link href={'/quiz'}>
            <a  className={styles.card}>
              <h2>Quiz &rarr;</h2>
              <p>let&apos;s solve a next quiz</p>
            </a>
          </Link>
          <Link href={'/map'}>
            <a  className={styles.card}>
              <h2>Map &rarr;</h2>
              <p>leaflet map</p>
            </a>
          </Link>

          <Link href={'/page'}>
            <a className={styles.card}>
              <h2>Page &rarr;</h2>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
