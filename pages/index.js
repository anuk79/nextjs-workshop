import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next JS Workshop</title>
        <meta name="description" content="Next JS Workshop demo examples" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Home page
        </h1>
        <div>
          <Link href="/about">
            About
          </Link>
          <Link href="/blog">
            Blog
          </Link>
        </div>
      </main>
    </>
  )
}
