import Head from 'next/head';
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      <Head>
        <title>Blogs</title>
      </Head>
      <section>
        <h1>Blogs</h1>
        <Link href="/">Home</Link>
      </section>
    </div>
  );
};

export default Blog;