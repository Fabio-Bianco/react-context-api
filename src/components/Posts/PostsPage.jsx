// src/components/posts/PostsPage.jsx

import PostsList from './PostsList'; // Importiamo la lista dei post

const PostsPage = () => {
  console.log("🧱 PostsPage renderizzato"); // Log di debug

  return (
    <section>
      <h1>📰 I nostri Post</h1>
      <PostsList />
    </section>
  );
};

export default PostsPage;
