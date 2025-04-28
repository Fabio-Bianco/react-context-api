// src/pages/Posts.jsx

import { usePostsContext } from "../contexts/PostsContext";
import PostCard from "../components/posts/PostCard"; // 👈 Import del PostCard

const Posts = () => {
  const { posts, loading } = usePostsContext();

  return (
    <div className="posts-grid">
      <h1>Posts</h1>
      <p>Benvenuto nella pagina dei post!</p>

      {loading ? (
        <p>Caricamento...</p>
      ) : (
        posts.map(post => (
          <PostCard 
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
