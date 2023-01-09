import { useRouter } from 'next/router';

// catch-all routes example

const Post = () => {
  const router = useRouter();
  const { abc } = router.query;
  console.log('abc', abc);

  return (
    <section>
      Catch all route example
    </section>
  );
};

export default Post;