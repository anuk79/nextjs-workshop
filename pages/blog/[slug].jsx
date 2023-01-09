import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <section>
      <h1>{slug}</h1>
    </section>
  );
};

export default Post;