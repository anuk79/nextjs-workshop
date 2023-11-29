import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../../utils/api';

export async function getStaticProps() {
  const posts = await getAllPosts(['slug', 'title']);

  return {
    props: {
      posts
    },
  };
}

const Blog = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blogs</title>
      </Head>
      <section>
        <h1>Blogs</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Link href="/">Home</Link>
      </section>
    </div>
  );
};

export default Blog;