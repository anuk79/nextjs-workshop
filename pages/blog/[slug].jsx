
import Head from 'next/head';
import Layout from '../../components/Layout';
import { getAllPosts, getPostBySlug } from '../../utils/api';
import markdownToHtml from '../../utils/markdownToHtml';

const Post = ({ post }) => {
  return (
    <section>
      <Head>
        <title>
          {post.title}
        </title>
      </Head>
      <Layout post={post} />
    </section>
  );
};


export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'author',
    'content',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;