import markdownStyles from './markdown-styles.module.css';

const Layout = ({ post }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1>{post.title}</h1>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default Layout;