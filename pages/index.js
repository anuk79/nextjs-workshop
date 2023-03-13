import Head from 'next/head'
import Link from 'next/link';

export async function getStaticProps() {
  // get some data from some CMS
  return {
    props: {
      heading: 'Hello World - Next JS workshop'
    }
  };
}

export default function Home({ heading }) {
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
          {heading}
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